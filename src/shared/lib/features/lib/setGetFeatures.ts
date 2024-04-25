import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localStorage';
import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatures: FeatureFlags = {
  isAppRedesigned:
    localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};
// add default value {}
// because might be crashing if feature is undefined
let featureFlags: FeatureFlags = {
  ...defaultFeatures,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
  return featureFlags[flag] ?? true;
}

export function getAllFeatureFlags() {
  return featureFlags;
}
