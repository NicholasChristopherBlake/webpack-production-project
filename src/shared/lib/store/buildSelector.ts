import { useSelector } from "react-redux";
import { StateSchema } from "@/app/providers/StoreProvider";

// This function returns hook, that we will use in components instead of useSelector
// And selector, that we can use in Async Thunks, for example
// When creating selector use this function and return named hook and selector for it
// For example: export const [useCounterValue, getCounterValue] = buildSelector((state) ...

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>]

export function buildSelector<T>(selector: Selector<T>): Result<T> {
  const useSelectorHook = () => useSelector(selector);

  return [useSelectorHook, selector];
}
