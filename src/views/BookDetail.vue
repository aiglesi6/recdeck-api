<template>
  <div class="book-detail-page">
    <div v-if="loading">
      <p>Loading book details...</p>
    </div>

    <div v-else-if="book">
      <h2>{{ book.title }}</h2>
      <p v-if="book.authors">Author: {{ book.authors.map(a => a.name).join(', ') }}</p>
      <p v-if="book.subjects">Genre: {{ book.subjects.join(', ') }}</p>
      <p v-if="book.publish_date">Published: {{ book.publish_date }}</p>
      <p v-if="book.description">
        Description:
        <span v-if="typeof book.description === 'string'">{{ book.description }}</span>
        <span v-else-if="book.description.value">{{ book.description.value }}</span>
      </p>

      <img
        v-if="book.covers && book.covers.length"
        :src="`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`"
        alt="Book cover"
        class="book-cover"
      />
    </div>

    <div v-else>
      <p>Book details not found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const bookKey = route.params.key

const book = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch(`https://openlibrary.org/books/${bookKey}.json`)
    if (!res.ok) throw new Error('Book not found')
    book.value = await res.json()
  } catch (err) {
    console.error('Error fetching book details:', err)
    book.value = null
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.book-detail-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: linear-gradient(to bottom right, #D2B48C, #8B4513);
  border-radius: 1rem;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.back-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #8b5e3c;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 1rem;
}

.back-button:hover {
  background-color: #f0e6dc;
}

.book-cover {
  width: 200px;
  height: auto;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}

.book-details h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.book-details p {
  margin: 0.5rem 0;
}

.loading,
.error {
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
}
</style>