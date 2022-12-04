import { all, takeEvery, put, fork, call } from 'redux-saga/effects';

import {
	AUTH_TOKEN,
	SIGNIN,
	SIGNOUT,
	SIGNUP,
	SIGNIN_WITH_GOOGLE,
	SIGNIN_WITH_FACEBOOK
} from '../constants/Auth';
import {
	showAuthMessage,
	authenticated,
	signOutSuccess,
	signUpSuccess,
	signInWithGoogleAuthenticated,
	signInWithFacebookAuthenticated,
	redirect
} from "../actions/Auth";

import JwtAuthService from 'services/JwtAuthService';
import { AUTH_PREFIX_PATH } from 'configs/AppConfig';
export function* signInWithFBEmail() {
	yield takeEvery(SIGNIN, function* ({ payload }) {
		const { email, password } = payload;
		try {
			const user = yield call(JwtAuthService.login, payload);
			if (user.message) {
				yield put(showAuthMessage(user.message));
			}
			else if (user.active == false) {
				yield put(redirect(`${AUTH_PREFIX_PATH}/error-2`));
			}
			else {
				localStorage.setItem(AUTH_TOKEN, user.token);
				yield put(authenticated(user.token));
			}
		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}

export function* signOut() {
	yield takeEvery(SIGNOUT, function* () {
		try {
			localStorage.removeItem(AUTH_TOKEN);
			yield put(signOutSuccess());

		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}

export function* signUpWithFBEmail() {
	yield takeEvery(SIGNUP, function* ({ payload }) {
		const { email, password } = payload;
		try {
			const user = yield call(JwtAuthService.signUp, payload);
			if (user.message) {
				yield put(showAuthMessage(user.message));
			} else {
				localStorage.setItem(AUTH_TOKEN, user.user.uid);
				yield put(signUpSuccess(user.user.uid));
			}
		} catch (error) {
			yield put(showAuthMessage(error));
		}
	}
	);
}

export function* signInWithFBGoogle() {
	yield takeEvery(SIGNIN_WITH_GOOGLE, function* () {
		try {
			const user = yield call("FirebaseService.signInGoogleRequest");
			if (user.message) {
				yield put(showAuthMessage(user.message));
			} else {
				localStorage.setItem(AUTH_TOKEN, user.user.uid);
				yield put(signInWithGoogleAuthenticated(user.user.uid));
			}
		} catch (error) {
			yield put(showAuthMessage(error));
		}
	});
}

export function* signInWithFacebook() {
	yield takeEvery(SIGNIN_WITH_FACEBOOK, function* () {
		try {
			const user = yield call("FirebaseService.signInFacebookRequest");
			if (user.message) {
				yield put(showAuthMessage(user.message));
			} else {
				localStorage.setItem(AUTH_TOKEN, user.user.uid);
				yield put(signInWithFacebookAuthenticated(user.user.uid));
			}
		} catch (error) {
			yield put(showAuthMessage(error));
		}
	});
}

export default function* rootSaga() {
	yield all([
		fork(signInWithFBEmail),
		fork(signOut),
		fork(signUpWithFBEmail),
		fork(signInWithFBGoogle),
		fork(signInWithFacebook)
	]);
}
