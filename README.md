# TP-Boutique

Projet de boutique de voitures avec serveur frontend et serveur backend séparés.

## Structure du projet

- `server.js` : serveur principal existant à la racine.
- `Frontend/server.js` : serveur de fichiers statiques pour l'interface.
- `Backend/server.js` : serveur API pour les données et les routes backend.
- `Frontend/` : fichiers HTML, CSS et JS du site.
- `Backend/` : logique backend, routes et gestion du stock.

## Installation

1. Ouvrir un terminal dans le dossier du projet.
2. Si nécessaire, installer Node.js.
3. Exécuter :

```bash
npm install
```

> Note : ce projet n’utilise pas encore de dépendances externes spécifiques.

## Lancer le projet

### Frontend

```bash
npm run start:frontend
```

Le frontend sera disponible sur :

- `http://localhost:3001/`

### Backend

```bash
npm run start:backend
```

L’API backend sera disponible sur :

- `http://localhost:3000/`

### Serveur principal

```bash
npm start
```

Cela lance le serveur `server.js` à la racine, qui tente de servir le frontend et les routes backend.

## Observations

- Le serveur frontend sert les pages statiques depuis `Frontend/`.
- Le serveur backend gère l’API depuis `Backend/`.
- Les deux serveurs sont séparés pour une architecture plus claire.

## Améliorations possibles

- Ajouter un script `start:all` pour lancer frontend et backend en même temps.
- Ajouter un vrai serveur Express pour un routage plus propre.
- Documenter les routes API disponibles dans `Backend/routes/carsRouter.js`.
