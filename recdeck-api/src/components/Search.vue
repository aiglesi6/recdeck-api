<template>
  <div class="search">
    <input type="text" placeholder="Search recs…" v-model="query" @keyup.enter="doSearch" />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return { query: '' }
  },
  methods: {
    doSearch() {
      alert(`Searching for "${this.query}"`)
    }
  }
}
</script>

<style scoped>
.search input {
  padding: .5rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>