<template>
  <div class="errors">
    <span v-for="(error, index) in errors" :key="index">{{ error }}</span>
  </div>
</template>

<script setup></script>

<style>
.errors {
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: red;
  text-transform: uppercase;
  padding: 15px;
}
</style>
