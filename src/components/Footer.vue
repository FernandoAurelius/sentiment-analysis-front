<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Footer',
  setup() {
    const store = useStore();

    const navigateToAbout = () => {
      store.dispatch('navigateTo', 'about');
    };

    const navigateToWelcome = () => {
      store.dispatch('navigateTo', 'welcome');
    };

    return {
      navigateToAbout,
      navigateToWelcome
    };
  }
});
</script>

<template>
  <footer class="w-full py-6 px-4 mt-auto bg-indigo-950/60 border-t border-indigo-500/20">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div class="text-indigo-300 text-sm mb-4 md:mb-0 text-center md:text-left">
        <p>© {{ new Date().getFullYear() }} Análise de Sentimentos</p>
        <p class="mt-1">Projeto para Qualificação Profissional - CEMIC</p>
      </div>
      
      <div class="flex flex-col md:flex-row gap-4 items-center">
        <button @click="navigateToWelcome" 
          class="text-indigo-300 hover:text-white transition-colors">
          Início
        </button>
        <button @click="navigateToAbout" 
          class="text-indigo-300 hover:text-white transition-colors">
          Sobre o Projeto
        </button>
        <div class="flex gap-4 ml-0 md:ml-6">
          <a href="https://github.com/FernandoAurelius" target="_blank" 
            class="text-indigo-300 hover:text-white flex items-center gap-1 transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
            <span>Fernando</span>
          </a>
          <a href="https://github.com/carloseduardofalmada" target="_blank" 
            class="text-indigo-300 hover:text-white flex items-center gap-1 transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
            <span>Carlos</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
