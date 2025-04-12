<script lang="ts">
import { defineComponent, computed } from 'vue';
import { mapState } from 'vuex';
import WelcomeScreen from '@/components/WelcomeScreen.vue';
import AnalysisRequest from '@/components/AnalysisRequest.vue';
import AnalysisResult from '@/components/AnalysisResult.vue';
import AboutPage from '@/components/AboutPage.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    WelcomeScreen,
    AnalysisRequest,
    AnalysisResult,
    AboutPage,
    Footer
  },
  computed: {
    ...mapState(['currentComponent']),
  }
});
</script>

<template>
  <main class="min-h-screen flex flex-col">
    <transition mode="out-in" enter-active-class="transition-all duration-500 ease-out"
      leave-active-class="transition-all duration-300 ease-in" enter-from-class="opacity-0 blur-sm scale-95"
      enter-to-class="opacity-100 blur-0 scale-100" leave-from-class="opacity-100 blur-0 scale-100"
      leave-to-class="opacity-0 blur-sm scale-95">
      <div v-if="currentComponent === 'welcome'" key="welcome" class="flex-grow">
        <WelcomeScreen />
      </div>
      <div v-else-if="currentComponent === 'form'" key="form" class="flex-grow">
        <AnalysisRequest />
      </div>
      <div v-else-if="currentComponent === 'result'" key="result" class="flex-grow">
        <AnalysisResult />
      </div>
      <div v-else-if="currentComponent === 'about'" key="about" class="flex-grow">
        <AboutPage />
      </div>
    </transition>
    
    <Footer />
  </main>
</template>
