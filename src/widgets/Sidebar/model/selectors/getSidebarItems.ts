import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entity/User';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';

import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: 'Main',
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: 'About',
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        text: 'Profile',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: ArticleIcon,
        text: 'Articles',
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
