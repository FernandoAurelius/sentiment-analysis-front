<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'WelcomeScreen',
    mounted() {
        const hiddenElements = document.querySelectorAll<HTMLElement>('.on-scroll-hidden');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                switch (entry.isIntersecting) {
                    case true:
                        entry.target.classList.remove("on-scroll-hidden", "opacity-0", "blur-xs", "-translate-x-full");
                        entry.target.classList.add("on-scroll-show", "opacity-100", "blur-0", "translate-x-0");
                        break;
                    case false:
                        entry.target.classList.remove("on-scroll-show", "opacity-100", "blur-0", "translate-x-0");
                        entry.target.classList.add("on-scroll-hidden", "opacity-0", "blur-xs", "-translate-x-full");
                        break;
                }
            });
        });

        hiddenElements.forEach((element, i) => {
            element.style.transitionDelay = i * 200 + "ms";
            observer.observe(element);
        });
    }
});
</script>

<template>
    <section
        class="on-scroll-hidden grid place-items-center align-center min-h-screen p-5 box-border opacity-0 transition-all duration-1000 blur-xs -translate-x-full">
        <h1 class="text-4xl md:text-6xl font-bold text-white text-center mb-4 tracking-tight">Bem-vindo à Análise de Sentimentos</h1>
        <p class="text-xl text-cyan-100 max-w-2xl text-center">Descubra o poder da inteligência artificial para compreender emoções em textos.</p>
    </section>
    <section
        class="on-scroll-hidden grid place-items-center align-center h-screen p-5 box-border opacity-0 transition-all duration-1000 blur-xs -translate-x-full">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 text-center">Como funciona a magia?</h2>
        <p class="text-lg md:text-xl text-center text-cyan-100 max-w-3xl">
            Nossa plataforma utiliza tecnologias avançadas de processamento de linguagem natural para analisar o sentimento 
            por trás das palavras. De textos simples a análises complexas, extraímos insights valiosos sobre emoções e intenções.
        </p>
    </section>
    <section
        class="on-scroll-hidden grid place-items-center align-center min-h-screen p-5 box-border opacity-0 transition-all duration-1000 blur-xs -translate-x-full">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-10 text-center">O processo por trás da análise</h2>
        <div class="w-full flex flex-wrap justify-center gap-8 max-w-6xl">
            <div class="on-scroll-hidden flex flex-col items-center opacity-0 transition-all duration-1000 blur-xs -translate-x-full max-w-xs">
                <div class="w-full max-w-[180px] h-[180px] m-2 rounded-2xl p-6 bg-cyan-700 flex items-center justify-center shadow-lg hover:bg-cyan-600 transition-all">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#E0F7FA"/>
                        <path d="M9 8C9.55228 8 10 7.55228 10 7C10 6.44772 9.55228 6 9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8Z" fill="#E0F7FA"/>
                        <path d="M15 8C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6C14.4477 6 14 6.44772 14 7C14 7.55228 14.4477 8 15 8Z" fill="#E0F7FA"/>
                        <path d="M12 18C15.31 18 18 15.31 18 12H6C6 15.31 8.69 18 12 18Z" fill="#E0F7FA"/>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-white mt-4">Modelo de IA</h3>
                <p class="text-center text-cyan-100 mt-2">Utilizamos modelos pré-treinados que aprenderam padrões de linguagem a partir de milhões de textos.</p>
            </div>

            <div class="on-scroll-hidden flex flex-col items-center opacity-0 transition-all duration-1000 blur-xs -translate-x-full max-w-xs">
                <div class="w-full max-w-[180px] h-[180px] m-2 rounded-2xl p-6 bg-cyan-700 flex items-center justify-center shadow-lg hover:bg-cyan-600 transition-all">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#E0F7FA"/>
                        <circle cx="5" cy="5" r="1" fill="#E0F7FA"/>
                        <circle cx="8" cy="5" r="1" fill="#E0F7FA"/>
                        <circle cx="11" cy="5" r="1" fill="#E0F7FA"/>
                        <circle cx="5" cy="12" r="1" fill="#E0F7FA"/>
                        <circle cx="8" cy="12" r="1" fill="#E0F7FA"/>
                        <circle cx="11" cy="12" r="1" fill="#E0F7FA"/>
                        <circle cx="5" cy="19" r="1" fill="#E0F7FA"/>
                        <circle cx="8" cy="19" r="1" fill="#E0F7FA"/>
                        <circle cx="11" cy="19" r="1" fill="#E0F7FA"/>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-white mt-4">Vetorização</h3>
                <p class="text-center text-cyan-100 mt-2">Convertemos palavras em vetores numéricos através da tokenização e atribuição de IDs para processamento.</p>
            </div>

            <div class="on-scroll-hidden flex flex-col items-center opacity-0 transition-all duration-1000 blur-xs -translate-x-full max-w-xs">
                <div class="w-full max-w-[180px] h-[180px] m-2 rounded-2xl p-6 bg-cyan-700 flex items-center justify-center shadow-lg hover:bg-cyan-600 transition-all">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" stroke="#E0F7FA" stroke-width="2"/>
                        <path d="M12 22V12M12 12L3 7.5M12 12L21 7.5" stroke="#E0F7FA" stroke-width="2"/>
                        <path d="M7.5 4.5L16.5 9.5" stroke="#E0F7FA" stroke-width="2"/>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-white mt-4">Transformação</h3>
                <p class="text-center text-cyan-100 mt-2">Usando modelos Transformer, processamos os dados para capturar contextos complexos e relações entre palavras.</p>
            </div>

            <div class="on-scroll-hidden flex flex-col items-center opacity-0 transition-all duration-1000 blur-xs -translate-x-full max-w-xs">
                <div class="w-full max-w-[180px] h-[180px] m-2 rounded-2xl p-6 bg-cyan-700 flex items-center justify-center shadow-lg hover:bg-cyan-600 transition-all">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#E0F7FA"/>
                        <path d="M2 17L12 22L22 17" stroke="#E0F7FA" stroke-width="2"/>
                        <path d="M2 12L12 17L22 12" stroke="#E0F7FA" stroke-width="2"/>
                        <path d="M12 22V12" stroke="#E0F7FA" stroke-width="2"/>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-white mt-4">Resultado</h3>
                <p class="text-center text-cyan-100 mt-2">Entregamos análises precisas dos sentimentos presentes no texto, classificando-os em positivos, negativos ou neutros.</p>
            </div>
        </div>
        <a href="#comece-agora" class="mt-16 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-full text-lg transition-all shadow-lg hover:shadow-xl">
            Comece agora
        </a>
    </section>
</template>
