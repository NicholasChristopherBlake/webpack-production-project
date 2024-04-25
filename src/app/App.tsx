import { Suspense, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData } from '@/entity/User';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';

const App = memo(() => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    // because of forceUpdate
    // don't update auth data if it is already inited
    if (!inited) {
      dispatch(initAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div id="app" className={classNames('app_redesigned', {}, [])}>
            <AppLoaderLayout />
          </div>
        }
        off={<PageLoader />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <div id="app" className={classNames('app', {}, [])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div id="app" className={classNames('app_redesigned', {}, [])}>
          <Suspense fallback="">
            <MainLayout
              content={<AppRouter />}
              header={<Navbar />}
              sidebar={<Sidebar />}
            />
          </Suspense>
        </div>
      }
    />
  );
});

export default App;
