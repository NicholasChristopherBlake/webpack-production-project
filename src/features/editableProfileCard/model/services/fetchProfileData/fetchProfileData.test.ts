import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
  username: 'admin',
  age: 25,
  country: Country.France,
  lastname: 'Morgan',
  first: 'Nick',
  city: 'Provance',
  currency: Currency.EUR,
};

describe('fetchProfileData.test', () => {
  test('successful fetching', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetching', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
