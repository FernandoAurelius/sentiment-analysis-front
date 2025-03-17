<script lang="ts">
import { defineComponent } from 'vue';
import NavigationButton from './NavigationButton.vue';
import { mapActions } from 'vuex';
import api from '@/api';
import type { IProcessDescription, IPoem } from '@/interfaces/IAnalysisResult';

export default defineComponent({
    name: 'AnalysisRequest',
    components: {
        NavigationButton
    },
    data() {
        return {
            messages: ['', '', ''],
            isSubmitting: false,
            errorMessage: ''
        };
    },
    methods: {
        ...mapActions(['setLatestAnalysisResult', 'navigateTo']),
        async submitAnalysis() {
            // Validação básica
            if (this.messages.some(msg => msg.trim() === '')) {
                this.errorMessage = 'Por favor, preencha as três frases para análise.';
                return;
            }

            try {
                this.isSubmitting = true;
                this.errorMessage = '';

                // Consolar para debug
                console.log('Enviando mensagens para análise:', this.messages);

                // Formatar os dados conforme esperado pelo backend
                const formattedMessages = this.messages.map(message => ({ message }));

                // Enviar no formato que o backend espera (usando o proxy)
                const response = await api.post('/analyze', formattedMessages);

                console.log('Resposta da API:', response.data);

                // Se a resposta estiver dentro de um objeto 'analysis', extrair
                const analysisData = response.data.analysis || response.data;

                // Processar as descrições do processo - converter de string para objeto JSON
                const processDescriptions: IProcessDescription[] = [];
                for (const procDesc of analysisData.process_description) {
                    try {
                        // Limpar os delimitadores de markdown antes do parsing
                        const cleanedDesc = procDesc.replace(/```json\n?/g, "").replace(/```\n?/g, "");
                        // Tenta fazer parse do JSON limpo
                        const parsedDesc = typeof cleanedDesc === 'string' ? JSON.parse(cleanedDesc) : cleanedDesc;
                        processDescriptions.push(parsedDesc);
                    } catch (e) {
                        // Fallback para texto puro se não for JSON válido
                        processDescriptions.push({
                            title: "Análise de Sentimentos",
                            summary: "Análise não estruturada",
                            steps: [{
                                step_title: "Descrição",
                                step_content: procDesc
                            }],
                            conclusion: ""
                        });
                    }
                }

                // Processar os poemas - converter de string para objeto JSON
                const poems: IPoem[] = [];
                for (const poemText of analysisData.poem) {
                    try {
                        // Tenta fazer parse do JSON
                        const cleanedDesc = poemText.replace(/```json\n?/g, "").replace(/```\n?/g, "");
                        const parsedPoem = typeof poemText === 'string' ? JSON.parse(cleanedDesc) : cleanedDesc;
                        poems.push(parsedPoem);
                    } catch (e) {
                        // Fallback para texto puro se não for JSON válido
                        poems.push({
                            title: "Poema",
                            style: "Livre",
                            mood: "Variado",
                            lines: poemText.split('\n')
                        });
                    }
                }

                // Mapear a resposta para o formato que nosso front-end espera
                const formattedResult = {
                    messages: analysisData.message_list.map(item => ({
                        messageText: item.message_text,
                        evaluation: {
                            label: item.label,
                            score: item.score
                        }
                    })),
                    processDescription: processDescriptions,
                    poem: poems
                };

                this.setLatestAnalysisResult(formattedResult);
                this.navigateTo('result');
            } catch (error) {
                console.error('Erro ao enviar para a API:', error);
                this.errorMessage = 'Ocorreu um erro ao analisar suas frases. Verifique se o servidor backend está rodando corretamente.';
            } finally {
                this.isSubmitting = false;
            }
        }
    }
});
</script>

<template>
    <section class="min-h-screen grid place-items-center p-5 box-border">
        <div class="max-w-3xl w-full">
            <div>
                <h2 class="text-4xl md:text-6xl font-bold text-white text-center mb-10">Análise de Sentimentos</h2>
                <p class="text-lg text-purple-100 mb-8 text-center animate-pulse-subtle">
                    Digite três frases abaixo para que possamos analisar os sentimentos expressos nelas.
                    O modelo irá identificar se cada frase tem sentimento <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
                bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
                bg-[length:200%_auto] animate-gradient">positivo</span>, <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
                bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
                bg-[length:200%_auto] animate-gradient">negativo</span> ou <span class="font-extrabold text-transparent bg-clip-text tracking-tight 
                bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]
                bg-[length:200%_auto] animate-gradient">neutro</span>.
                </p>

            </div>
            <form @submit.prevent="submitAnalysis" class="space-y-6">
                <div v-for="(message, index) in messages" :key="index" class="space-y-2">
                    <label :for="`message-${index}`" class="block text-indigo-100 font-medium">
                        Frase {{ index + 1 }}:
                    </label>
                    <input :id="`message-${index}`" v-model="messages[index]" type="text"
                        :placeholder="`Digite a frase ${index + 1}...`" class="w-full px-4 py-3 rounded-md bg-indigo-950/50 border border-fuchsia-500/30 
                        text-white placeholder:text-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500
                        transition-all transform hover:border-fuchsia-500/70" :disabled="isSubmitting" />
                </div>

                <div v-if="errorMessage" class="text-red-400 text-center py-2">
                    {{ errorMessage }}
                </div>

                <div class="flex justify-center pt-4">
                    <button type="submit"
                        class="group/follow flex items-center gap-2 rounded-md bg-transparent outline-4 outline-indigo-800 px-4 py-2 text-white mx-auto shadow-lg 
                        transition-all hover:-translate-y-0.5 active:-translate-y-0 active:outline-indigo-600 hover:outline-indigo-600 active:shadow-inner"
                        :disabled="isSubmitting">
                        <span v-if="isSubmitting" class="inline-block animate-spin mr-2">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </span>
                        Analisar Sentimentos
                        <svg v-if="!isSubmitting"
                            class="transition-transform group-hover/follow:-rotate-45 group-active/follow:rotate-0 size-6"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>
