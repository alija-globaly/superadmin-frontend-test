const Partners = () => import("./views/List");
const EditPartner = () => import("./views/Edit");
const AddPartner = () => import("./views/Add");
const ImportPartnerDatabase = () => import("./views/Import");
const PartnerDetail = () => import("./views/PartnerDetail/Detail");
const PartnerBranches = () => import("./views/PartnerDetail/Branches");
const EditBranch = () => import("./views/PartnerDetail/BranchEdit");
const PartnerProducts = () => import("./views/PartnerDetail/Products");
const PartnerActivities = () => import("./views/PartnerDetail/Activities");
const ProductDetail = () => import("./views/PartnerDetail/ProductDetail");
const AddProduct = () => import("./views/PartnerDetail/AddProduct");
const EditProduct = () => import("./views/PartnerDetail/ProductEdit");
const AddBranch = () => import("./views/PartnerDetail/AddBranch");

export default [
  {
    path: "/categories",
    component: () => import("./views/CategoryList"),
    name: "categories.list",
    meta: { requiresAuth: true, layout: "Admin", transitionName: "fade" }
  },
  {
    path: "/partners",
    component: Partners,
    name: "partner.list",
    meta: { requiresAuth: true, layout: "Admin" },
    children: [
      {
        path: "/partners/add",
        component: AddPartner,
        name: "partner.add",
        props: true,
        meta: { requiresAuth: true, layout: "Admin" }
      },
      {
        path: "/partners/import",
        component: ImportPartnerDatabase,
        name: "partner.import",
        props: true,
        meta: { requiresAuth: true, layout: "Admin" }
      },
      {
        path: "/partners/:id/edit",
        component: EditPartner,
        name: "partner.edit",
        meta: { requiresAuth: true, layout: "Admin" }
      }
    ]
  },
  {
    path: "/partners/:id/",
    component: PartnerDetail,
    name: "partner.detail",
    redirect: "/partners/:id/branches", //@TODO change it to `Activities tab after finishing activity logging`
    meta: { requiresAuth: true, layout: "Admin" },
    children: [
      {
        path: "/partners/:id/branches",
        component: PartnerBranches,
        name: "partner.branches",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "fade" },
        children: [
          {
            path: "/partners/:id/branches/add",
            component: AddBranch,
            name: "branch.add",
            meta: {
              requiresAuth: true,
              layout: "Admin",
              transitionName: "fade"
            }
          },
          {
            path: "/partners/:id/branches/:branchId/edit",
            component: EditBranch,
            name: "branch.edit",
            meta: {
              requiresAuth: true,
              layout: "Admin",
              transitionName: "fade"
            }
          }
        ]
      },
      {
        path: "/partners/:id/activities",
        component: PartnerActivities,
        name: "partner.activities",
        meta: { requiresAuth: true, layout: "Admin", transitionName: "fade" }
      },
      {
        path: "/partners/:id/products",
        component: PartnerProducts,
        name: "partner.products",
        meta: {
          requiresAuth: true,
          layout: "Admin",
          transitionName: "fade",
          authorizedRoles: ["Admin", "Observer"]
        },
        children: [
          {
            path: "add",
            component: AddProduct,
            name: "product.add",
            meta: {
              requiresAuth: true,
              layout: "Admin",
              transitionName: "slide"
            }
          },
          {
            path: ":productId",
            component: ProductDetail,
            name: "product.detail",
            meta: {
              requiresAuth: true,
              layout: "Admin",
              transitionName: "slide"
            }
          },
          {
            path: ":productId/edit",
            component: EditProduct,
            name: "product.detail.edit",
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
