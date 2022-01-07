import Link from "next/link";
import "twin.macro";

const LoginSubactions = () => {
  return (
    <div tw="w-full flex items-center justify-between px-3 mb-3">
      <div />
      <div tw="w-1/2 text-right">
        <Link href="/password-reset" passHref>
          <a tw="text-accent text-sm tracking-tight">
            ¿Olvidaste tu contraseña?
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LoginSubactions;
