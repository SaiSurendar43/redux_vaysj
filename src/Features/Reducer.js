import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: 'user',
    initialState: { value: { FirstName: '', LastName: '', Password: '', Email: '' } },
    reducers: {
        submit: (state, action) => {
            state.value = action.payload
            console.log('state.value',state.value)
        },
           

    },
});

export default userslice.reducer;
export const { submit } = userslice.actions;
