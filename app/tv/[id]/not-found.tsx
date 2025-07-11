import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4">Media Not Found</h2>
      <p className="mb-4">Could not find the requested tv-serial.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  );
}
