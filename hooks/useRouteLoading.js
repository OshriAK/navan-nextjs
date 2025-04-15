// this is for bonus show loading and still take care on pre generation page

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import UiContext from '../store/ui-context';

export default function useRouteLoading() {
  const router = useRouter();

  const uiCtx = useContext(UiContext);
  const { setIsLoading } = uiCtx;

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleStop = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
}
