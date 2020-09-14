import React from "react";
import styled, { css } from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";
import TwitterIcon from "@material-ui/icons/Twitter";

export const LoadingSpinner = ({ fullScreen }) => {
  return (
    <LoadingContainer fullScreen={fullScreen}>
      <CircularProgress className="loading__spinner" />
    </LoadingContainer>
  );
};

export const LoadingLogo = ({ fullScreen }) => {
  return (
    <LoadingContainer fullScreen={fullScreen}>
      <TwitterIcon className="loading__logo" />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  ${(props) =>
    props.fullScreen &&
    css`
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      & .loading__logo {
        font-size: 100px !important;
        color: var(--primaryBlue);
      }
      & .loading__spinner {
        width: 60px !important;
        height: 60px !important;
        color: var(--primaryBlue);
      }
    `}
`;
