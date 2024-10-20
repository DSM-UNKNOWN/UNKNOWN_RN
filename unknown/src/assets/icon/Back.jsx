import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Back(props) {
  return (
    <Svg
      width={21}
      height={16}
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM21 7H1v2h20V7z"
        fill="#B0B0B0"
      />
    </Svg>
  )
}

export default Back;
