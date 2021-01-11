import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { defaultState } from '../../server/defaultState';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas.mock';
import * as mutations from './mutations';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    // function reducer(state = defaultState, action) {
    //     return state;
    // },
    combineReducers({
        tasks(tasks = defaultState.tasks, action) {
            switch(action.type) {
                case mutations.CREATE_TASK:
                    return [...tasks, {
                        id: action.taskID,
                        name: "New Task",
                        group: action.groupID,
                        owner: action.ownerID,
                        isCompleted: false
                    }];
                case mutations.SET_TASK_COMPLETE:
                    return tasks.map(task => {
                        return (task.id === action.taskID) ? {...task, isComplete: action.isComplete} : task;
                    })
                case mutations.SET_TASK_NAME:
                    return tasks.map(task => {
                        return (task.id === action.taskID) ? {...task, name: action.name} : task;
                    })
                case mutations.SET_TASK_GROUP:
                    return tasks.map(task => {
                        return (task.id === action.taskID) ? {...task, group: action.groupID} : task;
                    })
            }
            return tasks;
        },
        groups(groups = defaultState.groups, action) {
            return groups;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for(let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}