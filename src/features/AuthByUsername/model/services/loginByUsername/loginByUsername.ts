import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entity/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

enum LoginErrors {
  INCORRECT_DATA = '',
  SERVER_ERROR = ''
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
  >(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
      const { dispatch, extra, rejectWithValue } = thunkAPI;

      try {
        const response = await extra.api.post<User>('/login', authData);

        if (!response.data) {
          throw new Error();
        }

        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data));

        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue('error');
      }
    },
  );
