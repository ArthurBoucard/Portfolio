<template>
  <div class="code-container flex font-fira_retina text-menu-text">
    <div class="line-numbers lg:flex flex-col w-16 hidden">

      <!-- line numbers -->
      <div v-for="n in lines" class="grid grid-cols-2 justify-end" :key="n">
        <span class="col-span-1 mr-1">{{ n }}</span>
      </div>
    </div>

    <!-- text -->
    <div class="text-container">
      <pre v-html="markdownText"></pre>
    </div>
  </div>
</template>

<script>

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = function(event) {
      resolve(event.target.result); // Resolve with the file content
    };
    
    reader.onerror = function(event) {
      reject(event.target.error); // Reject with the error
    };
    
    // Read the file as text
    fetch(filePath)
      .then(response => response.blob())
      .then(blob => reader.readAsText(blob))
      .catch(error => reject(error));
  });
}

export default {
  props: {
    fileName: {
      type: String,
      required: true
    },
    update: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      lines: 0
    };
  },
  mounted() {
    this.updateLines();
    window.addEventListener("resize", this.updateLines);
    window.addEventListener("click", this.updateLines);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateLines);
    window.removeEventListener("click", this.updateLines);
  },
  methods: {
    async updateLines() {
      try {
        const filePath = `/markdown/${this.fileName}.md` 
        this.markdownText = await readFile(filePath)
      } catch (error) {
        console.error('Error rendering markdown:', error)
      }

      const textContainer = this.$el.querySelector(".text-container");
      const style = window.getComputedStyle(textContainer);
      const fontSize = parseInt(style.fontSize);
      const lineHeight = parseInt(style.lineHeight);
      const maxHeight = textContainer.offsetHeight;
      this.lines = Math.ceil(maxHeight / lineHeight) + 1;
    }
  }
};
</script>

<style>
.code-container {
  display: flex;
  align-items: flex-start;
}

.line-numbers {
  text-align: right;
}

.text-container {
  width: 100%;
  padding-left: 40px;
  word-wrap: break-word;
}

.text-container pre {
  margin: 0;
  white-space: pre-wrap;
}
</style>