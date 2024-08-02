# Quiz Adventure

**Quiz Adventure** est une application de quiz interactive où les utilisateurs peuvent tester leurs connaissances à travers une série de questions, suivre leur score en temps réel, et consulter un classement des joueurs. Ce projet est construit avec React et offre une expérience utilisateur dynamique grâce à des animations et des effets visuels.

## Fonctionnalités

- **Affichage des Questions** : Affiche les questions du quiz et les options de réponse.
- **Gestion des Scores** : Calcul et affichage du score en temps réel.
- **Soumission des Scores** : Permet aux utilisateurs de soumettre leur score avec leur nom.
- **Liste des Joueurs** : Affiche les scores des joueurs dans un tableau trié par date.
- **Animations et Effets** : Animations CSS pour une interface utilisateur interactive.

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour construire l'interface utilisateur.
- **CSS** : Styles pour la mise en page et les animations.
- **React Router** : Gestion de la navigation entre les pages.
- **Axios** : Pour les appels API.

## Installation

Installez les dépendances :

```bash
npm install
```

Démarrez l'application :
bash

```bash
npm start
```

L'application sera accessible à l'adresse http://localhost:3000.
Utilisation

    Page d'accueil : Commencez le quiz et répondez aux questions. Le score est mis à jour en temps réel.
    Soumettre le score : Après la fin du quiz, entrez votre nom et soumettez votre score pour le sauvegarder.
    Voir la liste des joueurs : Accédez à la page des scores des joueurs pour consulter les scores enregistrés.

Structure des fichiers

    - src/pages/HomePage.js : Page d'accueil du quiz. Affiche les questions et gère le score.
    - src/pages/PlayerScoresList.js : Page listant les scores des joueurs.
    - src/components/QuestionComponent.js : Affiche une question et ses options.
    - src/components/QuestionOptionComponent.js : Affiche une option de réponse pour une question.
    - src/components/ScoreBoardComponent.js : Affiche le score actuel du joueur.
    - src/api/index.js : Contient les appels API pour obtenir les questions et soumettre les scores.
    - src/App.js : Point d'entrée de l'application React.
    - src/index.js : Point de montage pour React.
    - src/styles/ : Contient les fichiers CSS pour le style des composants.

