<template>
  <div class="main-view">
    <div class="sidebar-wrapper">
      <SideBar @toggle-sidebar="handleToggleSidebar"></SideBar>
    </div>
    <div class="content-wrapper">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import HomeView from './home/home-view.vue';
import SideBar from './components/sidebar.vue';
// import SideBar from './components/trial-sidebar.vue';
import { ref, computed } from 'vue';

// const isSidebarExpanded = ref(false);

const isSidebarExpanded = ref(localStorage.getItem("isSidebarExpanded") === "true")

const handleToggleSidebar = (expanded: boolean) => {
  isSidebarExpanded.value = expanded;

  console.log('isSidebarExpanded.value =', isSidebarExpanded.value);
}

const computedSidebarWidth = computed(() => {
  return isSidebarExpanded.value ? '250px' : 'calc(2rem + 32px)';
});

console.log('isSidebarExpanded = ' + isSidebarExpanded.value)
</script>

<style scoped>
.main-view {
  display: grid;
  grid-template-columns: v-bind(computedSidebarWidth) 1fr;
  transition: grid-template-columns 0.2s ease-in-out;
  /* grid-template-columns: 250px 1fr; */
  /* grid-template-columns: 1fr 1fr; */

  .sidebar-wrapper {
    height: 100%;
  }

  .content-wrapper {
    transition: 0.2s ease-in-out;
    min-height: 100vh;
    background-color: var(--clr-neutral-light);
    align-items: center;
  }
}

</style>
