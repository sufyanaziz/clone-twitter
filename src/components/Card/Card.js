import React from "react";
import styled from "styled-components";

const Card = ({ image, type, children, page }) => {
  return (
    <CardContainer type={type} page={page}>
      {image && (
        <div className="card__image">
          <img src={image} className="image" />
        </div>
      )}
      <div className="card__main">{children}</div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: ${(props) =>
    props.type === "info"
      ? "#ecf0f3"
      : props.page === "explore"
      ? "white"
      : "white"};
  border: 1px solid #e8edf1;
  border-bottom: ${(props) => props.type === "info" && "1px solid #81878d"};
  padding: 10px 16px;
  display: flex;
  height: auto;
  max-height: 500px;
  &:hover {
    background-color: ${(props) =>
      props.type === "info"
        ? "#d9dcdf"
        : props.type === "input"
        ? "none"
        : "#ecf0f3"};
    cursor: ${(props) => (props.type === "input" ? "unset" : "pointer")};
  }
  & .card__image {
    width: 60px;
    height: 60px;
    margin-right: 6px;
  }
  & .card__image .image {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .card__main {
    flex: 1;
    width: 100%;
    margin-top: ${(props) => props.type === "input" && "10px"};
    align-items: ${(props) => props.type === "input" && "center"};
    padding: 5px;
  }
`;

export default Card;
