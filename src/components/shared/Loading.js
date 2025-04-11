import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledLoading = styled.div`
    svg {
        color: ${(props) => (props.color || '#c1b59c')};
    }
`

function Loading({ size, ...restProps }) {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: size,
      }}
      spin
      {...restProps}
    />
  );

  return <StyledLoading color={restProps.color}>
    <Spin indicator={antIcon} />
  </StyledLoading>;
}

export default Loading;
