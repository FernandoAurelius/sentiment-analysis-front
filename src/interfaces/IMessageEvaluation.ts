import ISentimentEvaluation from './ISentimentEvaluation';

export default interface IMessageEvaluation {
    messageText: string;
    evaluation: ISentimentEvaluation;
}
