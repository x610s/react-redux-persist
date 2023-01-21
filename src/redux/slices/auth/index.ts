import { useNavigate } from 'react-router-dom';
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface AuthState {
    token: string | null;
    user : string | null;
}

export const initialState: AuthState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthState>) => {
            state.token = action.payload.token;
            state.user = action.payload.user
        },
        setLogin: (state, action: PayloadAction<AuthState>) => {
            state.token = action.payload.token;
            state.user = action.payload.user
        },
        setLogout: (state, action: PayloadAction<void>) => {
            state.token = null;
            state.user = null
        }
    }
});

export const loginAsync = async (email: string, password: string, dispatch: Dispatch) => {
      return await axios.post('https://reqres.in/api/login', {
            email, password
        })
}


export const { setLogin, setLogout, setUser } = authSlice.actions;
export default authSlice.reducer;