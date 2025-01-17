import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <p className="text-lg text-gray-600">
        The page you’re looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link
        href="/"
        className="bg-accent-500 text-primary-800 hover:bg-accent-600 inline-block rounded px-6 py-3 text-lg transition"
        aria-label="Go back to the homepage"
      >
        Go back home
      </Link>
    </main>
  );
}
