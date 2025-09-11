import "./index.css";

import { Typography } from "antd";
import { useEffect, useRef } from "react";

const { Text } = Typography;

const Main = () => {
  return (
    <div className="main-page">
      <Text strong className="title">
        Rick and Morty
      </Text>
    </div>
  );
};

export default Main;
