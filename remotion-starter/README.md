# remotion-starter

le mini projet remotion qui va avec le guide (voir le [README principal](../README.md)).

c'est volontairement petit : 4 scènes, ~6 composants, un thème. de quoi comprendre
comment je construis mes illustrations / motion design, sans les assets d'un vrai projet.

## lancer

```bash
cd remotion-starter
npm install
npm run dev        # ouvre le studio remotion
```

le studio s'ouvre sur `http://localhost:3000`. à gauche tu as :

- **Main** → la vidéo complète (les 4 scènes enchaînées avec des transitions)
- **Title / Points / Stat / Outro** → chaque scène seule, pour itérer vite

## rendre

```bash
npm run render     # -> out/main.mp4
npm run still      # -> out/title.png (une image)
```

## la structure

```
src/
  theme.ts            8 couleurs + 2 fonts + le fps. change ça, tout change.
  Root.tsx            enregistre la compo Main + chaque scène en solo
  Video.tsx           enchaîne les scènes avec des transitions (TransitionSeries)
  components/         les briques réutilisables
    Backdrop.tsx      le fond animé (grille + halo)
    KineticText.tsx   les mots qui arrivent un par un
    Typewriter.tsx    le texte qui se tape tout seul
    Waveform.tsx      les barres audio
    Counter.tsx       un chiffre qui monte
    Tag.tsx           le marqueur de chapitre en haut à gauche
  scenes/             une idée = une scène = un fichier
    Title / Points / Stat / Outro
```

## brancher ta voix off

la voix off pilote le montage. dépose ton fichier dans `public/voiceover.mp3`,
puis décommente le `<Audio>` dans `Video.tsx`. ensuite tu ajustes les `DUR`
(durées des scènes) pour tomber pile sur ce que raconte la voix.
