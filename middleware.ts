import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all request paths except:
  // - /api, /_next, /_vercel routes
  // - All files with an extension (images, fonts, manifests, etc.)
  // - /robots.txt, /sitemap.xml, /favicon.ico (served by Next metadata routes)
  matcher: [
    "/((?!api|_next|_vercel|robots.txt|sitemap.xml|favicon.ico|.*\\..*).*)",
  ],
};
