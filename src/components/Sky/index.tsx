import React, { useEffect, useRef } from 'react';
import vis, { Network } from 'vis-network';
import { DataSet } from 'vis-data/peer/esm/vis-data';

// import 'https://unpkg.com/vis-network/styles/vis-network.min.css';

import { stars, links } from '../../data/stars';
import * as S from './index.styles';

import StarWhite from '../../images/star_white.svg';
import StarRed from '../../images/star_red.svg';
import StarOrange from '../../images/star_orange.svg';
import StaYellow from '../../images/star_yellow.svg';
import StarGreen from '../../images/star_green.svg';
import StarBlue from '../../images/star_blue.svg';
import StarPurple from '../../images/star_purple.svg';

const starIcon = {
  white: StarWhite,
  red: StarRed,
  orange: StarOrange,
  yellow: StaYellow,
  green: StarGreen,
  blue: StarBlue,
  purple: StarPurple,
};

const options: vis.Options = {
  nodes: {
    shape: 'image',
    font: {
      size: 12,
      color: 'white',
    },
    size: 15,
    chosen: {
      node: function (values, id, selected, hovering) {
        values.size = 18;
      },
      label: function (values, id, selected, hovering) {
        values.mod = 'bold';
      },
    },
  },
  edges: {
    width: 1,
    color: 'rgba(255, 255, 255,  0.5)',
    shadow: true,
    smooth: false,
    chosen: false,
    physics: false,
  },
  physics: {
    hierarchicalRepulsion: {
      centralGravity: 0,
      springLength: 0,
      springConstant: 0,
      nodeDistance: 50,
      damping: 0.1,
    },
    maxVelocity: 1,
    minVelocity: 0.5,
    solver: 'hierarchicalRepulsion',
  },
  interaction: {
    hover: true,
  },
};

export interface SkyPropsType {
  onClickNode: (nodeId: string) => void;
  onloadAnimation?: string;
}

const Sky = ({ onClickNode, onloadAnimation }: SkyPropsType) => {
  const visRef = useRef<HTMLDivElement | null>(null);
  const visNodes = new DataSet<vis.Node>([]);
  const visEdges = new DataSet<vis.Edge>([]);
  var visNetwork: vis.Network;

  useEffect(() => {
    if (visRef.current) {
      visNetwork = new Network(
        visRef.current,
        { nodes: visNodes, edges: visEdges },
        options,
      );

      const nodes = stars.map((star) => {
        const desc = star.description.slice(0, 20).concat('...');
        return {
          id: star.id,
          shape: 'image',
          image: starIcon[star.color],
          label: star.title,
          title: desc,
          color: star.color,
        };
      });
      const edges = links.map((link) => {
        return {
          from: link.from,
          to: link.to,
        };
      });
      visNodes.update(nodes);
      visEdges.update(edges);

      function preTitle(text: string) {
        const container = document.createElement('pre');
        container.innerText = text;
        return container;
      }
      visNodes.add([
        {
          id: 1,
          label: 'PRE',
          title: preTitle('ASCII\n    art'),
          shape: 'image',
          image: starIcon['white'],
        },
      ]);

      visNetwork.on('selectNode', function (event) {
        // console.log(`select ${event.nodes[0]}`, event);
        onClickNode(event.nodes[0]);
      });

      visNetwork.on('hoverNode', function (params) {
        params.event = '[original event]';
        // console.log(`hover ${event.node}`, event);
        const allNodes = visNodes.get({ returnType: 'Array' });
        const allEdges = visEdges.get({ returnType: 'Array' });
        const targetNode = allNodes.find((node) => node.id === params.node)!;

        const connectedNodes = [
          ...visNetwork!.getConnectedNodes(params.node),
          params.node,
        ];
        let updatedNodes = allNodes.map((node) => {
          if (!connectedNodes.some((id) => id === node.id)) {
            node.opacity = 0.5;
          }
          return node;
        });
        visNodes.update(updatedNodes);

        const connectedEdges = visNetwork!.getConnectedEdges(params.node);
        let updatedEdges = allEdges.map((edge) => {
          if (connectedEdges.some((id) => id === edge.id)) {
            edge.color = targetNode.color as string;
          } else {
            edge.color = 'rgba(255, 255, 255,  0.2)';
          }
          return edge;
        });
        visEdges.update(updatedEdges);
      });

      visNetwork.on('blurNode', (event) => {
        // console.log(`blur ${event.node}`, event);
        const allNodes = visNodes.get({ returnType: 'Array' });
        const allEdges = visEdges.get({ returnType: 'Array' });

        let updatedNodes = allNodes.map((node) => {
          node.opacity = 1.0;
          return node;
        });
        visNodes.update(updatedNodes);

        let updatedEdges = allEdges.map((edge) => {
          edge.color = 'rgba(255, 255, 255,  0.5)';
          return edge;
        });
        visEdges.update(updatedEdges);
      });

      visNetwork.on('showPopup', (event) => {
        console.log(`showPopup `, event);
      });
    }
  }, [visRef]);

  return (
    <S.Container id="sky-container" className={onloadAnimation ?? ''}>
      <div
        ref={visRef}
        style={{
          height: `100%`,
          width: `100%`,
        }}
      />
    </S.Container>
  );
};

export default Sky;
