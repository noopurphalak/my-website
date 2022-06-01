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
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/experience">Experience</router-link>
        </li>
        <li>
          <router-link to="/side-projects">Side Projects</router-link>
        </li>
        <li>
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
a {
  @apply text-blue-500;
}

a::after {
  @apply content-[''] block w-0 h-0.5 bg-blue-700 text-blue-700 transition-[width] duration-150 ease-out;
}

a:hover {
  @apply text-blue-700;
}

a:hover::after {
  width: 100%;
}

a.router-link-exact-active {
  @apply text-blue-700;
}

a.router-link-active::after {
  @apply content-[''] w-full h-0.5 bg-blue-700;
}
</style>
