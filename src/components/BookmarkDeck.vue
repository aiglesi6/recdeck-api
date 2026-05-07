<template>
  <div>
    <h2>Bookmarked Books</h2>
    <div v-if="bookmarks.length === 0">No books bookmarked yet</div>
    <BookCard
      v-for="book in bookmarks"
      :key="book.title"
      :book="book"
      @view="viewBook"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BookCard from './BookCard.vue'

const bookmarks = ref([]) // temporary storage for demo

const viewBook = (book) => {
  alert(`Viewing ${book.title}`)
}
</script>