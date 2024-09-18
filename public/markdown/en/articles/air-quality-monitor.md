# **Air Quality Monitor**

## Introduction
As part of my studies, I developed an **air quality monitor** using an ESP32. This project was designed to measure environmental parameters such as **temperature, pressure, humidity, CO2 levels**, and **particle levels** in the air.

---

## Project Development 🌱

### Equipment Used 🛠️
The sensor is based on an **ESP32**, which is connected to various sensors to collect the necessary data. All this information is then transferred to a MySQL database.

### Challenges Encountered 🚧
One of the biggest challenges was to **ensure the proper functioning of the sensors**. The accuracy of the measurements is crucial, and it was essential to guarantee that the sensors worked correctly under different conditions.

### Solutions Implemented 💡
To address this issue, I tested the sensors in various environments to verify whether the perceived values matched expectations. These tests allowed me to adjust calibration parameters to improve the reliability of the collected data.

---

## Web Interface 🌐
I also developed a **web interface using Vue.js** that retrieves all the data from the sensors, interprets it, and displays a percentage of the **air quality** in the room where the sensor is located. This complete system is hosted on a **Raspberry Pi**, enabling a local solution without relying on external services.

![Air Quality Sensor](../images/projects/air-quality.png)

---

## Conclusion 🎉
This air quality sensor project has been a rewarding experience, allowing me to apply my knowledge in electronics and web development. I look forward to seeing how I can enhance this system in the future.

---

<div style="display: flex; align-items: flex-start;">
  <img src="../images/markdown/me.png" alt="Me" style="width: 150px; margin-right: 15px;">
  <div style="display: flex; flex-direction: column; justify-content: space-between;">
    <p style="margin: 0;">Feel free to visit <b>my portfolio<b> to discover other projects and contact me if you have any questions or collaboration ideas.</p>
    <br><br><br><br>
    <p style="margin: 0;">Arthur Boucard</p>
  </div>
</div>
