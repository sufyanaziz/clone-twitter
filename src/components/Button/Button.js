import React from "react";
import styled, { css } from "styled-components";

const ButtonComponent = ({
  text,
  type,
  onClick,
  fullWidth,
  disabled,
  width,
}) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      disabled={disabled ? true : false}
      width={width}
    >
      {text}
    </Button>
  );
};

const Button = styled.button`
  ${(props) =>
    props.disabled
      ? css`
          background: var(--secondaryBlue);
          color: white;
          border: 1px solid var(--secondaryBlue);
        `
      : css`
          background: ${props.type === "fill"
            ? "var(--primaryBlue)"
            : props.type === "outline"
            ? "white"
            : "var(--primaryBlue)"};
          border: ${(props) =>
            props.type === "fill"
              ? "1px solid var(--primaryBlue)"
              : props.type === "outline"
              ? "1px solid var(--secondaryBlue)"
              : "1px solid var(--primaryBlue)"};
          color: ${(props) =>
            props.type === "fill"
              ? "white"
              : props.type === "outline"
              ? "var(--secondaryBlue)"
              : "white"};
          cursor: pointer;
          &:hover {
            background: ${(props) =>
              props.type === "fill"
                ? "var(--hoverPrimaryBlue)"
                : props.type === "outline"
                ? "var(--hoverSecondaryBlue)"
                : "var(--hoverPrimaryBlue)"};
            border: ${(props) =>
              props.type === "fill"
                ? "1px solid var(--hoverPrimaryBlue)"
                : props.type === "outline"
                ? "1px solid var(--secondaryBlue)"
                : "1px solid var(--hoverPrimaryBlue)"};
          }
        `}
  width: ${(props) => (props.fullWidth ? "100%" : props.width && props.width)};
  outline: none;
  font-weight: bold;
  padding: 10px 12px;
  border-radius: 16px;
`;

export default ButtonComponent;
