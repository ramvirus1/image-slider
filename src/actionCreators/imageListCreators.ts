import { 
    IMAGE_LIST_CONSTANTS
} from '../actionConstants/imageListConstants';

import { ImageItem,Actions } from '../interfaces';

export const fetchImageList = (): Actions => {
    return {
        type : IMAGE_LIST_CONSTANTS.FETCH_IMAGE_LIST
    }
};

export const onImageListSuccess = (response:Array<ImageItem>) : Actions => {
    return {
        type: IMAGE_LIST_CONSTANTS.ON_IMAGE_LIST_SUCCESS,
        payload : response
    }
};

export const omImageListFailure = (response : any): Actions => {
    return {
        type : IMAGE_LIST_CONSTANTS.ON_IMAGE_LIST_FAILURE,
        payload: response
    }
};