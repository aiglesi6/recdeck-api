<template>
  <div class="search-view">
    <h2>Search</h2>
    <Search />
  </div>
</template>

<script>
import Search from '../components/Search.vue'

export default {
  name: 'SearchView',
  components: { Search }
}
</script>