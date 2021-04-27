import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function recieveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        }).then((question) => dispatch(addQuestion(question)));
    };
}

function saveAnswer({ id, authedUser, answer }) {
    return {
        type: SAVE_ANSWER,
        id,
        authedUser,
        answer,
    };
}

export function handleSaveQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {

        const { authedUser } = getState();
        
        return saveQuestionAnswer({ authedUser, qid, answer }).then((answer) =>
            dispatch(saveAnswer(answer))
        );
    };
}
