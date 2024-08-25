<template>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <Sidebar />
  
      <!-- Main Content -->
      <div class="flex-1 flex flex-col overflow-x-auto mt-8 ml-10">
        <!-- <HeaderTop /> -->
        <NuxtPage />
      </div>
    </div>
</template>
<script setup>
    import Sidebar from '~/components/Sidebar.vue';
    import HeaderTop from '~/components/Header.vue';
</script>
