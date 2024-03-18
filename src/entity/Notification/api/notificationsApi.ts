import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notifications'; // our Notification, not TS one

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    // generics: <What returns, argument>
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useNotifications = notificationsApi
  .useGetNotificationsQuery;
