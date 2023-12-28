import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'users',
    initialState: {
        userData: [],
        isLogedIn: false
},
    reducers: {
        addUser: (state, action) => {
            state.userData.push(action.payload)
        },
        makeUserIn: (state, action) => {
            state.isLogedIn = true;
        },
        makeUserOut: (state, action)=>{
            state.isLogedIn = false;
        }
    }
})

export const {addUser, makeUserIn, makeUserOut} = UserSlice.actions;
export default UserSlice.reducer