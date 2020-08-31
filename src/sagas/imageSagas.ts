import { call, put, takeEvery } from "redux-saga/effects";

import { 
    onImageListSuccess,
    omImageListFailure
} from '../actionCreators/imageListCreators';

import { IMAGE_LIST_CONSTANTS } from '../actionConstants/imageListConstants';

import { imageListFetcher, ressponseBeautifier } from "../constants";

export default function* fetchImageList(){
    try {
        const fetchCallResponse = yield call(imageListFetcher);
        const responseJSON = yield call(ressponseBeautifier, fetchCallResponse);
        yield put(onImageListSuccess(responseJSON));
      } catch (error) {
        yield put(omImageListFailure(error));
      }
}

export function* watchImageAPIFetcher() {
    yield takeEvery(IMAGE_LIST_CONSTANTS.FETCH_IMAGE_LIST, fetchImageList);
}
