import H1 from "@/components/h1";
import AuthForm from "@/components/auth-form";
import Link from "next/link";

const Login = () => {
  return (
    <main>
      <H1 className="text-center">Log in</H1>
      <AuthForm type="logIn" />
      <p className="mt-6 text-sm text-zinc-500">
        No account yet?
        <Link href="/signup" className="font-medium">
          Sign up
        </Link>
      </p>
    </main>
  );
};

export default Login;
