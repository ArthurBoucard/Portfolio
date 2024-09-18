# Paradoxe du Singe Savant

<img src="../images/markdown/monkey.gif" alt="Singe" class="gif-monkey" />

## Introduction 🐒

Le projet *Paradoxe du Singe Savant* est une expérimentation unique qui mêle théorie mathématique et technologie moderne. Il s'agit d'un site interactif que j'ai développé en Vue.js pour le frontend, avec un backend en Symfony et une base de données MySQL. Le concept repose sur l'idée célèbre du paradoxe du singe savant, qui stipule qu'un singe frappant au hasard sur les touches d'une machine à écrire pendant une durée infinie pourrait théoriquement produire n'importe quel texte, y compris les œuvres complètes de Shakespeare.

Sur mon site, chaque utilisateur connecté possède un "singe" qui écrit aléatoirement en temps réel, et les utilisateurs peuvent aussi consulter l'ensemble des textes générés par tous les singes.

---

## Fonctionnement du site 🔧

### Génération aléatoire des lettres
Le "singe" attribué à chaque utilisateur choisit aléatoirement l'une des 26 lettres de l'alphabet pour former ses textes. Il n'y a aucune logique ou paramètre qui guide ces choix, ils sont véritablement aléatoires, reflétant la nature imprévisible du paradoxe.

### Stockage des caractères en temps réel
Pour assurer le bon fonctionnement du site, toutes les X lettres générées, une requête est envoyée au backend pour stocker la dernière chaîne de caractères dans la base de données. Cela garantit que l'ensemble des textes est correctement enregistré et peut être consulté ultérieurement.

Lorsque l'utilisateur souhaite voir tout ce qui a été écrit, une requête récupère la combinaison de toutes les chaînes stockées dans la base de données, offrant ainsi un aperçu complet des textes produits par tous les singes.

---

## Recherches et Probabilités 📊

### Recherche dans les textes
Le site offre également une fonctionnalité de recherche dans les textes générés. Les utilisateurs peuvent chercher une séquence de caractères spécifique pour voir si elle a déjà été produite par l'un des singes.

### Calcul des probabilités
Outre la recherche, une fonction particulièrement intéressante permet de calculer la probabilité qu'une séquence spécifique de lettres soit écrite. La probabilité est basée sur un simple calcul : chaque lettre ayant une chance de 1 sur 26 d'être sélectionnée, la probabilité d'obtenir une séquence particulière est calculée en fonction du nombre de lettres dans la séquence.

Par exemple, pour une séquence de 3 lettres, la probabilité sera de (1/26) x (1/26) x (1/26) = **0.0057%**.

---

## Conclusion 🎉

Le site *Paradoxe du Singe Savant* explore de manière ludique et scientifique la théorie des probabilités et le comportement aléatoire. Il offre aux utilisateurs la possibilité de visualiser en temps réel l'évolution des textes générés tout en leur permettant de s'interroger sur la probabilité de voir apparaître certaines séquences de caractères. Un projet qui combine amusement et réflexion, et qui met en pratique des concepts théoriques fascinants grâce à la puissance du web moderne.

---

<div style="display: flex; align-items: flex-start;">
  <img src="../images/markdown/me.png" alt="Moi" style="width: 150px; margin-right: 15px;">
  <div style="display: flex; flex-direction: column; justify-content: space-between;">
    <p style="margin: 0;">N'hésitez pas à visiter <b>mon portfolio</b> pour découvrir d'autres projets et me contacter si vous avez des questions ou des idées de collaboration.</p>
    <br><br><br><br>
    <p style="margin: 0;">Arthur Boucard</p>
  </div>
</div>
