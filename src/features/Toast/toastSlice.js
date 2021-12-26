import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
	name: 'toast',
	initialState: {
		icons: {
			success: 'bi bi-check2-circle',
			info: 'bi bi-exclamation-circle',
			warning: 'bi bi-exclamation-triangle',
			error: 'bi bi-exclamation-circle',
		},
		listToast: [],
	},
	reducers: {
		addToast(state, action) {
			state.listToast.push(action.payload);
		},
		removeFirstToast(state) {
			state.listToast.shift();
		},
	},
});

const {
	actions: { addToast, removeFirstToast },
	reducer,
} = toastSlice;

export { addToast, removeFirstToast };

export default reducer;
