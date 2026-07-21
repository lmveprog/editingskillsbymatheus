import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Backdrop} from '../components/Backdrop';
import {Typewriter} from '../components/Typewriter';
import {KineticText} from '../components/KineticText';
import {theme} from '../theme';

// sortie: un gros titre kinetic + une commande qui se tape toute seule.
export const Outro: React.FC = () => (
  <Backdrop>
    <AbsoluteFill style={{justifyContent: 'center', padding: '0 140px', gap: 26}}>
      <KineticText text="a toi de jouer" fontSize={110} />
      <div>
        <Typewriter text="> npx remotion studio" color={theme.accent} fontSize={44} />
      </div>
    </AbsoluteFill>
  </Backdrop>
);
