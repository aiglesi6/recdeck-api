<template>
  <div>
    <h2>Results for "{{ query }}"</h2>
    <BookCard
      v-for="book in filteredBooks"
      :key="book.title"
      :book="book"
      @bookmark="bookmarkBook"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import BookCard from '@/components/BookCard.vue'

const route = useRoute()
const query = route.query.q || ''

const books = ref([
  { title: 'Book A', author: 'Author A', genre: 'Fantasy', description: '...' },
  { title: 'Book B', author: 'Author B', genre: 'Mystery', description: '...' },
  { title: 'Book C', author: 'Author C', genre: 'Sci-Fi', description: '...' }
])

const filteredBooks = computed(() =>
  books.value.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.genre.toLowerCase().includes(query.toLowerCase())
  )
)

const bookmarkBook = (book) => {
  alert(`Bookmarked ${book.title}`)
}
</script>