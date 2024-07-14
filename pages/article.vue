<template>
  <main class="page">
    <p>
      <MarkdownViewer :fileName="'/articles/' + $route.query.title"/>
    </p>
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
  p {
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
  }
</style>
  