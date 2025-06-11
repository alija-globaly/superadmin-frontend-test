const SMSRequestList = () => import("./views/List");
const SMSListData = () => import("./views/ListData");
const SMSApplicationDetail = () => import("./views/Detail");

export default [
  {
    path: "/sms-requests",
    component: SMSRequestList,
    name: "sms-requests",
    redirect: "/sms-requests/pending",
    meta: { requiresAuth: true, layout: "Admin" },
    children: [
      {
        path: "/sms-requests/pending",
        component: SMSListData,
        name: "sms-requests.pending",
        meta: { requiresAuth: false, layout: "Admin", transitionName: "slide" },
        children: [
          {
            path: "/sms-requests/pending/:id",
            component: SMSApplicationDetail,
            name: "sms-requests.pending.detail",
            meta: {
              requiresAuth: true,
              layout: "Admin",
              transitionName: "slide"
            }
          }
        ]
      },
      {
        path: "/sms-requests/approved",
        component: SMSListData,
        name: "sms-requests.approved",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" },
        children: [
          {
            path: "/sms-requests/approved/:id",
            component: SMSApplicationDetail,
            name: "sms-requests.approved.detail",
            meta: {
              requiresAuth: true,
              layout: "Admin",
              transitionName: "slide"
            }
          }
        ]
      },
      {
        path: "/sms-requests/rejected",
        component: SMSListData,
        name: "sms-requests.rejected",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "slide" },
        children: [
          {
            path: "/sms-requests/rejected/:id",
            component: SMSApplicationDetail,
            name: "sms-requests.rejected.detail",
            meta: {
              requiresAuth: true,
              layout: "Admin",
              transitionName: "slide"
            }
          }
        ]
      }
    ]
  }
];
