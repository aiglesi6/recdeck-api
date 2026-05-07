<template>
  <div v-if="book" class="book-detail">
    <h2>{{ book.title }}</h2>
    <p v-if="book.author_name">Author: {{ book.author_name.join(', ') }}</p>
    <p v-else-if="book.author">Author: {{ book.author }}</p>
    <p v-if="book.subject">Genre: {{ book.subject.join(', ') }}</p>
    <p v-if="book.first_publish_year">Published: {{ book.first_publish_year }}</p>
    <p v-if="book.description">Description: {{ book.description }}</p>
  </div>
  <p v-else>Loading book details...</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = route.params.title
const book = ref(null)

onMounted(async () => {
  try {
    const res = await fetch(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
    )
    const data = await res.json()
    book.value = data.docs[0] || {}
  } catch (err) {
    console.error('Error fetching book details:', err)
  }
})
</script>

<style scoped>
.book-detail {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f0e6dc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  text-align: center;
}
</style>