import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { authSaga } from './Auth.Saga'

export function* RootSaga() {
    yield all ([
        authSaga()
    ])
}