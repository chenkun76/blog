<template>
  <div class="container mx-auto px-6 md:px-8 lg:px-10 xl:px-12">
    <BlogHeader></BlogHeader>
    <Nuxt />
    <BlogFooter></BlogFooter>
    <MusicBox></MusicBox>
  </div>
</template>

<script lang="ts">
import BlogHeader from "../components/blog-header.vue";
import BlogFooter from "../components/blog-footer.vue";
import MusicBox from "../components/music-box.vue";

export default {
  components: {
    BlogHeader,
    BlogFooter,
    MusicBox,
  },
};
</script>
