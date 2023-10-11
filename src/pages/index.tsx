import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Space from "../components/Space"
import Projects from "../components/Projects"
import { styled } from "styled-components"
import projects from "../data/projects"

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const IndexPage: React.FC<PageProps> = () => {
  const gridRef = React.useRef<HTMLDivElement | null>(null);
  const projectRefs: React.RefObject<HTMLDivElement>[] = projects.map(() => (
    React.createRef()
  ));

  return (
    <Wrapper>
      <Space gridRef={gridRef} refArray={projectRefs}/>
      <div ref={gridRef} tabIndex={-1}>
        <Projects refArray={projectRefs}/>
      </div>
    </Wrapper>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Sangkkim's portfolio</title>;
