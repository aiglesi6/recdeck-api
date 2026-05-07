<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/search">Search</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  gap: 2rem;
  padding: 1rem;
  align-items: center;
  display: flex;
  background: #8b4513;
}

nav a {
  color:#FFDAB9;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s, transform 0.2s;
}

nav a:hover {
  margin-right: 1rem;
  color: #FFDAB9;
  transform: translateY(-2px);
}
</style>