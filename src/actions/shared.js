import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { recieveQuestions } from "../actions/questions";
import { setAuthedUser } from "../actions/authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleIntialData() {
    return (dispatch) => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(receiveUsers(users));
            dispatch(recieveQuestions(questions));
            dispatch(setAuthedUser(AUTHED_ID));
        });
    };
}
