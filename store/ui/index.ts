import { createSlice } from '@reduxjs/toolkit';
import { UIState, SetActiveToc } from './types';

// Define the initial state using that type
const initialState: UIState = {
    toc: null,
};

const ui = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setActiveToc: (state, action: SetActiveToc) => {
            state.toc = action.payload;
        },
    },
});
const { actions, reducer } = ui;

export { actions, reducer };
export default reducer;
