import { auth } from "./lib/auth-no-edge";

export default auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
