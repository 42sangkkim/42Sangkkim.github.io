import React, { useCallback, useEffect, useRef, useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Space from "../components/Space"
import Projects from "../components/Projects"
import { styled } from "styled-components"
import projects from "../data/projects"

const StyledButton = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 20px;
  left: auto;
  right: 20px;
  padding: 10px;
  background: none;
  border: 1px solid gray;
  border-radius: 5px;
  color: gray;
  cursor: pointer;
  ${({ $visible }) => !$visible && 'display: none;'}
`;

const Button = () => {
  const [watchingContent, setWatchingContent] = useState<ContentType>('GraphView');
  const updateScrollY = useCallback(() => {
    if (window.scrollY < window.innerHeight) {
      setWatchingContent('GraphView');
      // console.log('GraphView');
    } else {
      setWatchingContent('GridView');
      // console.log('GridView');
    }
  }, [setWatchingContent]);
  useEffect(() => {
    window.addEventListener('scroll', updateScrollY);
    return (() => {
      window.removeEventListener('scroll', updateScrollY);
    });
  });

  const handleMoveToGraph = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

  return (
    <>
      <StyledButton $visible={watchingContent !== 'GraphView'} onClick={handleMoveToGraph}>그래프 뷰로 보기</StyledButton>
    </>
  )
}

type ContentType = 
  'GraphView' |
  'Profile' |
  'ListView' |
  'GridView';

const IndexPage: React.FC<PageProps> = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const projectRefs: React.RefObject<HTMLDivElement>[] = projects.map(() => (
    React.createRef()
  ));

  return (
    <>
      <Space gridRef={gridRef} refArray={projectRefs}/>
      <div ref={gridRef} tabIndex={-1}>
        <Projects refArray={projectRefs}/>
      </div>
      <Button/>
    </>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Sangkkim's portfolio</title>;
