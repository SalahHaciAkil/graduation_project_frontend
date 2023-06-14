// logo.tsx

import Link from "next/link";
import React from "react";

interface LogoProps {
  href: string;
}

function Logo({ href }: LogoProps): JSX.Element {
  const logoPStyle: string = "text-2xl font-semibold";
  const logoSpanStyle: string = "text-primary-700";
  return (
    <Link href={href}>
      <div className="flex justify-center items-center">
        <p className={logoPStyle}>
          Incentive<span className={logoSpanStyle}>Ai</span>
        </p>
      </div>
    </Link>
  );
}

export default Logo;
