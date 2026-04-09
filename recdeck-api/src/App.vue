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
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style>
.layout {
  display: flex;
}
</style>