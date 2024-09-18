<template>
  <main class="page">
    <div class="scroll-area">
      <div class="markdown-container">
        <MarkdownViewer :fileName="'articles/' + $route.query.title" />
      </div>
    </div>
  </main>
</template>
  
<script>
  import MarkdownViewer from '~/components/MarkdownViewer.vue'

  export default {
    components: {
      MarkdownViewer
    },
  };
</script>

<style>
  .page {
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  .scroll-area {
    width: 100%;
    max-width: 100vw;
    overflow-y: auto;
    height: 100vh;
  }

  .markdown-container {
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 20%;
    font-family: 'Fira Code Regular';
  }

  h1, h2, h3, h4, h5, h6, p {
    color: white;
    line-height: 2;
  }
</style>
  