import { IMAGE_LIST_CONSTANTS } from '../actionConstants/imageListConstants';
import { Actions } from '../interfaces';

const initialState = {
    imageList : []
};

export function imageListReducer(state = initialState, action : Actions) {
    switch (action.type) {
      case IMAGE_LIST_CONSTANTS.FETCH_IMAGE_LIST:
        return { ...state, imageList:[]};
      case IMAGE_LIST_CONSTANTS.ON_IMAGE_LIST_SUCCESS:
        return { ...state, imageList: action.payload }
      case IMAGE_LIST_CONSTANTS.ON_IMAGE_LIST_FAILURE:
        return state;
      default:
        return state
    }
};