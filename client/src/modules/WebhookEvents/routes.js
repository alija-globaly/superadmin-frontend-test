const EventList = () => import("./views/List");
const EventDetail = () => import("./views/Detail");

export default [
  {
    path: "/events",
    component: EventList,
    name: "events.list",
    meta: { requiresAuth: true, layout: "Admin" },
    children: [
      {
        path: "/events/:id",
        component: EventDetail,
        name: "event.detail",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" }
      }
    ]
  }
];
