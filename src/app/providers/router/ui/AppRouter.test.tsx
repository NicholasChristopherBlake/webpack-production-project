import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteProfile,
} from '@/shared/const/router';
import { UserRole } from '@/entity/User';

describe('app/router/AppRouter.test', () => {
  test('Page must be rendered', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });
    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Page is not found', async () => {
    componentRender(<AppRouter />, {
      route: '/123123123123',
    });
    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });
  test('Unauthed user must be redirected to main page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });
    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Access to auth-only route for authed user', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _inited: true, authData: { id: '1' } },
      },
    });
    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Access denied (user role is not correct)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    });
    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Access granted (user role is correct)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
      },
    });
    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
