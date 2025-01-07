import {createIconSet} from '@react-native-vector-icons/common';
import React from 'react';

const glyphMap = {
  search: 0xe8b6,
  home: 0xe88a,
  book5: 0xf53b,
  settings: 0xe8b8,
  more_vert: 0xe5d4,
  arrow_back: 0xe5c4,
};

export type GlyphName = keyof typeof glyphMap;

export const MSRoundedFill = createIconSet(glyphMap, {
  postScriptName: 'Material Symbols Rounded Filled Regular',
  fontFileName: 'mdi_rounded_filled.ttf',
  fontSource: require('@assets/fonts/mdi_rounded_filled.ttf'),
});

export const MSRounded = createIconSet(glyphMap, {
  postScriptName: 'Material Symbols Rounded Regular',
  fontFileName: 'mdi_rounded.ttf',
  fontSource: require('@assets/fonts/mdi_rounded.ttf'),
});

// Create the MsRoundedAutoFill component
interface MsRoundedAutoFillProps {
  name: GlyphName;
  focused: boolean;
  color?: string;
  size?: number;
}

export const MsRoundedAutoFill: React.FC<MsRoundedAutoFillProps> = ({
  name,
  focused,
  color = '#4b5563',
  size = 24,
}) => {
  return focused ? (
    <MSRoundedFill name={name} size={size} color={color} />
  ) : (
    <MSRounded name={name} size={size} color={color} />
  );
};
