<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'
</script>

<template>
  <header>
    <nav class="flex h-24 justify-center bg-blue-400">
      <div class="flex h-full w-1/3 items-center justify-center space-x-8">
        <RouterLink class="text-3xl text-blue-700 hover:text-blue-900" to="/">Home</RouterLink>
        <RouterLink class="text-3xl text-blue-700 hover:text-blue-900" to="/game">Game</RouterLink>
        <RouterLink class="text-3xl text-blue-700 hover:text-blue-900" to="/about"
          >About</RouterLink
        >
      </div>
    </nav>
  </header>

  <main class="flex h-screen flex-col bg-blue-300 p-10">
    <RouterView />
  </main>
</template>

<style scoped></style>
