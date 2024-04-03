import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      callback();
    }
    // Because this hook must work only once when mounting
    // eslint-disable-next-line
  }, []);
}
