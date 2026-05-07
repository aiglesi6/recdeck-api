<template>
  <div class="book-detail-card">
    <img
      v-if="book.cover_i"
      :src="`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`"
      alt="Book cover"
      class="book-cover"
    />
    <div class="book-info">
      <h3>{{ book.title }}</h3>
      <p v-if="book.author_name">Author: {{ book.author_name.join(', ') }}</p>
      <p v-else-if="book.author">Author: {{ book.author }}</p>
      <p v-if="book.subject">Genre: {{ book.subject.join(', ') }}</p>
      <p v-if="book.first_publish_year">Published: {{ book.first_publish_year }}</p>
      <p v-if="book.description">{{ book.description }}</p>
    </div>
    <div class="book-buttons">
      <button @click="$emit('view', book)">View Details</button>
      <button @click="$emit('bookmark', book)">
        {{ isBookBookmarked ? 'Remove Bookmark' : 'Bookmark' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  book: Object,
  bookmarkedKeys: Array
})

const emit = defineEmits(['view', 'bookmark'])

const isBookBookmarked = computed(() => {
  return bookmarkedKeys.includes(book.key)
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