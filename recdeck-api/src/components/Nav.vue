<template>
  <nav class="navbar">
    <h1>My App</h1>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #1e293b;
  color: white;
}
a {
  margin-left: 1rem;
  color: white;
}
</style>