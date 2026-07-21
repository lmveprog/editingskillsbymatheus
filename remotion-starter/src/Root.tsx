import React from 'react';
import {Composition} from 'remotion';
import {Video, TOTAL, DUR} from './Video';
import {Title} from './scenes/Title';
import {Points} from './scenes/Points';
import {Stat} from './scenes/Stat';
import {Outro} from './scenes/Outro';
import {FPS, WIDTH, HEIGHT} from './theme';

const size = {width: WIDTH, height: HEIGHT, fps: FPS};

// la compo principale (Main) + chaque scene enregistree seule.
// le truc qui change tout: je bosse une scene isolee dans le studio, je la branche ensuite.
export const Root: React.FC = () => (
  <>
    <Composition id="Main" component={Video} durationInFrames={TOTAL} {...size} />
    <Composition id="Title" component={Title} durationInFrames={DUR.title} {...size} />
    <Composition id="Points" component={Points} durationInFrames={DUR.points} {...size} />
    <Composition id="Stat" component={Stat} durationInFrames={DUR.stat} {...size} />
    <Composition id="Outro" component={Outro} durationInFrames={DUR.outro} {...size} />
  </>
);
