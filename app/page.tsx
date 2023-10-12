import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  if (session) {
    redirect("/podcasts");
  }

  return (
    <div className="h-screen">
      <div className="absolute top-5 right-5">
        <div className="divide-x-2">
          <Link href={"/api/auth/signin"} className="px-3">
            로그인
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center h-full mx-5">
        <Image
          src={"./logo.svg"}
          alt={"Main Logo"}
          width={1200}
          height={1000}
        />
      </div>
    </div>
  );
}
