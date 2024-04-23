export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  SETTINGS = 'settings',

  // Last
  NOT_FOUND = 'not_found',
}

// for more pretty use in components instead of RoutePath object
export const getRouteMain = () => `/`;
export const getRouteAbout = () => `/about`;
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => `/articles`;
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => `/articles/create`;
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => `/admin`;
export const getRouteForbidden = () => `/forbidden`;
export const getRouteSettings = () => `/settings`;
