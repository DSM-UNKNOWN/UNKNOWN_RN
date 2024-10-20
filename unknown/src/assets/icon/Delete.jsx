import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Delete(props) {
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
        d="M19.134 9.5a1 1 0 011.732 0l10.392 18a1 1 0 01-.866 1.5H9.608a1 1 0 01-.866-1.5l10.392-18z"
        fill="#fff"
      />
      <Path
        d="M19.134 12.5a1 1 0 011.732 0L28.66 26a1 1 0 01-.866 1.5H12.206a1 1 0 01-.866-1.5l7.794-13.5z"
        fill="#5EAE79"
      />
      <Path d="M20 13l7.794 13.5H12.206L20 13z" fill="#fff" />
      <Path
        d="M21 19c-.333 2.8-.448 4-1 4s-.667-1.6-1-4c0-1.767.333-2 1-2 .552 0 1 .233 1 2z"
        fill="#5EAE79"
      />
      <Circle cx={20} cy={25} r={1} fill="#5EAE79" />
    </Svg>
  )
}

export default Delete;
