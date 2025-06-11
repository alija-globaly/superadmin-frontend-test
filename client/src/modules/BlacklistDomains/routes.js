const TenantInvitationList = () => import("./views/List");
const AddNewBlacklistDomains = () => import("./views/Add");
const UpdateBlacklistDomain = () => import("./views/Edit");

export default [
  {
    path: "/blacklist-domains",
    component: TenantInvitationList,
    name: "blacklist-domains.list",
    meta: { requiresAuth: true, layout: "Admin" },
    children: [
      {
        path: "/blacklist-domains/add",
        component: AddNewBlacklistDomains,
        name: "blacklist-domains.form",
        meta: { requiresAuth: true, layout: "Admin" }
      },
      {
        path: "/blacklist-domains/:domain/update",
        component: UpdateBlacklistDomain,
        name: "blacklist-domains.edit",
        meta: { requiresAuth: true, layout: "Admin" }
      }
    ]
  }
];
