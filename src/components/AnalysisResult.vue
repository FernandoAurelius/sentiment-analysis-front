<script lang="ts">
import { defineComponent } from 'vue';
import NavigationButton from './NavigationButton.vue';
import { mapState } from 'vuex';
import type IMessageEvaluation from '@/interfaces/IMessageEvaluation';
import type { IProcessDescription, IPoem } from '@/interfaces/IAnalysisResult';

export default defineComponent({
    name: 'AnalysisResult',
    components: {
        NavigationButton
    },
    data() {
        return {
            activeTab: 0,
            activeSentimentIndex: 0,
            activeView: 'process' as 'process' | 'poem',
            isLoading: false
        };
    },
    computed: {
        ...mapState(['latestAnalysisResult']),

        messages(): IMessageEvaluation[] {
            return this.latestAnalysisResult?.messages || [];
        },

        hasResults(): boolean {
            return this.messages.length > 0;
        },

        currentMessage(): IMessageEvaluation | null {
            return this.messages[this.activeSentimentIndex] || null;
        },

        currentProcessDescription(): IProcessDescription | null {
            return Array.isArray(this.latestAnalysisResult?.processDescription) ?
                this.latestAnalysisResult?.processDescription[this.activeSentimentIndex] || null : null;
        },

        currentPoem(): IPoem | null {
            return Array.isArray(this.latestAnalysisResult?.poem) ?
                this.latestAnalysisResult?.poem[this.activeSentimentIndex] || null : null;
        },

        sentimentColor(): string {
            if (!this.currentMessage) return 'text-white';

            const label = this.currentMessage.evaluation.label.toUpperCase();

            if (label === 'POSITIVE') {
                return 'text-green-400';
            } else if (label === 'NEGATIVE') {
                return 'text-red-400';
            } else {
                return 'text-yellow-300'; // Para NEUTRAL ou outros casos
            }
        },

        sentimentEmoji(): string {
            if (!this.currentMessage) return '😐';

            const label = this.currentMessage.evaluation.label.toUpperCase();

            if (label === 'POSITIVE') {
                return '😄';
            } else if (label === 'NEGATIVE') {
                return '😞';
            } else {
                return '😐'; // Para NEUTRAL ou outros casos
            }
        }
    },
    methods: {
        setActiveIndex(index: number): void {
            this.activeSentimentIndex = index;
        },
        toggleView(view: 'process' | 'poem'): void {
            this.activeView = view;
        },
        getScorePercentage(score: number): number {
            // Garantir que score 1 retorne 100%
            if (score === 1) return 100;

            return Math.round(score * 100);
        },

        getSentimentLabel(label: string): string {
            // Converter o label técnico para um formato mais amigável
            switch (label.toUpperCase()) {
                case 'POSITIVE':
                    return 'Positivo';
                case 'NEGATIVE':
                    return 'Negativo';
                case 'NEUTRAL':
                    return 'Neutro';
                case 'UNDEFINED':
                    return 'Indefinido';
                default:
                    return label;
            }
        }
    }
});
</script>

