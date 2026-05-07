<template>
  <div class="bookmarked-page-container">
    <h1>Your Bookmarked Books</h1>

    <div v-if="bookmarks.length" class="book-grid">
      <div v-for="book in bookmarks" :key="book.key" class="book-card">
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
        <button @click="removeBookmark(book)">
          Remove Bookmark
        </button>
      </div>
    </div>

    <div v-else>
      <p>You haven't bookmarked any books yet.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const bookmarks = ref([])

onMounted(() => {
  bookmarks.value = JSON.parse(localStorage.getItem('bookmarks') || '[]')
})

const removeBookmark = (book) => {
  const index = bookmarks.value.findIndex(b => b.key === book.key)
  if (index !== -1) {
    bookmarks.value.splice(index, 1)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks.value))
  }
}
</script>

<style scoped>
.bookmarked-page-container {
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
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