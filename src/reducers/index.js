const initialState = {
    items: [],
    loading: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_LOADED':
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: false,
            };
        default:
            return state;
    }
}


export default reducer;