import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link href={"/podcasts"} className="px-3">
        팟캐스트
      </Link>
      <Link href={"/api/auth/signin"} className="px-3">
        로그인
      </Link>
      <Link href={"/api/auth/signout"} className="px-3">
        로그아웃
      </Link>
    </div>
  );
}
