# **Capteur de qualité de l'air**

## Introduction
Dans le cadre de mes études, j'ai développé un **capteur de qualité de l'air** utilisant un ESP32. Ce projet a été conçu pour mesurer des paramètres environnementaux tels que la **température, la pression, l'humidité, le taux de CO2** et le **taux de particules** dans l'air.

---

## Développement du projet 🌱

### Matériel utilisé 🛠️
Le capteur est basé sur un **ESP32**, qui est relié à divers capteurs pour collecter les données nécessaires. Toutes ces informations sont ensuite transférées à une base de données MySQL.

### Défis rencontrés 🚧
Un des plus grands défis a été de **s'assurer du bon fonctionnement des capteurs**. La précision des mesures est cruciale, et il était essentiel de garantir que les capteurs fonctionnaient correctement dans différentes conditions.

### Solutions apportées 💡
Pour résoudre ce problème, j'ai testé les capteurs dans différents environnements afin de vérifier si les valeurs perçues correspondaient aux attentes. Ces tests m'ont permis d'ajuster les paramètres de calibration pour améliorer la fiabilité des données recueillies.

---

## Interface web 🌐
J'ai également développé une **interface web en Vue.js** qui récupère toutes les données des capteurs, les interprète et affiche un pourcentage de la **qualité de l'air** dans la pièce où se trouve le capteur. Ce système complet est hébergé sur un **Raspberry Pi**, permettant ainsi de disposer d'une solution locale sans dépendre de services externes.

![Air Quality Sensor](../images/projects/air-quality.png)

---

## Conclusion 🎉
Ce projet de capteur de qualité de l'air a été une expérience enrichissante, me permettant d'appliquer mes connaissances en IOT et en développement web. Je suis impatient de voir comment je pourrai améliorer ce système à l'avenir.

---

<div style="display: flex; align-items: flex-start;">
  <img src="../images/markdown/me.png" alt="Moi" style="width: 150px; margin-right: 15px;">
  <div style="display: flex; flex-direction: column; justify-content: space-between;">
    <p style="margin: 0;">N'hésitez pas à visiter <b>mon portfolio</b> pour découvrir d'autres projets et me contacter si vous avez des questions ou des idées de collaboration.</p>
    <br><br><br><br>
    <p style="margin: 0;">Arthur Boucard</p>
  </div>
</div>
