<template>
  <div v-html="renderedMarkdown" class="markdown-content"></div>
</template>

<script>
import MarkdownIt from 'markdown-it'

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
    }
  },
  
  data() {
    return {
      renderedMarkdown: this.renderedMarkdown
    }
  },
  mounted() {
    this.renderMarkdown()
  },
  watch: {
    markdownText: function() {
      this.renderMarkdown()
    }
  },
  methods: {
    async renderMarkdown() {
      let markdownText = ''

      try {
        const filePath = `/markdown/${this.fileName}.md` 
        markdownText = await readFile(filePath)
      } catch (error) {
        console.error('Error rendering markdown:', error)
      }

      const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true
      })
      this.renderedMarkdown = md.render(markdownText)
    }
  }
}
</script>

<style>
.markdown-content {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #607B96;
  padding: 0 1em;
}

.markdown-content * {
  box-sizing: border-box;
}

.markdown-content html {
  -webkit-text-size-adjust: 100%;
}

/* Headings */
.markdown-content h1 {
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
}

.markdown-content h2 {
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
}

.markdown-content h3 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
}

.markdown-content h4 {
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
}

.markdown-content h5 {
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
}

.markdown-content h6 {
  font-size: 12px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
}

/* Paragraphs */
.markdown-content p {
  margin: 0 0 10px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

/* Lists */
.markdown-content li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.markdown-content ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.markdown-content ol {
  display: block;
  list-style-type: decimal;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.markdown-content ul,
.markdown-content ol {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-content ::marker {
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
  text-indent: 0px !important;
  text-align: start !important;
  text-align-last: start !important;
}

/* Links */
.markdown-content a {
  color: #428bca;
  text-decoration: none;
  background: transparent;
}

.markdown-content a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

.markdown-content a:hover {
  text-decoration: underline;
}

/* Blockquotes */
.markdown-content blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #f8f9fa;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
}

/* Code blocks */
.markdown-content pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #9c9bad;
  border: 1px solid #2c2d2e;
  border-radius: 4px;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  overflow: auto;
}

/* Horizontal rules */
.markdown-content hr {
  margin-top: 1em;
  margin-bottom: 1em;
  border: none;
  border-top: 1px solid #ccc;
}

/* Inline code */
.markdown-content code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border-radius: 0;
}
</style>
