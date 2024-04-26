import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { AppRouteByPathPattern, AppRoutes } from '@/shared/const/router';

// This hook return current open page
export function useRouteChange() {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN);

  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      // if current url matches pattern, we think that this page is open now
      // and we save current route to state appRoute
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
}
