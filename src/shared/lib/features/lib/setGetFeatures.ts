import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localStorage';
import { FeatureFlags } from '@/shared/types/featureFlags';

// By default guests have new design on
function getDefaultDesign() {
  if (!localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY)) {
    return true;
  }
  return localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new';
}

const defaultFeatures: FeatureFlags = {
  isAppRedesigned: getDefaultDesign(),
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
  return featureFlags[flag];
}

export function getAllFeatureFlags() {
  return featureFlags;
}
