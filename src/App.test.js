const initialState = {
    id: 0,
    text: 'Reducer test',
    complete: false
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed
                };
            });
        default:
            return state;
    }
};

// reduce function which changes current state
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};


describe('todos reducer', () => {
    it('reducer must return initial state', () => {
        expect(todos(undefined, {}).toEqual([{
            id: 0,
            text: 'Reducer test',
            completed: false
        }]));
    });
});