const INITIAL_STATE = {
    all: [],
    selected: null
};//this.props.selected

export default (state = {}, action) => {
    switch (action.type){
        case 'FETCH_POSTS':
            return { ...state, all: action.payload.data };
        case 'FETCH_POST':
            return { ...state, selected: action.payload.data };
        default:
            return state;
    }
};