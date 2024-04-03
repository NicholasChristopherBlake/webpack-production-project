import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

// to get correct types for libraries
type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

// Both libraries are used together, so we wait while they both are loaded with Promise.all
const getAsyncAnimationModules = async () =>
  Promise.all(
    // this import works with promises - lazy loading
    [import('@react-spring/web'), import('@use-gesture/react')],
  );

export const useAnimationLibs = () =>
  useContext(AnimationContext) as Required<AnimationContextPayload>; // to say that these fields are not undefined

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  // Create refs for libraries to not have rerenders
  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      // save loaded libs to refs
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
