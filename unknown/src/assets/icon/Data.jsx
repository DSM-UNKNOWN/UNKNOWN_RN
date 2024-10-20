import * as React from "react"
import Svg, { Circle, Rect } from "react-native-svg"

function Data(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={20} cy={20} r={20} fill="#5EAE79" />
      <Rect x={16} y={8} width={8} height={24} rx={2} fill="#fff" />
      <Rect
        x={8}
        y={24}
        width={8}
        height={24}
        rx={2}
        transform="rotate(-90 8 24)"
        fill="#fff"
      />
    </Svg>
  )
}

export default Data;
