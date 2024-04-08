import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

// This function returns hook, that we will use in components instead of useSelector
// And selector, that we can use in Async Thunks, for example
// When creating selector use this function and return named hook and selector for it
// For example: export const [useCounterValue, getCounterValue] = buildSelector((state) ...

type Selector<T, Args extends any[]> = (
  state: StateSchema,
  ...args: Args
) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [
  Hook<T, Args>,
  Selector<T, Args>,
];

export function buildSelector<T, Args extends any[]>(
  selector: Selector<T, Args>,
): Result<T, Args> {
  const useSelectorHook: Hook<T, Args> = (...args: Args) =>
    useSelector((state: StateSchema) =>
      selector(state, ...args),
    );

  return [useSelectorHook, selector];
}
