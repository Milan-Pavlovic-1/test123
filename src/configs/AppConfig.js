import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE, DIR_LTR } from 'constants/ThemeConstant';
import { env } from './EnvironmentConfig'

export const APP_NAME = 'T.I.P.A.S. BMS';
export const API_BASE_URL = env.API_ENDPOINT_URL
export const APP_PREFIX_PATH = '/app';
export const AUTH_PREFIX_PATH = '/auth';

export const ClaimsRole = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
export const ClaimsEmail = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";
export const ClaimsKey = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";

export const THEME_CONFIG = {
	navCollapsed: false,
	sideNavTheme: SIDE_NAV_LIGHT,
	locale: 'it',
	navType: NAV_TYPE_SIDE,
	topNavColor: '#3e82f7',
	headerNavColor: '',
	mobileNav: false,
	currentTheme: 'light',
	direction: DIR_LTR
};
