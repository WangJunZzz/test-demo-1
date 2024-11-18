import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: '系统管理',
      authority: ['AbpIdentity'],
    },
    name: 'system',
    path: '/system',
    children: [
      {
        name: 'abpUser',
        path: 'user',
        component: () => import('#/views/system/abpUser/index.vue'),
        meta: {
          // affixTab: true,
          icon: 'ph:user',
          title: '用户管理',
          authority: ['AbpIdentity.Users'],
        },
      },
      {
        name: 'abpRole',
        path: 'role',
        component: () => import('#/views/system/abpRole/index.vue'),
        meta: {
          icon: 'oui:app-users-roles',
          title: '角色管理',
          authority: ['AbpIdentity.Roles'],
        },
      },
      {
        name: 'abpSetting',
        path: 'setting',
        component: () => import('#/views/system/abpsetting/index.vue'),
        meta: {
          icon: 'uil:setting',
          title: '设置管理',
          authority: ['AbpIdentity.Setting'],
        },
      },
      {
        name: 'AbpAuditLog',
        path: 'auditlog',
        component: () => import('#/views/system/abplog/audit.vue'),
        meta: {
          title:'审计日志',
          authority: ['AbpIdentity.AuditLog'],
          icon: 'ant-design:snippets-twotone',
        },
      },
      {
        name: 'AbpLoginLog',
        path: 'loginlog',
        component: () => import('#/views/system/abplog/login.vue'),
        meta: {
          title:'登录日志',
          authority: ['AbpIdentity.IdentitySecurityLogs'],
          icon: 'ant-design:file-protect-outlined',
        },
      },
      {
        name: 'AboLanguage',
        path: 'language',
        component: () => import('#/views/system/abplanguage/language.vue'),
        meta: {
          title:'语言管理',
          authority: ['AbpIdentity.Languages'],
          icon: 'ant-design:read-outlined',
        },
      },
      {
        name: 'AboLanguageText',
        path: 'languagetext',
        component: () => import('#/views/system/abplanguage/languagetext.vue'),
        meta: {
          title:'语言文本管理',
          authority: ['AbpIdentity.LanguageTexts'],
          icon: 'ant-design:font-size-outlined',
        },
      },
      {
        name: 'DataDictionary',
        path: 'data-dictionary',
        component: () => import('#/views/system/dataDictionary/index.vue'),
        meta: {
          title:'数据字典',
          // authority: ['AbpIdentity.LanguageTexts'],
          icon: 'ant-design:font-size-outlined',
        },
      },
    ],
  },
];

export default routes;