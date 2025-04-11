import React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const StyledLoading = styled.div`
  svg {
    color: ${(props) => props.color || "#c1b59c"};
  }
`;

function LoadingV2({ size, ...restProps }) {
  return (
    <StyledLoading color={restProps.color}>
      <Spin />
    </StyledLoading>
  );
}

export default LoadingV2;
