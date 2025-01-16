import {
  type RouteConfig,
  index,
  route,
  layout,
  getAppDirectory,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("client-only-route", "routes/client-only-route.tsx"),
  route("server-only-route", "routes/server-only-route.tsx"),

  //   ...prefix("contact", [index("routes/contact.tsx")]),

  layout("routes/contact.tsx", [route("contact/:id", "routes/contact.id.tsx")]),
] satisfies RouteConfig;
