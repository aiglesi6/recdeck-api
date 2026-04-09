<template>
  <div>
    <h2>{{ book.title }}</h2>
    <p>Author: {{ book.author }}</p>
    <p>Genre: {{ book.genre }}</p>
    <p>Description: {{ book.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({ book: Object })
</script>