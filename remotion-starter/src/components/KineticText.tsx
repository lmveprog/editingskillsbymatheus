import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {fonts, theme} from '../theme';

type Props = {
  text: string;
  startFrame?: number;
  stagger?: number;
  fontSize?: number;
  color?: string;
  weight?: number;
};

// chaque mot arrive un par un (spring, leger decalage).
// c'est ce qui donne le rythme sans avoir besoin d'inonder l'ecran de texte.
export const KineticText: React.FC<Props> = ({
  text,
  startFrame = 0,
  stagger = 3,
  fontSize = 90,
  color = theme.ink,
  weight = 800,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const words = text.split(' ');

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0 0.28em',
        fontFamily: fonts.sans,
        fontSize,
        fontWeight: weight,
        color,
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
      }}
    >
      {words.map((w, i) => {
        const s = spring({
          frame: frame - startFrame - i * stagger,
          fps,
          config: {damping: 200},
        });
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              transform: `translateY(${(1 - s) * 0.4}em)`,
              opacity: s,
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};
