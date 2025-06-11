const TenantInvitationList = () => import("./views/List");
const InviteTenantForm = () => import("./views/Invite");

export default [
  {
    path: "/invitations",
    component: TenantInvitationList,
    name: "tenant-invitation.list",
    meta: { requiresAuth: true, layout: "Admin" },
    children: [
      {
        path: "/invitations/create",
        component: InviteTenantForm,
        name: "tenant-invitation.form",
        meta: { requiresAuth: true, layout: "Admin" }
      }
    ]
  }
];
