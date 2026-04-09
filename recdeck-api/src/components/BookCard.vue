<template>
  <div class="book-card">
    <h3>{{ book.title }}</h3>
    <p>Author: {{ book.author }}</p>
    <button @click="$emit('view', book)">View Details</button>
    <button @click="$emit('bookmark', book)">Bookmark</button>
  </div>
</template>

<script setup>
defineProps({
  book: Object
})
</script>

<style scoped>
.book-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
}
</style>