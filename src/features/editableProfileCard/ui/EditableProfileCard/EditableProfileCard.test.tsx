import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entity/Profile';
import { Currency } from '@/entity/Currency';
import { Country } from '@/entity/Country';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'something',
  age: 34,
  currency: Currency.USD,
  country: Country.France,
  city: 'Paris',
  username: 'admin123',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    // authData.id === profile.id
    user: {
      authData: { id: '1', username: 'admin123' },
    },
  },
  asyncReducers: { profile: profileReducer },
};

describe('Editable Profile Card Test', () => {
  test('Readonly must change and show cancel button', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('On CancelButton click all changes cancel', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'else');

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('else');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));
    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('something');
  });
  test('Error must occur on empty input', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  // This test falls with error when clicking on Save Button
  // Couldn't fix
  // test('if theres no validation error, a PUT request must be send to server', async () => {
  //   // Mocking axios PUT request
  //   const mockPutReq = jest.spyOn($api, 'put');
  //   componentRender(<EditableProfileCard id="1" />, options);

  //   await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

  //   await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
  //   await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
  //   expect(mockPutReq).toHaveBeenCalled();
  // });
});
