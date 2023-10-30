<script setup lang="ts">
const { result, search } = useAlgoliaSearch('articles')

onMounted(async () => {
  await search({ query: 'techno' })
})
</script>

<template>
  <div>
    <!-- <div>{{ result }}</div> -->
    <NuxtWelcome />
  </div>
</template>
