const EventList = () => import("./views/List");
const EventDetail = () => import("./views/Detail");

export default [
  {
    path: "/import-logs",
    component: EventList,
    name: "import-events.list",
    meta: { requiresAuth: true, layout: "Admin" },
    children: [
      {
        path: "/import-logs/:id",
        component: EventDetail,
        name: "import-event.detail",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" }
      }
    ]
  }
];
