/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconEye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 283.456c-165.248 0-299.392 74.304-408.128 228.864 107.2 154.112 241.28 228.224 408.128 228.224 166.848 0 300.928-74.112 408.128-228.224C811.392 357.76 677.248 283.52 512 283.52zM512 832c-213.888 0-384.512-106.688-512-320 129.408-213.312 300.032-320 512-320 211.968 0 382.592 106.688 512 320-127.488 213.312-298.112 320-512 320z m0-137.152a182.848 182.848 0 1 0 0-365.696 182.848 182.848 0 0 0 0 365.696zM512 576a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
        fill={getIconColor(color, 0, '#262626')}
      />
    </Svg>
  );
};

IconEye.defaultProps = {
  size: 18,
};

IconEye = React.memo ? React.memo(IconEye) : IconEye;

export default IconEye;
