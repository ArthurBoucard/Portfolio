<template>
  <main v-if="!loading" id="about-me" class="page">

    <div id="mobile-page-title">
      <h2>_about-me</h2>
    </div>

    <div id="page-menu" class="w-full flex">

      <!-- focused section content -->
      <div id="section-content" class="hidden lg:block w-full h-full border-right">

        <!-- title -->
        <div id="section-content-title" class="hidden lg:flex items-center min-w-full">
          <p id="section-content-title-explorer" class="font-fira_regular text-white text-sm">Explorer</p>
        </div>
        <div id="section-content-title" class="hidden lg:flex items-center min-w-full">
          <img id="section-arrow-menu" src="/icons/arrow.svg" alt="" class="section-arrow mx-3 open">
          <p v-html="config.dev.about.sections[currentSection].title" class="font-fira_regular text-white text-sm"></p>
        </div>

        <!-- files -->
        <div>
          <div v-for="(folder, key, index) in config.dev.about.sections[currentSection].info" :key="key" class="grid grid-cols-2 items-center my-2 font-fira_regular text-menu-text" @click="focusCurrentFolder(folder)">
            <div class="flex col-span-2 hover:text-white hover:cursor-pointer">
              <img :src="'/icons/markdown' + (index + 1) + '.svg'" alt="" class="mx-4">
              <p :id="folder.title" v-html="key" :class="{ active: isActive(folder.title)}"></p>
            </div>
          </div>
        </div>

        <!-- contact -->
        <div id="section-content-title-contact" class="flex items-center min-w-full border-top">
          <img id="section-arrow-menu" src="/icons/arrow.svg" alt="" class="section-arrow mx-3 open">
          <p v-html="config.dev.contacts.direct.title" class="font-fira_regular text-white text-sm"></p>
        </div>
        <div id="contact-sources" class="hidden lg:flex lg:flex-col my-2">
          <div v-for="(source, key) in config.dev.contacts.direct.sources" :key="key" class="flex items-center mb-2">
            <img :src="'/icons/' + key + '.svg'" alt="" class="mx-4">
            <a v-html="source" :href="getLink(key, source)" class="font-fira_retina text-menu-text hover:text-white"></a>
          </div>
        </div>

      </div>

      <!-- mobile -->
      <div id="section-content" class="lg:hidden w-full font-fira_regular">

        <div v-for="section in config.dev.about.sections" :key="section.title">
          
          <!-- section title (mobile) -->
          <div :key="section.title" :src="section.icon" id="section-content-title" class="flex lg:hidden mb-1" @click="focusCurrentSection(section)">
            <img src="/icons/arrow.svg" :id="'section-arrow-' + section.title" alt="" class="section-arrow">
            <p v-html="section.title" class=" text-white text-sm"></p>
          </div>

          <!-- files -->
          <div :id="'folders-' + section.title" class="hidden"> <!-- <div :id="'folders-' + section.title" :class="currentSection == section.title ? 'block' : 'hidden'"> -->
            <div v-for="(folder, key, index) in config.dev.about.sections[section.title].info" :key="key" class="grid grid-cols-2 items-center my-2 font-fira_regular text-menu-text hover:text-white hover:cursor-pointer" @click="focusCurrentFolder(folder)">
              <div class="flex col-span-2">
                <img :src="'/icons/markdown' + (index + 1) + '.svg'" alt="" class="mx-4">
                <p :id="folder.title" v-html="key" :class="{ active: isActive(folder.title)}"></p>
              </div>
            </div>
          </div>
          
        </div>

        <!-- section content title -->
        <div id="section-content-title" class="flex items-center min-w-full" @click="showContacts()">
          <img src="/icons/arrow.svg" alt="" id="section-arrow" class="section-arrow">
          <p v-html="config.dev.contacts.direct.title" class="font-fira_regular text-white text-sm"></p>
        </div>

        <!-- section content folders -->
        <div id="contacts" class="hidden">
          <div v-for="(source, key) in config.dev.contacts.direct.sources" :key="key" class="flex items-center my-2">
            <img :src="'/icons/' + key + '.svg'" alt="">
            <a v-html="source" :href="getLink(key, source)" class="font-fira_retina text-menu-text hover:text-white"></a>
          </div>
        </div>

      </div>

    </div>
    <!-- MENU END -->

    <!-- left panel -->
    <div class="flex flex-col lg:grid lg:grid-cols-2 h-full w-full">
      <div id="left" class="w-full flex flex-col border-right">

        <!-- title -->
        <div id="section-content-title" class="hidden lg:flex items-center min-w-full">
          <img :src="'/icons/markdown.svg'" alt="" class="mx-4">
          <p v-html="config.dev.about.sections[currentSection].info[folder].title + '.md'" class="font-fira_regular text-white text-sm"></p>
        </div>

        <!-- code text -->
        <div id="code-editor-text" class="flex h-full w-full lg:border-right overflow-scroll" @scroll="syncScroll('left')" ref="leftPanel">
          <div class="w-full h-full ml-5 mr-10 lg:my-5">
              <CodeEditorText :fileName="config.dev.about.sections[currentSection].info[folder].title" :update="updateComponents" />
          </div>
        </div>
      </div>

      <!-- right panel -->
      <div class="hidden lg:block w-full h-full border-right overflow-scroll">

        <!-- title -->
        <div id="section-content-title" class="hidden lg:flex items-center min-w-full">
          <img :src="'/icons/preview.svg'" alt="" class="mx-4">
          <p v-html="'Preview ' + config.dev.about.sections[currentSection].info[folder].title + '.md'" class="font-fira_regular text-white text-sm"></p>
        </div>

        <!-- markdown -->
        <div id="right" class="max-w-full h-full flex flex-col overflow-scroll">
          <div class="h-full overflow-scroll" @scroll="syncScroll('right')" ref="rightPanel">
            <MarkdownViewer :fileName="config.dev.about.sections[currentSection].info[folder].title" :update="updateComponents"/>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<style>

