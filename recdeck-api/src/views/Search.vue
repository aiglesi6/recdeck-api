<template>
  <div class="search-page-container">
    <h1>Find Your Next Book</h1>

    <!-- Search form -->
    <div class="search-form">
      <input
        v-model="query"
        type="text"
        placeholder="Enter keyword or genre"
        @keyup.enter="searchBooks"
      />
      <button @click="searchBooks">Give Me Books!</button>
    </div>

    <!-- Results -->
    <div v-if="books.length" class="results">
      <h2>Results:</h2>
      <div class="book-grid">
        <div v-for="book in books" :key="book.key" class="book-card">
          <!-- Book cover -->
          <img
            v-if="book.cover_i"
            :src="`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`"
            alt="Book cover"
            class="book-cover"
          />
          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p v-if="book.author_name">Author: {{ book.author_name.join(', ') }}</p>
            <p v-if="book.first_publish_year">Published: {{ book.first_publish_year }}</p>
          </div>
          <button @click="toggleBookmark(book)">
            {{ isBookBookmarked(book) ? 'Remove Bookmark' : 'Bookmark' }}
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="searched">
      <p>No books found for "{{ query }}"</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')
const books = ref([])
const searched = ref(false)

// Bookmark list stored in localStorage for persistence
const bookmarks = ref(JSON.parse(localStorage.getItem('bookmarks') || '[]'))

// Save bookmarks to localStorage
const saveBookmarks = () => {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks.value))
}

// Search Open Library API
const searchBooks = async () => {
  if (!query.value.trim()) return

  try {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query.value)}`
    )
    const data = await res.json()
    books.value = data.docs.slice(0, 12) // top 12 results
    searched.value = true
  } catch (err) {
    console.error('Error fetching books:', err)
    books.value = []
    searched.value = true
  }
}

// Bookmark functionality
const toggleBookmark = (book) => {
  const index = bookmarks.value.findIndex(b => b.key === book.key)
  if (index !== -1) {
    bookmarks.value.splice(index, 1)
  } else {
    bookmarks.value.push(book)
  }
  saveBookmarks()
}

const isBookBookmarked = (book) => {
  return bookmarks.value.some(b => b.key === book.key)
}
</script>

<style scoped>
.search-page-container {
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.search-form {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.search-form input {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  flex: 1;
  max-width: 400px;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
}

.search-form button {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #8b5e3c;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-form button:hover {
  background-color: #a4714f;
}

.results h2 {
  margin-bottom: 1rem;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.book-card {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f0e6dc;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-cover {
  width: 120px;
  height: 180px;
  object-fit: cover;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
}

.book-info {
  text-align: center;
}

.book-info h3 {
  margin: 0.5rem 0;
}

.book-card button {
  margin-top: 0.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #8b5e3c;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
}

.book-card button:hover {
  background-color: #a4714f;
}
</style>