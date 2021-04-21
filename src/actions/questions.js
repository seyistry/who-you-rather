import { saveQuestion, saveQuestionAnswer } from "../utils/api";


export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";


export function recieveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}


