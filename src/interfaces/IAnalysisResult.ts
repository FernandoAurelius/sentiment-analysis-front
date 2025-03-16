import IMessageEvaluation from "./IMessageEvaluation.js";

export default interface IAnalysisResult {
    messages: IMessageEvaluation[];
    processDescription: string;
    poem: string;
}
