import State, { ComponentName } from '@/interfaces/State'
import IMessageEvaluation from '@/interfaces/IMessageEvaluation'
import { createStore } from 'vuex'
import { IPoem, IProcessDescription } from '@/interfaces/IAnalysisResult'

export default createStore<State>({
  state: {
    latestAnalysisResult: {
      messages: [] as IMessageEvaluation[],
      processDescription: [] as IProcessDescription[],
      poem: [] as IPoem[],
    },
    currentComponent: 'welcome' as ComponentName,
  },
  mutations: {
    setLatestAnalysisResult(state, analysisResult) {
      state.latestAnalysisResult = analysisResult
    },
    setCurrentComponent(state, componentName: ComponentName) {
      state.currentComponent = componentName
    },
  },
  actions: {
    setLatestAnalysisResult(context, analysisResult) {
      context.commit('setLatestAnalysisResult', analysisResult)
    },
    navigateTo(context, componentName: ComponentName) {
      context.commit('setCurrentComponent', componentName)
    },
  },
})
