<template>
  <div class="q-pa-md">
    <div class="q-my-xl text-center q-gutter-md">
      <q-btn label="default layout" color="dark" @click="changePageLayuout('default')" />
      <q-btn label="admin layout" color="dark" @click="changePageLayuout('admin')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutKey } from '#build/types/layouts';
const changePageLayuout = (layout: LayoutKey) => {
  setPageLayout(layout);
};

definePageMeta({
  layout: false,
});
</script>

<style scoped></style>
