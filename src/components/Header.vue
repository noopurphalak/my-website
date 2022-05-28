<template>
  <div class="flex justify-between items-baseline px-12 py-4">
    <div>
      <div
        class="border-4 border-blue-500 w-12 h-12 rounded-full flex justify-center items-center"
      >
        <div
          class="text-blue-500 font-bold text-2xl cursor-pointer"
          @click="router.push('/')"
        >
          N
        </div>
      </div>
    </div>
    <nav>
      <ul class="flex space-x-12">
        <li class="text-blue-500 text-xl font-semibold m-2">
          <router-link to="/">Home</router-link>
        </li>
        <li class="text-blue-500 text-xl font-semibold m-2">
          <router-link to="/experience">Experience</router-link>
        </li>
        <li class="text-blue-500 text-xl font-semibold m-2">
          <router-link to="/side-projects">Side Projects</router-link>
        </li>
        <li class="text-blue-500 text-xl font-semibold m-2">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="postcss" scoped>
li > a {
  @apply h-8;
}

li a:hover,
li a.router-link-active {
  @apply border-b-2 border-blue-500 text-blue-700;
}
</style>
