import React from "react";

const WithBorder_Greeting = (WrappedComponent) => {
  return function DecoratedComponent(props) {
    return (
      <div style={{ border: "2px solid blue", padding: "10px", borderRadius: "5px" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default WithBorder_Greeting;