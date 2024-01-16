import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  // TODO: 로고 이미지 넣기
  return (
    <Link href={"/"}>
      <div className="flex items-end">
        <span className="text-4xl font-bold mr-1">1AM</span>
        <span>아이앰</span>
      </div>
    </Link>
  );
}

export default Logo;
