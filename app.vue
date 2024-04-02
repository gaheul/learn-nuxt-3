<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref('vue & nuxt mastery class');
const description = ref('짐코딩과 함께 vue3 기초부터 실전, 활용 그리고 nuxt framework 까지 함께 배워봐요 !');

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/og-image.png',
});
</script>
