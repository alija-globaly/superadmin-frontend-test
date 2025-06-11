import TenantConfig from "@/modules/Tenant/views/TenantConfig.vue";

const Tenants = () => import("./views/List");
const TenantDetail = () => import("./views/Detail");
const TenantUsers = () => import("./views/TenantUsers");
const TenantUsage = () => import("./views/TenantUsage");
const TenantSMS = () => import("./views/TenantSMS");

export default [
  {
    path: "/tenants",
    component: Tenants,
    name: "tenant.list",
    meta: { requiresAuth: true, layout: "Admin" },
    children: [
      {
        path: "/tenants/:id",
        component: TenantDetail,
        name: "tenant.detail",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" },
        redirect: "/tenants/:id/users", //@TODO change it to `Activities tab after finishing activity logging`
        children: [
          {
            path: "/tenants/:id/users",
            component: TenantUsers,
            name: "tenant.users.list",
            meta: { requiresAuth: true, layout: "Admin" }
          },
          {
            path: "/tenants/:id/usage",
            component: TenantUsage,
            name: "tenant.usage.report",
            meta: { requiresAuth: true, layout: "Admin" }
          },
          {
            path: "/tenants/:id/sms",
            component: TenantSMS,
            name: "tenant.sms.list",
            meta: { requiresAuth: true, layout: "Admin" }
          },
          {
            path: "/tenants/:id/config",
            component: TenantConfig,
            name: "tenant.config.list",
            meta: { requiresAuth: true, layout: "Admin" }
          }
        ]
      }
    ]
  }
];
