import React, { FC, ReactNode } from "react";
import * as S from "./index.styles";
import { Link } from "gatsby";

export interface ProjectCardPropsType {
  image?: string;
  title: string;
  link?: string;
  tags: string[];
  description: string;
  direction: "left" | "right";
}

const ProjectCard = ({
  image,
  title,
  link,
  tags,
  description,
  direction,
}: ProjectCardPropsType) => {
  const LinkedWrapper = ({ children }: {children: React.ReactNode}) => {
    if (link) {
      return (<S.Wrapper as='a' href={link} $direction={direction}>
        {children}
      </S.Wrapper>)
    } else {
      return (<S.Wrapper $direction={direction}>
        {children}
      </S.Wrapper>) 
    }
  }

  if (direction === 'left') {
    return (
      <S.Container $direction={direction}>
        {image && <img src={image} alt={title} width="120px" style={{ marginInline: "10px" }}/>}
        <LinkedWrapper>
          <S.Title>
            {title}
          </S.Title>
          <S.TagList>
            {tags.map((tag, index) => (
              <S.Tag key={index}>{tag}</S.Tag>
            ))}
          </S.TagList>
          <S.Description>
            {description}
          </S.Description>
        </LinkedWrapper>
      </S.Container>
    )
  } else {
    return (
      <S.Container $direction={direction}>
        <LinkedWrapper>
          <S.Title>
            {title}
          </S.Title>
          <S.TagList>
            {tags.map((tag, index) => (
              <S.Tag key={index}>{tag}</S.Tag>
              ))}
          </S.TagList>
          <S.Description>
            {description}
          </S.Description>
        </LinkedWrapper>
        {image && <img src={image} alt={title} width="120px" style={{ marginInline: "10px" }}/>}
      </S.Container>
    );
  }
};

export default ProjectCard;
