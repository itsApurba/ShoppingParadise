import * as types from './ActionTypes'
const initalData = {
    DotKeyProducts : [],
    DotKeySingleProduct : [ ],
    LorealProducts : [ ],
    LorealSingleProduct : [ ],
    EsteeProducts : [ ],
    EsteeSingleProduct : [ ],
    isLoading : false,
    isError : false
};

export default function MyReducer(state = initalData, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_SKIN_PAGE_DOTKEY_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.GET_SKIN_PAGE_DOTKEY_SUCCESS: {
            return {
                ...state,
                DotKeyProducts: payload,
                isLoading: false,
                isError: false
            }
        }

        case types.GET_SKIN_PAGE_DOTKEY_FAILURE: {
            return {
                ...state,
                DotKeyProducts: [],
                isLoading: false,
                isError: true
            }
        }

        case types.GET_DOTKEY_SINGLE_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.GET_DOTKEY_SINGLE_SUCCESS: {
            return {
                ...state,
                DotKeySingleProduct: payload,
                isLoading: false,
                isError: false
            }
        }

        case types.GET_DOTKEY_SINGLE_FAILURE: {
            return {
                ...state,
                DotKeySingleProduct: [],
                isLoading: false,
                isError: true
            }
        }

        case types.SKIN_LOREAL_PAGE_GET_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.SKIN_LOREAL_PAGE_GET_SUCCESS: {
            return {
                ...state,
                LorealProducts: payload,
                isLoading: false,
                isError: false
            }
        }

        case types.SKIN_LOREAL_PAGE_GET_FAILURE: {
            return {
                ...state,
                LorealProducts: [],
                isLoading: false,
                isError: true
            }
        }

        case types.LOREAL_GET_SINGLE_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.LOREAL_GET_SINGLE_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                LorealSingleProduct: payload,
                isError: false
            }
        }

        case types.LOREAL_GET_SINGLE_DATA_FAILURE: {
            return {
                ...state,
                LorealSingleProduct: [],
                isLoading: false,
                isError: true
            }
        }

        case types.GET_ESTEE_PAGE_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.GET_ESTEE_PAGE_DATA_SUCCESS: {
            return {
                ...state,
                EsteeProducts: payload,
                isLoading: false,
                isError: false
            }
        }

        case types.GET_ESTEE_PAGE_DATA_FAILURE: {
            return {
                ...state,
                EsteeProducts: [],
                isLoading: false,
                isError: true
            }
        };

        case types.GET_ESTEE_SINGLE_REQUEST : {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.GET_SINGAL_HAIR_DATA_SUCCESS: {
            return {
                ...state,
                HairSingleProduct: payload,
                isLoading: false,
                isError: false
            }
        }

        case types.GET_SINGAL_HAIR_DATA_FAILURE: {
            return {
                ...state,
                HairSingleProduct: [],
                isLoading: false,
                isError: true
            }
        }
        default :
        return state 
    }
}