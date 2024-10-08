# Infinite Monkey Theorem

<img src="../images/markdown/monkey.gif" alt="Monkey" class="gif-monkey" />

## Introduction 🐒

The *Infinite Monkey Theorem* project is a unique experiment that blends mathematical theory with modern technology. It’s an interactive website I developed using Vue.js for the frontend, with a Symfony backend and a MySQL database. The concept is based on the famous infinite monkey theorem, which states that a monkey randomly pressing keys on a typewriter for an infinite amount of time could theoretically produce any text, including the complete works of Shakespeare.

On my site, each logged-in user has a "monkey" that types randomly in real time, and users can also view all the texts generated by all the monkeys.

---

## How the Site Works 🔧

### Random Letter Generation
The "monkey" assigned to each user randomly chooses one of the 26 letters of the alphabet to form its texts. There’s no logic or parameter guiding these choices—they are truly random, reflecting the unpredictable nature of the theorem.

### Real-Time Character Storage
To ensure the smooth operation of the site, after every X characters are generated, a request is sent to the backend to store the latest string of characters in the database. This ensures that all texts are properly saved and can be retrieved later.

When users wish to view all the generated texts, a request retrieves the combined strings stored in the database, offering a complete overview of the texts produced by all the monkeys.

---

## Search and Probability 📊

### Searching the Texts
The site also provides a search feature, allowing users to look for specific sequences of characters to see if they have already been produced by one of the monkeys.

### Probability Calculation
In addition to the search function, an interesting feature calculates the probability of a specific letter sequence being typed. The probability is based on a simple calculation: each letter has a 1 in 26 chance of being selected, and the probability of obtaining a particular sequence is calculated based on the number of letters in the sequence.

For example, for a sequence of 3 letters, the probability would be (1/26) x (1/26) x (1/26) = **0.0057%**.

---

## Conclusion 🎉

The *Infinite Monkey Theorem* site explores, in a fun and scientific way, the theory of probabilities and random behavior. It allows users to visualize, in real time, the evolution of the generated texts while prompting them to ponder the likelihood of certain character sequences appearing. A project that combines entertainment and reflection, putting fascinating theoretical concepts into practice through the power of modern web development.

---

<div style="display: flex; align-items: flex-start;">
  <img src="../images/markdown/me.png" alt="Me" style="width: 150px; margin-right: 15px;">
  <div style="display: flex; flex-direction: column; justify-content: space-between;">
    <p style="margin: 0;">Feel free to visit <b>my portfolio<b> to discover other projects and contact me if you have any questions or collaboration ideas.</p>
    <br><br><br><br>
    <p style="margin: 0;">Arthur Boucard</p>
  </div>
</div>
