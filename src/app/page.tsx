import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen gap-2 h-screen flex items-center justify-center">
      Todo Application
      <Link href="/signup">
        <button className="border-2 rounded-full px-3 py-2 bg-red-200 text-black">
          Signup
        </button>
      </Link>
      <Link href="/signin">
        <button className="border-2 rounded-full px-3 py-2 bg-red-200 text-black">
          Signup
        </button>
      </Link>
    </div>
  );
}
