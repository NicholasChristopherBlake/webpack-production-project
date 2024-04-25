import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

const ForceUpdateContext = createContext({
  value: true,
  forceUpdate: () => {},
});

// This hook only gets value from Context
export const useForceUpdate = () => {
  const { forceUpdate } = useContext(ForceUpdateContext);

  return forceUpdate;
};

export function ForceUpdateProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(true);

  // we just change state value from true -> false and back
  const forceUpdate = () => {
    setValue((prev) => !prev);
    setTimeout(() => {
      setValue((prev) => !prev);
    }, 120);
  };

  const valueContext = useMemo(() => ({ value, forceUpdate }), [value]);

  // when value is false, for a millisecond we don't have interface
  // but when it becomes true again, we rerender our interface back
  if (!value) {
    return null;
  }

  return (
    <ForceUpdateContext.Provider value={valueContext}>
      {children}
    </ForceUpdateContext.Provider>
  );
}
