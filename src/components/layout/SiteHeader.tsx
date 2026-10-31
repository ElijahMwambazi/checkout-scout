import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-bold">Checkout Scout</Link>
        <nav className="flex gap-4 text-sm text-gray-600">
          <Link href="/products">Products</Link>
          <Link href="/stores">Stores</Link>
          <Link href="/prices/submit">Submit Price</Link>
        </nav>
      </div>
    </header>
  );
}
