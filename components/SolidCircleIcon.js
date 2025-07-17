import * as React from "react";
import Svg, { Circle } from "react-native-svg";

const SolidCircleIcon = ({
  width = 100,
  height = 100,
  radius = 45,
  fill = "red",
  ...props
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...props}
  >
    <Circle cx={width / 2} cy={height / 2} r={radius} fill={fill} />
  </Svg>
);
export default SolidCircleIcon;
