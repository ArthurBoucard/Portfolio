<template>
  <form id="contact-form" class="text-sm">
    <div class="flex flex-col">
      <label for="name" class="mb-3">
        {{ config.text.Contact.form.name[selectedLanguage] }}:
      </label>
      <input type="text" id="name-input" name="name" :placeholder="name" class="p-2 mb-5 placeholder-slate-600" required>
    </div>
    <div class="flex flex-col">
      <label for="email" class="mb-3">
        {{ config.text.Contact.form.email[selectedLanguage] }}:
      </label>
      <input type="email" id="email-input" name="email" :placeholder="email" class="p-2 mb-5 placeholder-slate-600" required>
    </div>
    <div class="flex flex-col">
      <label for="message" class="mb-3">
        {{ config.text.Contact.form.message[selectedLanguage] }}:
      </label>
      <textarea id="message-input" name="message" :placeholder="message" class="placeholder-slate-600" required></textarea>
    </div>
    <button id="submit-button" type="submit" class="py-2 px-4">
      {{ config.text.Contact.form.submit[selectedLanguage] }}
    </button>
  </form>
</template>

<script>


export default {
  name: 'ContactForm',
  data() {
    return {
      selectedLanguage: localStorage.getItem('selectedLanguage')
    }
  },
  setup() {
    const config = useRuntimeConfig()

    return {
      config
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  mounted() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.querySelector('input[name="name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const message = document.querySelector('textarea[name="message"]').value;
        
        // TODO: send me an email with the form data
    });
  }
}
</script>

<style>

form {
  font-family: Fira Code Retina;
  --tw-text-opacity: 1;
  color: rgb(96 123 150 / var(--tw-text-opacity));
}
input {
  background-color: #011221;
  border: 2px solid #1E2D3D;
  border-radius: 7px;
  
}
/* Change Autocomplete styles in Chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: rgb(190, 190, 190);
  transition: background-color 5000s ease-in-out 0s;
  border: 2px solid #607b96;
}

#message-input {
  background-color: #011221;
  border: 2px solid #1E2D3D;
  border-radius: 7px;
  resize: none;
  height: 150px;
  padding: 10px;
}

#submit-button {
  font-family: Fira Code Retina;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */;
  background-color: #1E2D3D;
  border-radius: 7px;
  margin-top: 20px;
  cursor: pointer;
}

#submit-button:hover {
  background-color: #263B50;
}

input:focus, #message-input:focus {
  outline: none;
  transition: none;
  border: 2px solid #607b96;
  box-shadow: #607b9669 0px 0px 0px 2px;
}

#contact-form {
  max-width: 370px;
  width: 100%;
}

@media (max-width: 1920px) {
  #contact-form {
      max-width: 320px;
      max-height: 400px;
  }
  #submit-button {
      /* width: 100%; */
      font-size: 12px;
  }
  textarea {
      font-size: 13px;
      max-height: 130px !important;
  }
  input {
      font-size: 13px;
  }
}
</style>