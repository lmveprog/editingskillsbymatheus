import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {fonts, theme} from '../theme';

type Props = {
  to: number;
  startFrame?: number;
  suffix?: string;
  fontSize?: number;
  color?: string;
};

// un chiffre qui monte vite puis se pose (spring). parfait pour un stat / un chiffre choc.
export const Counter: React.FC<Props> = ({
  to,
  startFrame = 0,
  suffix = '',
  fontSize = 200,
  color = theme.accent,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({
    frame: frame - startFrame,
    fps,
    config: {damping: 200, mass: 1.2},
  });
  const val = Math.round(interpolate(s, [0, 1], [0, to]));

  return (
    <span
      style={{
        fontFamily: fonts.mono,
        fontSize,
        fontWeight: 700,
        color,
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {val}
      {suffix}
    </span>
  );
};
