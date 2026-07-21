import React from 'react';
import {useCurrentFrame} from 'remotion';
import {fonts} from '../theme';

type Props = {
  text: string;
  startFrame?: number;
  charsPerFrame?: number;
  fontSize?: number;
  color: string;
  cursorColor?: string;
};

// texte qui se tape tout seul, avec un curseur bloc qui clignote a la fin.
// nickel pour une commande, un prompt, une punchline terminal.
export const Typewriter: React.FC<Props> = ({
  text,
  startFrame = 0,
  charsPerFrame = 1.2,
  fontSize = 46,
  color,
  cursorColor,
}) => {
  const frame = useCurrentFrame();
  const shown = Math.max(0, Math.floor((frame - startFrame) * charsPerFrame));
  const done = shown >= text.length;
  const blink = Math.floor(frame / 8) % 2 === 0;

  return (
    <span style={{fontFamily: fonts.mono, fontSize, color, lineHeight: 1.35}}>
      {text.slice(0, shown)}
      <span style={{opacity: !done || blink ? 1 : 0, color: cursorColor ?? color}}>
        █
      </span>
    </span>
  );
};
