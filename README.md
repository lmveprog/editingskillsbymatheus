# editing skills by matheus

comment je monte mes vidéos. pas de recette magique, pas de "montage 100% ia" — juste
un setup un peu particulier que pas mal de gens m'ont demandé, alors je le pose au propre ici.

le résumé tient en une phrase : **les illustrations / le motion design, c'est du code
(remotion). le montage pur, c'est 100% manuel sur premiere pro, aidé d'un plugin (autocut).**

la vidéo n'est pas montée par une ia. ce qui surprend, c'est surtout les illustrations
faites en code plutôt qu'à la souris. c'est ça le "cheat code", et c'est expliqué ici avec
un petit projet qui tourne.

---

## le pipeline en 30 secondes

```
   écriture + voix off (la VO d'abord, toujours)
              │
              ▼
   ┌────────────────────────┐        ┌──────────────────────────┐
   │  REMOTION (du code)     │        │  RUSHES (écran, caméra…)  │
   │  illustrations, motion, │        │                          │
   │  titres, schémas animés │        │                          │
   └───────────┬────────────┘        └────────────┬─────────────┘
               │  export .mp4 (alpha si besoin)     │
               └───────────────┬────────────────────┘
                               ▼
                 ┌─────────────────────────────┐
                 │  PREMIERE PRO (le montage)   │
                 │  cut 100% manuel             │
                 │  + AutoCut (silences/dérush)  │
                 └──────────────┬───────────────┘
                                ▼
                          export final
```

principe de base : **la voix off pilote tout.** j'écris, j'enregistre la voix, et ensuite
tout se cale dessus. le montage c'est juste "coller la bonne image sur le bon mot".

---

## la philosophie (3 règles que je m'impose)

1. **une idée par plan.** si un plan essaie de dire deux choses, je le coupe en deux.
2. **le moins de texte possible à l'écran.** c'est la voix qui raconte. le texte à l'écran
   sert à *souligner* un mot clé, pas à répéter la phrase.
3. **du mouvement partout, mais discret.** rien n'est jamais parfaitement immobile
   (un fond qui respire, un mot qui arrive en spring). ça donne le côté "vivant" sans distraire.

---

## les deux moitiés du taf

### 1. les illustrations / motion design → remotion

[remotion](https://www.remotion.dev) = tu fais des vidéos en react. tu écris des composants,
et chaque frame est calculée par du code. l'avantage énorme : c'est **réutilisable,
paramétrable et versionnable**. un composant `Waveform`, `Typewriter`, un thème de 8 couleurs…
tu le fais une fois, tu le rebalances dans 10 vidéos.

→ détails dans [`docs/02-remotion.md`](docs/02-remotion.md)
→ **projet exemple qui tourne** dans [`remotion-starter/`](remotion-starter/) (4 scènes, quelques composants)

### 2. le montage pur → premiere pro + autocut

le cut, l'assemblage, le rythme : **100% à la main dans premiere**, aucune ia qui décide.
le seul coup de pouce c'est [AutoCut](https://www.autocut.com/) (plugin d'une boîte française)
pour dégager les silences et pré-dérusher — ça fait gagner un temps fou sur le premier passage,
mais le montage final reste une décision humaine.

→ détails dans [`docs/03-premiere-autocut.md`](docs/03-premiere-autocut.md)

---

## par où commencer

- tu veux comprendre le workflow → [`docs/01-pipeline.md`](docs/01-pipeline.md)
- tu veux voir le motion design en code → lance le [`remotion-starter/`](remotion-starter/) :

```bash
cd remotion-starter
npm install
npm run dev
```

- tu veux les petits trucs qui changent tout → [`docs/04-tips.md`](docs/04-tips.md)

---

## à savoir

- le `remotion-starter` est **générique** : c'est pas le projet d'une vraie vidéo (pas d'assets
  perso), c'est fait pour être lisible et copié. les techniques dedans sont exactement celles
  que j'utilise en vrai.
- questions / envie d'échanger là-dessus : ouvrez une issue, je réponds.

made by matheus · dispo pour en parler

---

## hypercut — le skill claude code qui fait tout ça

depuis septembre 2026 le process tourne aussi en une seule commande dans claude
code : je dis « hypercut cette vidéo » avec le rush brut, et ça sort les deux
masters + le script. le skill est dans [`skills/hypercut/SKILL.md`](skills/hypercut/SKILL.md) :
dérush intelligent (détection de parole + transcription par prise, resserré aux
réglages autocut : −45 dB, 15 ms), voix traitée, sous-titres mot à mot, hook
qui frappe, illustrations en matériel réel animé (captures qui défilent, clips,
vrais posts capturés au navigateur, zoom + surlignage sur le mot dit,
détourage), sfx légers, musique, master mono à −14 lufs, dossier de livraison
au titre de la vidéo.

à copier dans `~/.claude/skills/hypercut/` pour l'avoir chez toi. les outils
qu'il appelle (`tools/derush.py`, `tools/retime.py`, la lib remotion avec
`Capture` / `XPost`) vivent dans mon pipeline privé, mais le déroulé est là en
entier — c'est la partie qui compte.

