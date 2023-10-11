import { styled } from "styled-components";

export const Container = styled.div<({ $direction: 'left' | 'right' })>`
  width: 100%;
  border: solid 1px black;
  border-radius: 10px;
  display: flex;
  background-color: white;
  padding: 20px;
`;

export const Wrapper = styled.div<{ $direction: 'left' | 'right'}>`
  flex-grow: 1;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: ${({ $direction }) => $direction === 'left' ? 'start' : 'end'};
`;

export const Title = styled.h2`
  
`;

export const TagList = styled.ul`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

export const Tag = styled.li`
  height: 20px;
  padding: 2px;
  background: none;
  font-size: 14px;
  border: solid 1px black;
  border-radius: 10px;
  padding-inline: 5px;
`;

export const Description = styled.span`
`;
