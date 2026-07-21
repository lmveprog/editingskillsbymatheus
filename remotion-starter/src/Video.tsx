import React from 'react';
import {AbsoluteFill} from 'remotion';
import {
  TransitionSeries,
  linearTiming,
  springTiming,
} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {Title} from './scenes/Title';
import {Points} from './scenes/Points';
import {Stat} from './scenes/Stat';
import {Outro} from './scenes/Outro';
import {FPS} from './theme';

// duree de chaque scene, en frames. je raisonne toujours en secondes * FPS.
export const DUR = {
  title: 3 * FPS,
  points: 5 * FPS,
  stat: 3 * FPS,
  outro: 3 * FPS,
};

const T = 15; // frames de transition entre les scenes

// attention: dans une TransitionSeries, la duree totale = somme des scenes - somme des transitions
export const TOTAL =
  DUR.title + DUR.points + DUR.stat + DUR.outro - 3 * T;

export const Video: React.FC = () => {
  return (
    <AbsoluteFill>
      {/*
        la voix off pilote tout le montage.
        depose ta voix dans public/voiceover.mp3 et decommente:
        <Audio src={staticFile('voiceover.mp3')} />
        (import {Audio, staticFile} from 'remotion')
      */}
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={DUR.title}>
          <Title />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: T})}
        />
        <TransitionSeries.Sequence durationInFrames={DUR.points}>
          <Points />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({direction: 'from-right'})}
          timing={springTiming({config: {damping: 200}, durationInFrames: T})}
        />
        <TransitionSeries.Sequence durationInFrames={DUR.stat}>
          <Stat />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: T})}
        />
        <TransitionSeries.Sequence durationInFrames={DUR.outro}>
          <Outro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
