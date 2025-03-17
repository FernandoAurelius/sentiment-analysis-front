import IAnalysisResult from './IAnalysisResult'

export type ComponentName = 'welcome' | 'form' | 'result'

export default interface State {
  latestAnalysisResult: IAnalysisResult
  currentComponent: ComponentName
}
