<template>
  <div class="letter-box" :class="letterStatus">
    <span class="letter">{{ allCorrect ? letter : '' }}</span>
  </div>
</template>

<script setup></script>

<style>
.letter-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60px;
  margin: 2px;
}

.letter {
  font-weight: bold;
  text-transform: uppercase;
}

.correct {
  background-color: green;
  color: white;
}

.incorrect {
  background-color: red;
  color: azure;
}

.outOfPlace {
  background-color: orange;
  color: aliceblue;
}
</style>
