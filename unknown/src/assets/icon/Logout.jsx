import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Logout(props) {
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
      <Path
        d="M31.06 21.06a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L27.88 20l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM10 21.5h20v-3H10v3z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Logout;
