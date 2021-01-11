import { put, take } from "redux-saga/effects";
import * as mutations from './mutations';
import {v1 as uuid} from 'uuid'; 

export function* taskCreationSaga() {
    while(true) {
        const {groupId} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerId = 'U1';
        const taskId = uuid();
        yield put(mutations.createTask(taskId, groupId, ownerId));
    }
}