<script lang="ts">
import { defineComponent } from 'vue';
import NavigationButton from './NavigationButton.vue';

export default defineComponent({
    name: 'AboutPage',
    components: {
        NavigationButton
    },
    mounted() {
        // Efeito de animação de entrada dos elementos
        const hiddenElements = document.querySelectorAll<HTMLElement>('.about-hidden');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("about-hidden", "opacity-0", "blur-xs", "-translate-y-10");
                    entry.target.classList.add("about-show", "opacity-100", "blur-0", "translate-y-0");
                }
            });
        }, {
            threshold: 0.1
        });

        hiddenElements.forEach((element, i) => {
            element.style.transitionDelay = i * 150 + "ms";
            observer.observe(element);
        });
    }
});
</script>

<template>
    <section class="min-h-screen flex flex-col p-5 box-border">
        <div class="container mx-auto max-w-5xl py-10">
            <!-- Título da página -->
            <div class="about-hidden opacity-0 transition-all duration-1000 blur-xs -translate-y-10 mb-16">
                <h1 class="text-4xl md:text-6xl font-bold text-white text-center mb-6">
                    Sobre o Projeto
                </h1>
                <p class="text-lg text-center text-indigo-100 max-w-3xl mx-auto">
                    Um projeto educacional sobre processamento de linguagem natural e análise de sentimentos
                </p>
            </div>

            <!-- Visão geral -->
            <div class="about-hidden opacity-0 transition-all duration-1000 blur-xs -translate-y-10 mb-16">
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
                    <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">Visão Geral</span>
                </h2>
                <div class="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6 shadow-lg">
                    <p class="text-indigo-100 mb-4">
                        Este projeto foi desenvolvido como parte da matéria de Qualificação Profissional do Curso
                        Técnico em Informática para Internet no CEMIC. O objetivo principal é apresentar, de maneira
                        dinâmica e interativa, o processo de análise de linguagem natural (PLN) aplicado à análise de
                        sentimentos em textos.
                    </p>
                    <p class="text-indigo-100">
                        Através de uma interface amigável, o usuário pode submeter frases para análise e visualizar
                        tanto os resultados quanto uma explicação detalhada do processo de análise, além de receber um
                        poema gerado por IA baseado no sentimento detectado.
                    </p>
                </div>
            </div>

            <!-- Tecnologias -->
            <div class="about-hidden opacity-0 transition-all duration-1000 blur-xs -translate-y-10 mb-16">
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
                    <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">Tecnologias Utilizadas</span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Front-end -->
                    <div class="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6 shadow-lg">
                        <h3 class="text-xl font-bold text-white mb-4 flex items-center">
                            <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#E0F7FA" />
                                <path d="M2 17L12 22L22 17" stroke="#E0F7FA" stroke-width="2" />
                                <path d="M2 12L12 17L22 12" stroke="#E0F7FA" stroke-width="2" />
                            </svg>
                            Front-end
                        </h3>
                        <ul class="space-y-2 text-indigo-100">
                            <li class="flex items-center">
                                <span
                                    class="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs font-semibold mr-2">Vue.js</span>
                                Framework JavaScript progressivo para construção de interfaces
                            </li>
                            <li class="flex items-center">
                                <span
                                    class="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs font-semibold mr-2">TypeScript</span>
                                Superset tipado de JavaScript para desenvolvimento robusto
                            </li>
                            <li class="flex items-center">
                                <span
                                    class="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs font-semibold mr-2">TailwindCSS</span>
                                Framework CSS utilitário para design rápido e responsivo
                            </li>
                            <li class="flex items-center">
                                <span
                                    class="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs font-semibold mr-2">Vuex</span>
                                Gerenciamento de estado centralizado para Vue.js
                            </li>
                            <li class="flex items-center">
                                <span
                                    class="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs font-semibold mr-2">Axios</span>
                                Cliente HTTP baseado em promises para requisições API
                            </li>
                        </ul>
                    </div>

                    <!-- Back-end -->
                    <div class="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6 shadow-lg">
                        <h3 class="text-xl font-bold text-white mb-4 flex items-center">
                            <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
                                    stroke="#E0F7FA" stroke-width="2" />
                                <path d="M4 8H7" stroke="#E0F7FA" stroke-width="2" stroke-linecap="round" />
                                <path d="M4 12H10" stroke="#E0F7FA" stroke-width="2" stroke-linecap="round" />
                                <path d="M4 16H7" stroke="#E0F7FA" stroke-width="2" stroke-linecap="round" />
                                <path d="M12 16H20" stroke="#E0F7FA" stroke-width="2" stroke-linecap="round" />
                                <path d="M12 12H20" stroke="#E0F7FA" stroke-width="2" stroke-linecap="round" />
                                <path d="M12 8H20" stroke="#E0F7FA" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            Back-end
                        </h3>
                        <ul class="space-y-2 text-indigo-100">
                            <li class="flex items-center">
                                <span
                                    class="bg-green-500/20 text-green-300 px-2 py-1 rounded-md text-xs font-semibold mr-2">FastAPI</span>
                                Framework web Python de alto desempenho
                            </li>
                            <li class="flex items-center">
                                <span
                                    class="bg-green-500/20 text-green-300 px-2 py-1 rounded-md text-xs font-semibold mr-2">Redis</span>
                                Banco de dados em memória para caching de resultados
                            </li>
                            <li class="flex items-center">
                                <span
                                    class="bg-green-500/20 text-green-300 px-2 py-1 rounded-md text-xs font-semibold mr-2">NLP
                                    Cloud API</span>
                                Serviço para análise de sentimentos em textos
                            </li>
                            <li class="flex items-center">
                                <span
                                    class="bg-green-500/20 text-green-300 px-2 py-1 rounded-md text-xs font-semibold mr-2">Gemini
                                    API</span>
                                Modelo de linguagem para geração criativa de poemas e explicações
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Como funciona -->
            <div class="about-hidden opacity-0 transition-all duration-1000 blur-xs -translate-y-10 mb-16">
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
                    <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">Como Funciona</span>
                </h2>
                <div class="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6 shadow-lg">
                    <ol class="space-y-6 text-indigo-100 list-decimal list-inside">
                        <li class="pl-2">
                            <span class="font-bold text-white">Envio de Texto:</span> O usuário insere até três frases
                            para análise através da interface.
                        </li>
                        <li class="pl-2">
                            <span class="font-bold text-white">Análise de Sentimentos:</span> O backend processa as
                            frases usando a API NLP Cloud, que utiliza modelos de linguagem pré-treinados para
                            determinar se o sentimento é positivo, negativo ou neutro.
                        </li>
                        <li class="pl-2">
                            <span class="font-bold text-white">Cache Redis:</span> Os resultados são armazenados em
                            cache para otimizar consultas repetidas.
                        </li>
                        <li class="pl-2">
                            <span class="font-bold text-white">Explicação do Processo:</span> A API Gemini é usada para
                            gerar uma explicação detalhada do processo de análise, tornando transparente o funcionamento
                            do modelo.
                        </li>
                        <li class="pl-2">
                            <span class="font-bold text-white">Geração de Poema:</span> Com base no sentimento
                            detectado, a API Gemini cria um poema único que reflete o tom emocional da mensagem
                            analisada.
                        </li>
                        <li class="pl-2">
                            <span class="font-bold text-white">Visualização de Resultados:</span> O frontend apresenta
                            os resultados de forma interativa, permitindo que o usuário alterne entre as diferentes
                            análises e visualizações.
                        </li>
                    </ol>
                </div>
            </div>

            <!-- Equipe -->
            <div class="about-hidden opacity-0 transition-all duration-1000 blur-xs -translate-y-10 mb-16">
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
                    <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">Equipe</span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6 shadow-lg">
                        <div class="flex items-center space-x-4 mb-4">
                            <div
                                class="flex-shrink-0 w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center text-3xl text-indigo-100">
                                F
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-white">Miguel Fernando</h3>
                                <a href="https://github.com/FernandoAurelius" target="_blank"
                                    class="text-indigo-300 hover:text-white flex items-center gap-1 transition-colors text-sm">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>github.com/FernandoAurelius</span>
                                </a>
                            </div>
                        </div>
                        <p class="text-indigo-100">
                            Responsável pelo desenvolvimento do front-end e colaboração no back-end. Criou a interface
                            interativa e a arquitetura de comunicação entre os componentes.
                        </p>
                    </div>

                    <div class="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6 shadow-lg">
                        <div class="flex items-center space-x-4 mb-4">
                            <div
                                class="flex-shrink-0 w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center text-3xl text-indigo-100">
                                C
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-white">Carlos Eduardo</h3>
                                <a href="https://github.com/carloseduardofalmada" target="_blank"
                                    class="text-indigo-300 hover:text-white flex items-center gap-1 transition-colors text-sm">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>github.com/carloseduardofalmada</span>
                                </a>
                            </div>
                        </div>
                        <p class="text-indigo-100">
                            Liderou o desenvolvimento do back-end, implementando a integração com as APIs NLP Cloud e
                            Gemini, além do sistema de cache com Redis para otimização de performance.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Detalhes Técnicos do Back-end -->
            <div class="about-hidden opacity-0 transition-all duration-1000 blur-xs -translate-y-10 mb-16">
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
                    <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
            bg-[length:200%_auto]
            animate-gradient">Detalhes Técnicos do Back-end</span>
                </h2>
                <div class="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6 shadow-lg">
                    <p class="text-indigo-100 mb-4">
                        O back-end do projeto foi desenvolvido utilizando FastAPI, um framework moderno e de alto
                        desempenho para construção de APIs com Python. A escolha dessa tecnologia permitiu a criação de
                        um serviço rápido, com documentação automática e validação de dados.
                    </p>

                    <h3 class="text-xl font-bold text-white mb-3 mt-6">Integração com APIs Externas</h3>
                    <ul class="space-y-4 text-indigo-100">
                        <li class="bg-indigo-900/20 p-4 rounded-lg">
                            <span class="font-bold text-white block mb-1">API NLP Cloud</span>
                            Utilizamos o endpoint de análise de sentimentos da NLP Cloud, que é baseado em modelos
                            avançados de processamento de linguagem natural como o DistilBERT. Essa API nos retorna uma
                            classificação (positivo, negativo ou neutro) para cada texto submetido, juntamente com um
                            score de confiança.
                        </li>
                        <li class="bg-indigo-900/20 p-4 rounded-lg">
                            <span class="font-bold text-white block mb-1">API Gemini</span>
                            Para enriquecer a experiência, integramos a API Gemini do Google para duas finalidades:
                            <ul class="list-disc list-inside pl-4 mt-2 space-y-1">
                                <li>Geração de explicações detalhadas sobre o processo de análise, tornando transparente
                                    o funcionamento interno do modelo</li>
                                <li>Criação de poemas baseados no sentimento detectado, adicionando um elemento criativo
                                    à experiência</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 class="text-xl font-bold text-white mb-3 mt-6">Sistema de Cache</h3>
                    <p class="text-indigo-100 mb-4">
                        Implementamos um sistema de cache utilizando Redis para otimizar o desempenho e reduzir chamadas
                        desnecessárias às APIs externas:
                    </p>
                    <ul class="space-y-2 text-indigo-100 pl-4">
                        <li class="list-disc list-inside">Os resultados das análises são armazenados em cache por um
                            período definido</li>
                        <li class="list-disc list-inside">Consultas idênticas retornam resultados do cache ao invés de
                            realizar novas chamadas às APIs</li>
                        <li class="list-disc list-inside">Isso reduz custos de API e melhora significativamente o tempo
                            de resposta para consultas repetidas</li>
                    </ul>

                    <h3 class="text-xl font-bold text-white mb-3 mt-6">Pipeline de Processamento</h3>
                    <p class="text-indigo-100">
                        Quando o usuário submete textos para análise, o seguinte pipeline de processamento é executado
                        no back-end:
                    </p>
                    <ol class="space-y-2 text-indigo-100 pl-4 mt-2">
                        <li class="list-decimal list-inside">Validação e preparação dos dados de entrada</li>
                        <li class="list-decimal list-inside">Verificação de cache para resultados existentes</li>
                        <li class="list-decimal list-inside">Se não estiver em cache, envio para API NLP Cloud para
                            análise de sentimento</li>
                        <li class="list-decimal list-inside">Processamento do resultado e envio para API Gemini para
                            geração da explicação detalhada</li>
                        <li class="list-decimal list-inside">Envio para API Gemini para geração do poema baseado no
                            sentimento</li>
                        <li class="list-decimal list-inside">Armazenamento do resultado completo em cache</li>
                        <li class="list-decimal list-inside">Retorno dos dados estruturados para o front-end</li>
                    </ol>
                </div>
            </div>

            <!-- Botão de navegação -->
            <div
                class="about-hidden opacity-0 transition-all duration-1000 blur-xs -translate-y-10 flex justify-center mt-12">
                <NavigationButton />
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-hidden {
    transition: all 1s;
}

.about-show {
    transition: all 1s;
}
</style>
