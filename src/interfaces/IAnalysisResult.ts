import IMessageEvaluation from './IMessageEvaluation.js'

export interface IProcessStep {
  step_title: string
  step_content: string
}

export interface IProcessDescription {
  title: string
  summary: string
  steps: IProcessStep[]
  conclusion: string
}

export interface IPoem {
  title: string
  style: string
  mood: string
  lines: string[]
}

export default interface IAnalysisResult {
  messages: IMessageEvaluation[]
  processDescription: IProcessDescription[]
  poem: IPoem[]
}
