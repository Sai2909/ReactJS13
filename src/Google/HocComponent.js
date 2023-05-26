import React, { useState } from "react";

const HocComponent = (WrappedComponent, data) => {
  return function HOC(props) {
    const [count, setCount] = useState(data);

    const handleClick = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent
        countNumber={count}
        handleClick={handleClick}
        {...props}
      />
    );
  };
};

export default HocComponent;