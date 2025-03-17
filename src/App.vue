<script lang="ts">
import { defineComponent, computed } from 'vue';
import { mapState } from 'vuex';
import WelcomeScreen from '@/components/WelcomeScreen.vue';
import AnalysisRequest from '@/components/AnalysisRequest.vue';
import AnalysisResult from '@/components/AnalysisResult.vue';


export default defineComponent({
  name: 'App',
  components: {
    WelcomeScreen,
    AnalysisRequest,
    AnalysisResult
  },
  computed: {
    ...mapState(['currentComponent']),
  }
});
</script>

<template>
  <transition mode="out-in" enter-active-class="transition-all duration-500 ease-out"
    leave-active-class="transition-all duration-300 ease-in" enter-from-class="opacity-0 blur-sm scale-95"
    enter-to-class="opacity-100 blur-0 scale-100" leave-from-class="opacity-100 blur-0 scale-100"
    leave-to-class="opacity-0 blur-sm scale-95">
    <div v-if="currentComponent === 'welcome'" key="welcome">
      <WelcomeScreen />
    </div>
    <div v-else-if="currentComponent === 'form'" key="form">
      <AnalysisRequest />
    </div>
    <div v-else-if="currentComponent === 'result'" key="result">
      <AnalysisResult />
    </div>
  </transition>
</template>
