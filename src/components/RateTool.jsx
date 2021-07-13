import React, { useState } from "react";
import { Rate } from "antd";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function RateTool() {
  const [rate, setRate] = useState(3);

  function handleChange(value) {
    setRate(value);
  }

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={rate} />
      {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ""}
    </span>
  );
}
