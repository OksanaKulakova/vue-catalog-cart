<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from './components/SidebarBase.vue'
</script>

<template>
  <div class="container">
    <Sidebar />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
