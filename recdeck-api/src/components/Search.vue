<template>
  <div>
    <input v-model="keyword" placeholder="Enter keywords or select genre" />
    <button @click="searchBooks">Give Me Books!</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const keyword = ref('')
const router = useRouter()

const searchBooks = () => {
  // Pass the keyword to Results page (for now via query)
  router.push({ name: 'Results', query: { q: keyword.value } })
}
</script>