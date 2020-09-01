import React from 'react'
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

export default ({ width, height, style }) => (
  <Svg width={width || 20} height={height || 20} viewBox="0 0 20 20" style={style}>
    <G clip-path="url(#clip0)">
      <Path d="M19.8431 14.0268C19.8247 13.9097 19.7965 13.7943 19.759 13.6818C19.3995 12.6813 18.3744 12.0827 17.3265 12.2613C16.9798 12.3158 16.6545 12.0791 16.5998 11.7325L16.0725 8.35841C15.6397 5.50369 13.5774 3.16588 10.799 2.38034C10.5463 0.83378 9.08771 -0.215135 7.54111 0.0375657C6.01498 0.28693 4.96952 1.71235 5.19024 3.2429C2.79534 4.75851 1.53117 7.55319 1.97419 10.3525L2.53926 13.9436C2.59101 14.2896 2.35557 14.6131 2.01051 14.6702C0.958257 14.8221 0.166295 15.7064 0.130976 16.769C0.118799 17.948 1.06476 18.9138 2.24382 18.9259C2.2512 18.926 2.25862 18.9261 2.266 18.9261C2.3773 18.926 2.48839 18.9174 2.59835 18.9005L4.78888 18.556C5.5509 19.9164 7.27139 20.4014 8.63172 19.6394C9.35025 19.2369 9.8572 18.5407 10.0197 17.7333L18.0652 16.4673C19.2301 16.2843 20.0261 15.1917 19.8431 14.0268ZM7.7886 1.51428C7.86278 1.50273 7.93771 1.49676 8.01277 1.49647C8.48986 1.49902 8.93425 1.73925 9.19771 2.13698H9.16356C8.89814 2.12897 8.63243 2.1366 8.36789 2.15975C8.08929 2.18635 7.81245 2.22914 7.53877 2.28785C7.47968 2.29994 7.42135 2.31704 7.36297 2.33126C7.13879 2.38392 6.91886 2.44585 6.70323 2.51916C6.68188 2.52558 6.65982 2.52912 6.63847 2.53696C6.78863 2.00033 7.23812 1.60064 7.7886 1.51428ZM7.24771 18.5767C6.94609 18.577 6.65236 18.4802 6.41008 18.3005L8.40279 17.9881C8.13462 18.3584 7.7049 18.5774 7.24771 18.5767ZM18.3406 14.7287C18.2316 14.9076 18.0494 15.0294 17.8424 15.0617L9.27031 16.4096L5.10488 17.0651L2.37918 17.4921C2.17268 17.5258 1.96193 17.4658 1.80414 17.3284C1.64309 17.1911 1.55156 16.9892 1.55436 16.7775C1.58517 16.4125 1.86819 16.1194 2.23185 16.0758C3.35274 15.8961 4.1181 14.8449 3.94484 13.723L3.38047 10.1319C3.01084 7.76281 4.16122 5.41524 6.25992 4.25566C6.27227 4.25153 6.28436 4.24678 6.2962 4.24144C6.97733 3.8724 7.72659 3.64618 8.49812 3.57675C8.73193 3.55619 8.96682 3.55168 9.20126 3.56323L9.31798 3.56895C9.5605 3.58363 9.80178 3.61402 10.0403 3.66006C10.0482 3.66006 10.0553 3.66006 10.0631 3.66006C12.4712 4.18102 14.304 6.14032 14.6634 8.57775L15.1943 11.9518C15.3708 13.0748 16.424 13.8423 17.5471 13.6662C17.906 13.5961 18.2649 13.7875 18.4068 14.1246C18.4762 14.3256 18.4519 14.5473 18.3406 14.7287Z" fill="#0A1034" stroke="#0A1034" stroke-width="0.1"/>
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="20" height="20" fill="white"/>
      </ClipPath>
    </Defs>
  </Svg>
)
