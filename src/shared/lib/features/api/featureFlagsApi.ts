import { rtkApi } from '@/shared/api/rtkApi';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagsOptions {
  userId: string;
  // Partial, because we want to update separate feature, not all of them
  features: Partial<FeatureFlags>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsOptions>({
      query: ({ userId, features }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          features,
        },
      }),
    }),
  }),
});

// using without hook
export const updateFeatureFlagsMutation =
  featureFlagsApi.endpoints.updateFeatureFlags.initiate;
