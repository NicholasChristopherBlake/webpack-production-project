import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../types/jsonSettings';

// for this constant to never change link and remove undefined
const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
  (state) => state.user?.authData?.jsonSettings ?? defaultJsonSettings,
);
