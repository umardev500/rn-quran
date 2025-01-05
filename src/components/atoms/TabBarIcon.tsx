// TabBarIcons.tsx
import React from 'react';
import {GlyphName, MsRoundedAutoFill} from './Icon'; // Import your MsRoundedAutoFill component

// Define a helper function for generating icons
export const getTabBarIcon =
  (iconName: GlyphName) =>
  ({focused, color, size}: {focused: boolean; color: string; size: number}) =>
    (
      <MsRoundedAutoFill
        name={iconName}
        focused={focused}
        color={color}
        size={size}
      />
    );
