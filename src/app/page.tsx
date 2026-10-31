import { ProductSearch } from "@/components/products/ProductSearch";
import { mockPrices } from "@/data/mock-data";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Checkout Scout
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
          Check local prices before you buy.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Compare community-updated prices from nearby stores. No carts, no
          orders, no marketplace — just price discovery.
        </p>
        <div className="mt-6">
          <ProductSearch />
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold">Recently confirmed prices</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {mockPrices.map((item) => (
            <article key={item.id} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">{item.store}</p>
              <h3 className="mt-1 font-semibold">{item.product}</h3>
              <p className="mt-3 text-2xl font-bold">K{item.price}</p>
              <p className="mt-1 text-sm text-gray-500">
                Last confirmed {item.lastConfirmed}
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
