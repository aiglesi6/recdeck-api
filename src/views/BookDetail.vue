<template>
  <div class="book-detail-container">
    <button class="back-button" @click="$router.back()">← Back</button>

    <div v-if="loading" class="loading">
      Loading book details...
    </div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <div v-else class="book-details">
      <img
        v-if="book.cover_i"
        :src="`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`"
        alt="Book cover"
        class="book-cover"
      />
      <h1>{{ book.title }}</h1>
      <p v-if="book.author_name">Author: {{ book.author_name.join(', ') }}</p>
      <p v-if="book.first_publish_year">First Published: {{ book.first_publish_year }}</p>
      <p v-if="book.subject">Subjects: {{ book.subject.join(', ') }}</p>
      <p v-if="book.description">Description: {{ book.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = route.params.title || ''

const book = ref({})
const loading = ref(true)
const error = ref('')

const fetchBook = async () => {
  loading.value = true
  error.value = ''

  try {
    const res = await fetch(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
    )
    const data = await res.json()

    if (data.docs && data.docs.length > 0) {
      // Take the first result
      book.value = data.docs[0]

      if (book.value.key) {
        const workRes = await fetch(`https://openlibrary.org${book.value.key}.json`)
        const workData = await workRes.json()
        if (workData.description) {
          book.value.description =
            typeof workData.description === 'string'
              ? workData.description
              : workData.description.value
        }
      }
    } else {
      error.value = 'No book found with that title.'
    }
  } catch (err) {
    console.error(err)
    error.value = 'Failed to fetch book details.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchBook()
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