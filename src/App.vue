<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<template>
  <div>
    <Header />
    <div class="mt-8 px-8">
      <router-view v-slot="{ Component }">
        <transition name="router-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>
.router-fade-enter-from,
.router-fade-leave-to {
  opacity: 0;
}

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.5s ease-in;
}
</style>
