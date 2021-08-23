import { InjectionToken } from "@angular/core";
import { AppConfig } from "./app-config";

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const AUTH_CONFIG: AppConfig = {
  apiUrl: 'api.auth.com',
  title: 'Auth'
}

export const ROLES: string[] = [
  'fancypants',
  'superadmin',
  'admin',
  'user',
  'guest'
]
export const ROLES_TOKEN = new InjectionToken<string[]>('app.roles')