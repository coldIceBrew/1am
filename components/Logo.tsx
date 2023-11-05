import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <Image
        priority
        src={"/logo.svg"}
        alt={"Main Logo"}
        width={300}
        height={100}
        className="dark:filter dark:invert"
      />
    </Link>
  );
}

export default Logo;
