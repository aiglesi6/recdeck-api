<template>
  <div id="app">
    <Navbar />
    <div class="layout">
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
</script>

<style>
.layout {
  display: flex;
}
</style>