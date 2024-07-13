<template>
  <div>
    <MarkdownViewer :fileName="'/articles/' + $route.query.title"/>
  </div>
</template>
  
<script>
  import MarkdownViewer from '~/components/MarkdownViewer.vue'

  export default {
    components: {
      MarkdownViewer
    },
  };
</script>
  