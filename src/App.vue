<template>
  <div class="flex flex-row h-16 bg-gray-500 items-center">
    <header class="container mx-auto flex">
      <div class="mr-5">Logomarca</div>
      <nav>
        <router-link class="mx-2" to="/">Home</router-link>
        <router-link class="mx-2" to="/board">Board</router-link>
      </nav>
    </header>
  </div>

  <div class="flex container mx-auto">
    <router-view />
  </div>
  
</template>

<script setup></script>
