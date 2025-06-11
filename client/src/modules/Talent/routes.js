const TalentList = () => import("./views/List");
const TalentEdit = () => import("./views/Edit");
const TalentAdd = () => import("./views/Add");

export default [
  {
    path: "/talents",
    component: TalentList,
    name: "talent.list",
    meta: { requiresAuth: true, layout: "Admin" },
    children: [
      {
        path: "/talents/add",
        component: TalentAdd,
        name: "talent.add",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" }
      },
      {
        path: "/talents/:id/edit",
        component: TalentEdit,
        name: "talent.edit",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" }
      }
    ]
  },
  {
    path: "/talents/confirm/:invite_id",
    component: TalentList,
    meta: { requiresAuth: false, layout: "Default" }
  }
];
