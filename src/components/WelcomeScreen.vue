<script lang="ts">
import { defineComponent } from 'vue';
import NavigationButton from './NavigationButton.vue';

export default defineComponent({
    name: 'WelcomeScreen',
    components: {
        NavigationButton
    },
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
        }, {
            threshold: 0
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
        <div class="animate-pulse-subtle flex justify-center items-center flex-col">
            <h1 class="text-6xl md:text-9xl font-extrabold text-white text-center tracking-tight mb-20">Bem-vindo à
                <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">Sentiment Analysis!</span>
            </h1>
            <p class="text-xl text-purple-100 max-w-2xl text-center mx-auto">Explore o funcionamento interno dos modelos
                de
                processamento de linguagem natural para análise de sentimentos em textos!</p>
        </div>
    </section>
    <section
        class="on-scroll-hidden grid place-items-center align-center h-screen p-5 box-border opacity-0 transition-all duration-1000 blur-xs -translate-x-full">
        <div class="animate-pulse-subtle flex flex-col gap-12">
            <h2 class="text-3xl md:text-5xl font-bold text-white text-center mb-8">Como o processo acontece?</h2>
            <p class="text-lg md:text-xl text-center text-indigo-100 max-w-3xl">
                <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">Nesse projeto</span>, tentamos entender o <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">funcionamento interno</span> dos modelos de <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">processamento de linguagem natural</span>, através da criação de um <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">analisador
                    de sentimentos em textos.</span>
            </p>
            <p class="text-lg md:text-xl text-center text-indigo-100 max-w-3xl">
                De maneira simplificada, um modelo é capaz de <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">classificar textos</span> em positivos,
                negativos ou neutros, com base na <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">polaridade emocional</span> do conteúdo, através de uma série de <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">técnicas da PLN</span>.
            </p>
            <p class="text-lg md:text-xl text-center text-indigo-100 max-w-3xl">
                Abaixo, você pode entender o <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">pipeline de processamento</span> que acontece <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">por trás dos panos</span> para que o modelo
                seja capaz de realizar essa tarefa.
            </p>
        </div>
    </section>
    <section
        class="on-scroll-hidden grid place-items-center align-center min-h-screen p-3 md:p-5 box-border opacity-0 transition-all duration-1000 blur-xs -translate-x-full">
        <div class="relative inline-block mb-6 md:mb-10 w-full text-center">
            <h2
                class="text-2xl md:text-5xl font-bold text-white text-center overflow-hidden whitespace-nowrap my-0 mx-auto tracking-tight border-r-[0.15em] border-solid [border-color:transparent] [animation:var(--animate-typing-text),var(--animate-typing-cursor)]">
                O pipeline de processamento...
            </h2>
        </div>
        <div class="w-full flex flex-wrap justify-center gap-4 md:gap-8 px-2">
            <div
                class="on-scroll-hidden flex flex-col items-center opacity-0 transition-all duration-1000 blur-xs -translate-x-full w-full sm:w-[45%] md:max-w-xs">
                <div
                    class="w-full max-w-[80px] md:max-w-[100px] h-[80px] md:h-[100px] m-2 rounded-2xl p-4 md:p-6 bg-purple-600 flex items-center justify-center shadow-lg hover:bg-purple-500 transition-all shadow-indigo-900/30 animate-float">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#E0F7FA" />
                        <circle cx="5" cy="5" r="1" fill="#E0F7FA" />
                        <circle cx="8" cy="5" r="1" fill="#E0F7FA" />
                        <circle cx="11" cy="5" r="1" fill="#E0F7FA" />
                        <circle cx="5" cy="12" r="1" fill="#E0F7FA" />
                        <circle cx="8" cy="12" r="1" fill="#E0F7FA" />
                        <circle cx="11" cy="12" r="1" fill="#E0F7FA" />
                        <circle cx="5" cy="19" r="1" fill="#E0F7FA" />
                        <circle cx="8" cy="19" r="1" fill="#E0F7FA" />
                        <circle cx="11" cy="19" r="1" fill="#E0F7FA" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-white mt-4">Tokenização</h3>
                <p class="text-center text-fuchsia-100 mt-2">O texto é dividido em <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">tokens</span> (palavras ou subpalavras) e
                    convertido para <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">IDs numéricos</span> que o modelo pode processar, incluindo tokens especiais como <span
                        class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">[CLS</span>] e <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">[SEP</span>]..</p>
            </div>

            <div
                class="on-scroll-hidden flex flex-col items-center opacity-0 transition-all duration-1000 blur-xs -translate-x-full w-full sm:w-[45%] md:max-w-xs">
                <div
                    class="w-full max-w-[80px] md:max-w-[100px] h-[80px] md:h-[100px] m-2 rounded-2xl p-4 md:p-6 bg-purple-600 flex items-center justify-center shadow-lg hover:bg-purple-500 transition-all shadow-indigo-900/30 animate-float">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                            fill="#E0F7FA" />
                        <path
                            d="M9 8C9.55228 8 10 7.55228 10 7C10 6.44772 9.55228 6 9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8Z"
                            fill="#E0F7FA" />
                        <path
                            d="M15 8C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6C14.4477 6 14 6.44772 14 7C14 7.55228 14.4477 8 15 8Z"
                            fill="#E0F7FA" />
                        <path d="M12 18C15.31 18 18 15.31 18 12H6C6 15.31 8.69 18 12 18Z" fill="#E0F7FA" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-white mt-4">Embeddings</h3>
                <p class="text-center text-indigo-100 mt-2">Os IDs são transformados em <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">vetores densos</span> de embedding que capturam <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">características semânticas</span> de cada token no <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">contexto da frase</span>.</p>
            </div>

            <div
                class="on-scroll-hidden flex flex-col items-center opacity-0 transition-all duration-1000 blur-xs -translate-x-full w-full sm:w-[45%] md:max-w-xs">
                <div
                    class="w-full max-w-[80px] md:max-w-[100px] h-[80px] md:h-[100px] m-2 rounded-2xl p-4 md:p-6 bg-purple-600 flex items-center justify-center shadow-lg hover:bg-purple-500 transition-all shadow-indigo-900/30 animate-float">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"
                            stroke="#E0F7FA" stroke-width="2" />
                        <path d="M12 22V12M12 12L3 7.5M12 12L21 7.5" stroke="#E0F7FA" stroke-width="2" />
                        <path d="M7.5 4.5L16.5 9.5" stroke="#E0F7FA" stroke-width="2" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-white mt-4">Self-Attention</h3>
                <p class="text-center text-indigo-100 mt-2">O mecanismo de <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">self-attention</span> permite que cada token <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">"observe"</span> todos os outros tokens da sequência, capturando <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">relações contextuais</span> complexas entre as palavras.</p>
            </div>

            <div
                class="on-scroll-hidden flex flex-col items-center opacity-0 transition-all duration-1000 blur-xs -translate-x-full w-full sm:w-[45%] md:max-w-xs">
                <div
                    class="w-full max-w-[80px] md:max-w-[100px] h-[80px] md:h-[100px] m-2 rounded-2xl p-4 md:p-6 bg-purple-600 flex items-center justify-center shadow-lg hover:bg-purple-500 transition-all shadow-indigo-900/30 animate-float">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#E0F7FA" />
                        <path d="M2 17L12 22L22 17" stroke="#E0F7FA" stroke-width="2" />
                        <path d="M2 12L12 17L22 12" stroke="#E0F7FA" stroke-width="2" />
                        <path d="M12 22V12" stroke="#E0F7FA" stroke-width="2" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-white mt-4">Classificação</h3>
                <p class="text-center text-indigo-100 mt-2">Uma <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">camada de classificação</span> transforma as representações do modelo em <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">logits</span>, convertidos em probabilidades via <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">softmax</span> para determinar a polaridade do sentimento.</p>
            </div>
        </div>
    </section>
    <section
        class="on-scroll-hidden grid place-items-center align-center min-h-screen p-4 md:p-5 box-border opacity-0 transition-all duration-1000 blur-xs -translate-x-full">
        <div class="flex flex-col items-center justify-center">
            <h2
                class="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 md:mb-12 lg:mb-20 mx-auto tracking-tight">
                Pronto para começar?
            </h2>
            <div class="w-full flex justify-center">
                <NavigationButton />
            </div>
        </div>
    </section>
</template>
