import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("login","routes/login.tsx"), route("signup", "routes/signup.tsx"), route("about", "routes/about.tsx"), route("faq", "routes/faq.tsx"),  route("contact", "routes/ContactSection.tsx")] satisfies RouteConfig;
