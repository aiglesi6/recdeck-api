<template>
  <div class="home-container">
    <div class="background-image"></div>

    <button class="bookmark-button" @click="goToBookmarked">
      <svg xmlns="http://www.w3.org/2000/svg" class="bookmark-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2a2 2 0 0 0-2 2v18l8-5 8 5V4a2 2 0 0 0-2-2H6z"/>
      </svg>
      View Bookmarked
    </button>

    <div class="welcome-box">
      <h1>Welcome to your RecDeck</h1>
      <p>Get personalized book recommendations based on your favorite genres and keywords!</p>
      
      <button class="home-button" @click="goToSearch">
        Give Me Books!
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSearch = () => {
  router.push({ name: 'Search' })
}

const goToBookmarked = () => {
  router.push({ name: 'Bookmarked' })
}
</script>

<style scoped>
.home-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/library.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  transform: scale(1.05);
  z-index: 0;
}

.welcome-box {
  position: relative;
  z-index: 1;
  background-color: rgba(139, 94, 60, 0.85);
  color: #fff;
  padding: 2rem 3rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.welcome-box h1 {
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}
.welcome-box p {
  font-size: 1.2rem;
  line-height: 1.5;
}

.home-button {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #8b5e3c;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s, background-color 0.2s;
}
.home-button:hover {
  background-color: #f0e6dc;
  transform: translateY(-2px);
}

.bookmark-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #8b5e3c;
  cursor: pointer;
  font-weight: bold;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: transform 0.2s, background-color 0.2s;
}
.bookmark-button:hover {
  background-color: #f0e6dc;
  transform: translateY(-2px);
}

.bookmark-icon {
  width: 1rem;
  height: 1rem;
}
</style>