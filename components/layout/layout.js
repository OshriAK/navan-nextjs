import { useContext } from 'react';
import MainNavigation from './main-navigation';
import UiContext from '../../store/ui-context';
import LoadingSpinner from '../ui/loading-spinner';
import ErrorAlert from '../ui/error-alert';
import useRouteLoading from '../../hooks/useRouteLoading.js';

function Layout(props) {
  const uiCtx = useContext(UiContext);
  const { error, isLoading } = uiCtx;

  useRouteLoading();

  return (
    <>
      <MainNavigation />
      {isLoading && <LoadingSpinner />}
      {error && <ErrorAlert />}
      {!error && !isLoading && <main>{props.children}</main>}
    </>
  );
}

export default Layout;
