export function ProductSearch() {
  return (
    <form className="flex max-w-xl gap-3">
      <input
        className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-accent"
        placeholder="Search for phones, groceries, electronics..."
      />
      <button
        className="rounded-xl bg-foreground px-5 py-3 font-medium text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
