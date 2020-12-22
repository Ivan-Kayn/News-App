const initialState = {
    articles: [],
    loading: false,
    error: false,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HELLO_WORLD':
            return {
                ...state,
                message: action.payload,
            };
        case 'ARTICLES_LOADED':
            return {
                ...state,
                articles: action.payload,
                loading: false,
                error: false,

            };

        default:
            return state;
    }
}


export default reducer;