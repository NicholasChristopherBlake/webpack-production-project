import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileFirstname } from "./getProfileFirstname";

describe('getProfileFirstname.test', () => {
  test('should return correct state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: 'Timur',
        },
      },
    };
    expect(getProfileFirstname(state as StateSchema)).toEqual('Timur');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFirstname(state as StateSchema)).toEqual('');
  });
});
