<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import type { ComponentName } from '@/interfaces/State';

export default defineComponent({
    name: 'NavigationButton',
    setup() {
        const store = useStore();
        const currentComponent = computed(() => store.state.currentComponent);

        const buttonText = computed(() => {
            switch (currentComponent.value) {
                case 'welcome':
                    return 'Ir para análise!';
                case 'form':
                    return 'Ver os resultados';
                case 'result':
                    return 'Voltar para o início';
                default:
                    return 'Continuar';
            }
        });

        const nextComponent = computed((): ComponentName => {
            switch (currentComponent.value) {
                case 'welcome':
                    return 'form';
                case 'form':
                    return 'result';
                case 'result':
                    return 'welcome';
                default:
                    return 'welcome';
            }
        });

        const handleClick = () => {
            store.dispatch('navigateTo', nextComponent.value);
        };

        return {
            buttonText,
            handleClick
        };
    }
});
</script>

<template>
    <button @click="handleClick"
        class="group/follow flex items-center gap-2 rounded-md bg-transparent outline-4 outline-fuchsia-800 px-4 py-2 text-white mx-auto shadow-lg 
        transition-all hover:-translate-y-0.5 active:-translate-y-0 active:outline-fuchsia-600 hover:outline-fuchsia-600 active:shadow-inner">
        <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
        bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
        bg-[length:200%_auto]
        animate-gradient">{{ buttonText }}</span>
        <svg class="transition-transform group-hover/follow:-rotate-45 group-active/follow:rotate-0 size-6"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    </button>
</template>
