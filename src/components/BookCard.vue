<template>
  <div class="book-card">
    <h3>{{ book.title }}</h3>
    <p v-if="book.author_name">Author: {{ book.author_name.join(', ') }}</p>
    <p v-else-if="book.author">Author: {{ book.author }}</p>

    <div class="buttons">
      <!-- Navigate to BookDetail page using router -->
      <button @click="viewDetails">View Details</button>

      <!-- Bookmark button -->
      <button @click="$emit('bookmark', book)">
        {{ isBookBookmarked ? 'Remove Bookmark' : 'Bookmark' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  book: Object,
  bookmarks: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()

const isBookBookmarked = computed(() =>
  bookmarks.some(b => b.key === book.key || b.title === book.title)
)

const viewDetails = () => {
  // Use title as the route param
  router.push({ name: 'BookDetail', params: { title: book.title } })
}
</script>

<style scoped>
.book-card {
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #f0e6dc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.book-card h3 {
  margin: 0.5rem 0;
}

.buttons {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

button {
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #8b5e3c;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #a4714f;
}
</style>