#sections {
  width: 5rem; /* 80px */
  height: 100%;
  display: none;
  border-right: 1px solid #1E2D3D;
}

/* LG */
@media (min-width: 1024px) {
  #sections {
    display: block;
  }
}

#section-icon {
  margin-top: 1.5rem/* 24px */;
  margin-bottom: 1.5rem/* 24px */;
  cursor: pointer;
  display: flex;
  justify-content: center;
  opacity: 0.4;
}

#section-icon.active {
  opacity: 1;
}

#section-icon:hover {
  opacity: 1;
}

.tab-height {
  min-height: 35px;
  max-height: 35px;
}

#tab-mobile {
  padding: 25px 20px 0px 25px;
  align-items: flex-end;
}

#scroll-bar{
  width: 20px;
}

#scroll {
  width: 14px;
  height: 7px;
  background-color: #607B96;
}

.open {
  transform: rotate(90deg);
}

.active {
  color:white;
}

#right, #left {
  height: 100%;
  overflow: hidden;
}

.section-arrow {
  transition: 0.1s;
}

#section-content #contacts {
  padding: 0px 25px;
}

#section-content-title-explorer {
  padding: 0px 25px;
  opacity: 0.4;
  font-size: 13px;
  font-weight: lighter;
}

</style>

<script>
import MarkdownViewer from '~/components/MarkdownViewer.vue'

export default {
  components: {
    MarkdownViewer
  },
  data() {
    return {
      currentSection: 'my-informations',
      folder: 'bio',
      loading: true,
      leftPanel: null,
      rightPanel: null,
      updateComponents: false,
    }
  },
  /**
   * In setup we can define the data we want to use in the component before the component is created.
   */
  setup() {
    const config = useRuntimeConfig()
    return {
      config
    }
  },
  computed: {
    // Set active class to current page link
    isActive() {
      return folder => this.folder === folder;
    },
    isSectionActive() {
      return section => this.currentSection === section;
    },
    isOpen() {
      return folder => this.folder === folder;
    },
  },
  methods: {
    focusCurrentSection(section) {
      this.currentSection = section.title
      this.folder = Object.keys(section.info)[0]

      document.getElementById('folders-' + section.title).classList.toggle('hidden') // show folders
    },
    focusCurrentFolder(folder) {
      this.folder = folder.title
      // handle if folder belongs to the current section. It happens when you click on a folder from a different section in mobile view.
      this.currentSection = this.config.dev.about.sections[this.currentSection].info[folder.title] ? this.currentSection : Object.keys(this.config.dev.about.sections).find(section => this.config.dev.about.sections[section].info[folder.title])
      // update components every time a new folder is focused
      this.updateComponents = !this.updateComponents
    },
    toggleFiles() {
      document.getElementById('file-' + this.folder).classList.toggle('hidden')
    },
    /* Mobile */
    showContacts() {
      document.getElementById('contacts').classList.toggle('hidden')
      document.getElementById('section-arrow').classList.toggle('rotate-90'); // rotate arrow
    },
    syncScroll(panel) { // TODO: Fix scrolling bug when scrolled a specific amount it starts auto scrolling
      const leftPanel = this.$refs.leftPanel;
      const rightPanel = this.$refs.rightPanel;

      if (panel === 'left') {
        // Calculate the ratio of left scroll position
        const leftScrollRatio = leftPanel.scrollTop / (leftPanel.scrollHeight - leftPanel.clientHeight);
        // Set the scroll position of the right panel
        rightPanel.scrollTop = leftScrollRatio * (rightPanel.scrollHeight - rightPanel.clientHeight);
      } else {
        // Calculate the ratio of right scroll position
        const rightScrollRatio = rightPanel.scrollTop / (rightPanel.scrollHeight - rightPanel.clientHeight);
        // Set the scroll position of the left panel
        leftPanel.scrollTop = rightScrollRatio * (leftPanel.scrollHeight - leftPanel.clientHeight);
      }
    },
    getLink(key, source) {
      // Determine the link based on the type of source
      if (key === 'email') {
        return 'mailto:' + source;
      } else if (key === 'phone') {
        return 'tel:' + source;
      } else {
        return '/';
      }
    },
  },
  mounted(){
    this.loading = false
  }
}
</script>