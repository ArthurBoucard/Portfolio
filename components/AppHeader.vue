<template>
  <header id="navbar" class="w-full hidden lg:flex flex-col">
    <nav class="w-full flex justify-between border-bot">

      <div class="flex">
        <NuxtLink id="nav-logo" to="/">
          {{ config.text.logo_name }}
        </NuxtLink>

        <NuxtLink id="nav-link" to="/" :class="{ active: isActive('/') }">
          {{ config.text.AppHeader._hello[selectedLanguage] }}
        </NuxtLink>

        <NuxtLink id="nav-link" to="/about-me" :class="{ active: isActive('/about-me') }">
          {{ config.text.AppHeader._about[selectedLanguage] }}
        </NuxtLink>

        <NuxtLink id="nav-link" to="/projects" :class="{ active: isActive('/projects') }">
          {{ config.text.AppHeader._projects[selectedLanguage] }}
        </NuxtLink>
      </div>

      <div class="flex">
        <NuxtLink id="nav-link-language" @click="setLanguage('fr')">
          <img id="language-fr" src="/icons/languages/fr.svg" alt="fr" class="w-5 h-5 mx-4">
        </NuxtLink>
        <NuxtLink id="nav-link-language" @click="setLanguage('en')">
          <img id="language-en" src="/icons/languages/en.svg" alt="en" class="w-5 h-5 mx-4">
        </NuxtLink>

        <NuxtLink id="nav-link-contact" to="/contact-me" :class="{ active: isActive('/contact-me')}">
          {{ config.text.AppHeader._contact[selectedLanguage] }}
        </NuxtLink>
      </div>
    
    </nav>
  </header>
</template>

<style>

#nav-link {
  border-right: 1px solid #1E2D3D;
  --tw-text-opacity: 1;
  color: rgb(96 123 150 / var(--tw-text-opacity));
  font-family: Fira Code Retina;
  padding-left: 1.5rem/* 24px */;
  padding-right: 1.5rem/* 24px */;
  height: 100%;
  display: flex;
  align-items: center;
}

#nav-link-contact {
  border-left: 1px solid #1E2D3D;
  --tw-text-opacity: 1;
  color: rgb(96 123 150 / var(--tw-text-opacity));
  font-family: Fira Code Retina;
  padding-left: 1.5rem/* 24px */;
  padding-right: 1.5rem/* 24px */;
  height: 100%;
  display: flex;
  align-items: center;
}

#nav-link:hover, #nav-link-contact:hover {
  background-color: #1e2d3d74;
  color: white;
}

#nav-logo {
  border-right: 1px solid #1E2D3D;
  --tw-text-opacity: 1;
  color: rgb(96 123 150 / var(--tw-text-opacity));
  font-family: Fira Code Retina;
  padding-left: 1.5rem/* 24px */;
  padding-right: 1.5rem/* 24px */;
  height: 100%;
  display: flex;
  align-items: center;
}

#nav-logo:hover {
  background-color: #1e2d3d74;
  color: white;
}

#nav-link.router-link-active, #nav-link-contact.router-link-active {
  border-bottom: 2px solid #FEA55F;
  color: white;
}

#nav-logo.router-link-active {
  border-right: 1px solid #1E2D3D;
  border-bottom: none;
  --tw-text-opacity: 1;
  color: rgb(96 123 150 / var(--tw-text-opacity));
}

#navbar > nav {
  height: 45px;
  font-size: 13px;
}

#nav-link-language {
  border-left: 1px solid #1E2D3D;
  --tw-text-opacity: 1;
  color: rgb(96 123 150 / var(--tw-text-opacity));
  font-family: Fira Code Retina;
  padding-left: 1.5rem/* 24px */;
  padding-right: 1.5rem/* 24px */;
  height: 100%;
  display: flex;
  align-items: center;
}

#nav-link-language:hover {
  background-color: #1e2d3d74;
  color: white;
}

</style>

<script>
export default {
  data() {
    return {
      selectedLanguage: localStorage.getItem('selectedLanguage') || 'en'
    }
  },
  computed: {
    // Set active class to current page link
    isActive() {
      return route => this.$route.path === route;
    }
  },
  setup() {
    const config = useRuntimeConfig()

    return {
      config
    }
  },
  methods: {
    setLanguage(language) {
      location.reload(); // Reloads the current page
      localStorage.setItem('selectedLanguage', language);
      this.selectedLanguage = localStorage.getItem('selectedLanguage');
    },
  }
};
</script>
