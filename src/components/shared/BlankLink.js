import React from "react";

function BlankLink({ onClick, children, ...restProps }) {
  return (
    <a
      {...restProps}
      onClick={(e) => {
        e?.preventDefault();
        onClick(e);
      }}
    >{children}</a>
  );
}

export default BlankLink;
