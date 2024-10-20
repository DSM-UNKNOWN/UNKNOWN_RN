import * as React from "react"
import Svg, { Circle, Rect, Path } from "react-native-svg"

function Patch(props) {
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
      <Rect
        x={26.9706}
        y={8}
        width={8}
        height={24}
        rx={2}
        transform="rotate(45 26.97 8)"
        fill="#fff"
      />
      <Path
        d="M10.431 31.445a1 1 0 01-1.247-1.247l1.717-5.665a1 1 0 011.664-.417l3.948 3.948a1 1 0 01-.417 1.664l-5.665 1.717z"
        fill="#fff"
      />
      <Path
        transform="rotate(45 26.523 11.433)"
        fill="#5EAE79"
        d="M26.5227 11.4329H30.57664V31.4212H26.5227z"
      />
      <Path d="M11.67 29.159l.74-3.633 2.893 2.894-3.632.738z" fill="#5EAE79" />
    </Svg>
  )
}

export default Patch;
