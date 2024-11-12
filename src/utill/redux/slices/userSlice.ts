import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface UserInfo {
  id: number | null; // ????????????? //FIXME - 
  email: string | null;
  name: string | null;
  role: string | null;
  token: string;
}

interface UserState {
  isLoggedIn: boolean;
  userInfo: UserInfo | null;
}
const initialState: UserState = {
  isLoggedIn: false,
  userInfo: {
    id: null,
    email: null,
    name: null,
    role: null,
    token: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.isLoggedIn = true; // 로그인 상태 업데이트
      state.userInfo = action.payload; // 사용자 정보 업데이트
    },
    clearUser: (state) => {
      state.userInfo = null; // 사용자 정보 초기화
      state.isLoggedIn = false; // 로그인 상태 초기화
    },
    loginSuccess: (state, action: PayloadAction<UserInfo>) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
  },
});

export const { setUser, clearUser, loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
