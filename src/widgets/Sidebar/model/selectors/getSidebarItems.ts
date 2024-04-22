import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entity/User';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg';

import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';

import { SidebarItemType } from '../types/sidebar';
import { toggleFeatures } from '@/shared/lib/features';

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
