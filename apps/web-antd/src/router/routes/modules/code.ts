import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ant-design:format-painter-filled',
      order: 3,
      title: $t('abp.menu.code'),
      // authority: ['AbpTenantManagement'],
    },
    name: 'code',
    path: '/code',
    children: [
      {
        name: 'project',
        path: 'project',
        component: () => import('#/views/code/project/index.vue'),
        meta: {
          icon: 'ant-design:profile-outlined',
          title: $t('abp.menu.code-project'),
          // authority: ['AbpTenantManagement.Tenants'],
        },
      },
      {
        name: 'template',
        path: 'template',
        component: () => import('#/views/code/template/index.vue'),
        meta: {
          icon: 'ant-design:file-markdown-filled',
          title: $t('abp.menu.code-template'),
          // authority: ['AbpTenantManagement.Tenants'],
        },
      },
      {
        name: 'generate',
        path: 'generate',
        component: () => import('#/views/code/generate/index.vue'),
        meta: {
          icon: 'ant-design:copyright-circle-filled',
          title: $t('abp.menu.code-genarate'),
          // authority: ['AbpTenantManagement.Tenants'],
        },
      },
      {
        name: 'EntityModel',
        path: 'entityModel',
        component: () =>
          import('#/views/code/project/entityModel/index.vue'),
        meta: {
          icon: 'ph:user',
          title: '实体',
          hideInMenu: true,
        },
      },
      {
        name: 'TemplateDetail',
        path: 'templateDetail',
        component: () =>
          import('#/views/code/template/TemplateDetail.vue'),
          meta: {
            icon: 'ph:user',
            title: '模板明细',
            hideInMenu: true,
          },
      },
    ],
  },
];

export default routes;
