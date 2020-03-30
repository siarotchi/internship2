import React from "react";

export const DefaultGuard = (Component, ...rest) => {
  return <Component {...rest} />;
};
