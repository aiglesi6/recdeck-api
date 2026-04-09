<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/search">Search</router-link> |
    <router-link to="/bookmarked">Bookmarked</router-link>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  padding: 1rem;
  background-color: #f4f4f4;
}
a {
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
}
</style>