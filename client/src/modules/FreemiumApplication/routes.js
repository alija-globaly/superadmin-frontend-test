const FreemiumApplicationList = () => import("./views/List");
const FreemiumApplicationListData = () => import("./views/ListData");
const FreemiumApplicationDetail = () => import("./views/Detail");

export default [
  {
    path: "/freemium-applications",
    component: FreemiumApplicationList,
    name: "freemium-applications",
    redirect: "/freemium-applications/pending",
    meta: { requiresAuth: true, layout: "Admin" },
    children: [
      {
        path: "/freemium-applications/pending",
        component: FreemiumApplicationListData,
        name: "freemium-applications.pending",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" },
        children: [
          {
            path: "/freemium-applications/pending/:id",
            component: FreemiumApplicationDetail,
            name: "freemium-applications.pending.detail",
            meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" }
          }
        ]
      },
      {
        path: "/freemium-applications/approved",
        component: FreemiumApplicationListData,
        name: "freemium-applications.approved",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" },
        children: [
          {
            path: "/freemium-applications/approved/:id",
            component: FreemiumApplicationDetail,
            name: "freemium-applications.approved.detail",
            meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" }
          }
        ]
      },
      {
        path: "/freemium-applications/declined",
        component: FreemiumApplicationListData,
        name: "freemium-applications.declined",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" },
        children: [
          {
            path: "/freemium-applications/declined/:id",
            component: FreemiumApplicationDetail,
            name: "freemium-applications.declined.detail",
            meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" }
          }
        ]
      },
    ]
  }
];
