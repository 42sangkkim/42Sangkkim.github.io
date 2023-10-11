import React, { createRef, useEffect, useRef, useState } from "react";
import * as S from "./index.styles"
import { Network } from "vis-network";
import projects from "../../data/projects";

export interface SpacePropsType {
  gridRef: React.MutableRefObject<HTMLDivElement | null>;
  refArray: React.MutableRefObject<HTMLDivElement | null>[];
}

const Space = ({gridRef, refArray}: SpacePropsType) => {
  const visGraphRef = useRef<HTMLDivElement | null>(null);

  const handleGridOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    gridRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

	const nodes = projects.map((project, idx) => ({
    id: idx,
    label: project.title,
  }));

	const edges = [
		{ from: 1, to: 3 },
		{ from: 1, to: 2 },
		{ from: 2, to: 4 },
		{ from: 2, to: 5 },
	];

	useEffect(() => {
    if (visGraphRef.current) {
      const network = new Network(visGraphRef.current, {
        nodes, edges
      }, {
          autoResize: true,
          nodes: {
            shape: "dot",
            size: 2,
            font: {
              size: 12,
              color: "white",
            },
            borderWidth: 1,
            shadow: true,
            color: "white",
            fixed: {
              x: true,
              y: true,
            },
          },
          edges: {
            width: 1,
            color: "rgba(255, 255, 255,  0.5)",
            shadow: true,
            smooth: false,
            chosen: false,
          },
          interaction: {
            dragNodes: false,
            dragView: false,
            zoomView: false,
            hover: true,
          }
      });

      network?.on("click", (event) => {
        console.log(`project-no.${event.nodes[0]}`, event);
        const projectNo = event.nodes[0];
        if (refArray[projectNo] && refArray[projectNo].current) {
          refArray[projectNo].current?.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
	}, [visGraphRef, nodes, edges, refArray]);

  return (
    <S.Wrapper>
      <div
        ref={visGraphRef}
			  style={{
          height: `100%`,
          width: `100%`,
          backgroundColor: "black",
        }}
      />
      <S.GridButton onClick={handleGridOnClick}>그리드 뷰로 보기</S.GridButton>
    </S.Wrapper>
  );
}

export default Space;
