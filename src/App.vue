<script lang="ts">
import { defineComponent } from 'vue';
import WelcomeScreen from '@/components/WelcomeScreen.vue';

export default defineComponent({
  name: 'App',
  components: {
    WelcomeScreen
  }
});
</script>

<template>
  <WelcomeScreen />
</template>
