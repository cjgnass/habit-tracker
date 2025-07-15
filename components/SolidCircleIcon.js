
import * as React from "react"
import Svg, { Circle } from 'react-native-svg';

const SolidCircleIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} {...props}>
    <Circle cx={50} cy={50} r={45} fill="red" />
  </Svg>
)
export default SolidCircleIcon
