<template>
  <div class="card">
    <!-- Cover -->
    <div class="cover">
      <img :src="coverUrl" :alt="`${title} cover`" />
    </div>

    <!-- Content -->
    <div class="content">
      <div class="header">
        <h3 class="title">{{ title }}</h3>
        <span class="badge">{{ genre }}</span>
      </div>

      <p class="author">{{ author }}</p>

      <!-- Rating -->
      <div class="rating">
        <span
          v-for="i in 5"
          :key="i"
          :class="[
            'star',
            i <= rating ? 'filled' : 'empty'
          ]"
        >
          ★
        </span>
        <span class="rating-text">({{ rating }}.0)</span>
      </div>

      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  author: String,
  genre: String,
  rating: Number,
  description: String,
  coverUrl: String
})
</script>

<style scoped>
.card {
  overflow: hidden;
  border-radius: 12px;
  background: white;
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.cover {
  aspect-ratio: 2 / 3;
  overflow: hidden;
  background: #f3f4f6;
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 16px;
}

.header {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
}

.title {
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.badge {
  background: #e5e7eb;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
}

.author {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
}

.star {
  font-size: 16px;
}

.filled {
  color: #facc15;
}

.empty {
  color: #d1d5db;
}

.rating-text {
  font-size: 14px;
  margin-left: 4px;
}

.description {
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>