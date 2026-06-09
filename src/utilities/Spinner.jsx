import React from "react";
import { Spin } from "antd";

const Spinner = () => {
  return <div className="w-full vh-100 flex-center">
    <Spin
      size="large"
      tip="Loading..."
    />
  </div>;
};

export default Spinner;
