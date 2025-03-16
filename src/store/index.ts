import State from "@/interfaces/State";
import IMessageEvaluation from "@/interfaces/IMessageEvaluation";
import { createStore } from "vuex";

export default createStore<State>({
    state: {
        latestAnalysisResult: {
            messages: [] as IMessageEvaluation[],
            processDescription: "",
            poem: ""
        }
    },
    mutations: {
        setLatestAnalysisResult(state, analysisResult) {
            state.latestAnalysisResult = analysisResult;
        }
    },
    actions: {
        setLatestAnalysisResult(context, analysisResult) {
            context.commit("setLatestAnalysisResult", analysisResult);
        }
    }
});