<template>
    <section class="min-h-screen flex flex-col p-5 box-border">
        <div class="container mx-auto max-w-6xl">
            <h2 class="text-4xl md:text-6xl font-bold text-white text-center mb-10 animate-pulse-subtle">
                Resultados da Análise de Sentimentos
            </h2>

            <div v-if="!hasResults" class="text-center text-white py-10">
                <p class="text-xl mb-4">Nenhuma análise realizada ainda.</p>
                <NavigationButton />
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <!-- Cards das mensagens analisadas -->
                <div v-for="(message, index) in messages" :key="index" @click="setActiveIndex(index)" :class="[
                    'p-6 rounded-2xl cursor-pointer transition-all transform hover:scale-[1.02] overflow-hidden',
                    'border border-indigo-500/30 shadow-lg',
                    activeSentimentIndex === index
                        ? 'bg-indigo-800/40 border-indigo-400'
                        : 'bg-indigo-950/40 hover:bg-indigo-900/40'
                ]">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-lg font-bold text-white truncate">
                            "{{ message.messageText }}"
                        </h3>
                        <span :class="[
                            'text-2xl',
                            message.evaluation.label.toUpperCase() === 'POSITIVE' ? 'text-green-400' :
                                message.evaluation.label.toUpperCase() === 'NEGATIVE' ? 'text-red-400' : 'text-yellow-300'
                        ]">
                            {{ message.evaluation.label.toUpperCase() === 'POSITIVE' ? '😄' :
                                message.evaluation.label.toUpperCase() === 'NEGATIVE' ? '😞' : '😐' }}
                        </span>
                    </div>

                    <div class="w-full bg-gray-900/50 rounded-full h-2.5 mb-1">
                        <div class="h-2.5 rounded-full" :class="[
                            message.evaluation.label.toUpperCase() === 'POSITIVE' ? 'bg-gradient-to-r from-green-500 to-green-300' :
                                message.evaluation.label.toUpperCase() === 'NEGATIVE' ? 'bg-gradient-to-r from-red-500 to-red-300' : 'bg-gradient-to-r from-yellow-500 to-yellow-300'
                        ]" :style="`width: ${getScorePercentage(message.evaluation.score)}%`"></div>
                    </div>
                    <div class="flex justify-between text-xs text-indigo-300">
                        <span>Confiança: {{ getScorePercentage(message.evaluation.score) }}%</span>
                        <span>{{ getSentimentLabel(message.evaluation.label) }}</span>
                    </div>
                </div>
            </div>

            <!-- Conteúdo detalhado da análise -->
            <div v-if="hasResults" class="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6 mb-10 shadow-lg">
                <div class="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
                    <button @click="toggleView('process')" :class="[
                        'px-4 py-2 rounded-lg font-medium transition-all',
                        activeView === 'process'
                            ? 'bg-purple-600 text-white'
                            : 'bg-transparent border border-purple-500/50 text-purple-300 hover:bg-purple-900/30'
                    ]">
                        Processo de Análise
                    </button>
                    <button @click="toggleView('poem')" :class="[
                        'px-4 py-2 rounded-lg font-medium transition-all',
                        activeView === 'poem'
                            ? 'bg-purple-600 text-white'
                            : 'bg-transparent border border-purple-500/50 text-purple-300 hover:bg-purple-900/30'
                    ]">
                        Poema Gerado
                    </button>
                </div>

                <!-- Informações da mensagem atual -->
                <div class="mb-6">
                    <div class="flex items-center gap-3 mb-2">
                        <span :class="['text-3xl', sentimentColor]">{{ sentimentEmoji }}</span>
                        <h3 class="text-2xl text-white font-bold">"{{ currentMessage?.messageText }}"</h3>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-full max-w-xs bg-gray-900/50 rounded-full h-2.5">
                            <div class="h-2.5 rounded-full" :class="[
                                currentMessage?.evaluation.label.toUpperCase() === 'POSITIVE' ? 'bg-gradient-to-r from-green-500 to-green-300' :
                                    currentMessage?.evaluation.label.toUpperCase() === 'NEGATIVE' ? 'bg-gradient-to-r from-red-500 to-red-300' : 'bg-gradient-to-r from-yellow-500 to-yellow-300'
                            ]" :style="`width: ${getScorePercentage(currentMessage?.evaluation.score || 0)}%`"></div>
                        </div>
                        <span class="text-sm text-indigo-300">
                            {{ getScorePercentage(currentMessage?.evaluation.score || 0) }}% de confiança
                        </span>
                        <span class="text-sm font-medium" :class="[sentimentColor]">
                            {{ getSentimentLabel(currentMessage?.evaluation.label || '') }}
                        </span>
                    </div>
                </div>

                <!-- Visualização do processo de análise (formato estruturado JSON) -->
                <div v-if="activeView === 'process' && currentProcessDescription" class="text-indigo-100">
                    <div class="mb-6">
                        <h3
                            class="text-2xl font-bold text-transparent bg-clip-text tracking-tight bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient mb-4">
                            {{ currentProcessDescription.title }}
                        </h3>
                        <p class="text-lg text-indigo-100 mb-6 italic">
                            "{{ currentProcessDescription.summary }}"
                        </p>

                        <div v-for="(step, idx) in currentProcessDescription.steps" :key="idx"
                            class="mb-6 bg-indigo-900/20 p-4 rounded-lg border border-indigo-500/20">
                            <h4 class="text-xl font-bold text-white mb-2">
                                {{ step.step_title }}
                            </h4>
                            <p class="mb-2 text-indigo-100">
                                {{ step.step_content }}
                            </p>
                        </div>

                        <div class="mt-8 p-4 border-t border-indigo-500/30 pt-4">
                            <h4 class="text-xl font-bold text-white mb-2">Conclusão</h4>
                            <p class="text-indigo-100">
                                {{ currentProcessDescription.conclusion }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Visualização do poema (formato estruturado JSON) -->
                <div v-else-if="activeView === 'poem' && currentPoem"
                    class="bg-indigo-900/20 p-6 rounded-lg border border-indigo-500/20">
                    <h3
                        class="text-2xl font-bold text-transparent bg-clip-text tracking-tight bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient mb-3">
                        {{ currentPoem.title }}
                    </h3>
                    <div class="flex flex-wrap justify-center gap-4 mb-6">
                        <span class="px-3 py-1 bg-indigo-800/40 rounded-full text-sm text-indigo-200">
                            Estilo: {{ currentPoem.style }}
                        </span>
                        <span class="px-3 py-1 bg-indigo-800/40 rounded-full text-sm text-indigo-200">
                            Humor: {{ currentPoem.mood }}
                        </span>
                    </div>
                    <div class="text-center">
                        <p v-for="(line, idx) in currentPoem.lines" :key="idx"
                            class="whitespace-pre-wrap text-white mb-1">
                            {{ line }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Botão de navegação -->
            <div class="flex justify-center mt-6">
                <NavigationButton />
            </div>
        </div>
    </section>
</template>
