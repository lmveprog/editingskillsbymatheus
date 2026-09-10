# hypercut

le skill claude code qui monte mes shorts d'un rush brut à la vidéo livrée.
je dis « hypercut cette vidéo » avec le rush, et ça sort les deux masters
(avec / sans musique) + le script pour la description.

le déroulé complet est dans [`skills/hypercut/SKILL.md`](skills/hypercut/SKILL.md) :

1. dérush intelligent — détection de parole + transcription par prise, tri
   des prises, resserré aux réglages autocut (−45 dB, silences > 15 ms,
   marges 15 ms), coupes franches, son mono
2. voix traitée, image caméra jamais touchée
3. sous-titres mot à mot dans la zone visible
4. hook qui frappe dans les 3 premières secondes
5. illustrations en matériel réel animé — captures qui défilent, clips
   récupérés, motion design, zoom + surlignage sur le mot dit, vrais posts
   et sources capturés au navigateur, détourage
6. sfx légers et musique
7. vérification image par image
8. masters mono à −14 lufs, dossier de livraison au titre de la vidéo

à copier dans `~/.claude/skills/hypercut/` pour l'avoir chez toi. les outils
qu'il appelle (`tools/derush.py`, `tools/retime.py`, la lib remotion avec
`Capture` / `XPost`) vivent dans mon pipeline privé — le déroulé, lui, est là
en entier.
