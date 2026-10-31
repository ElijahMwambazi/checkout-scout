export function Badge({ className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span {...props} className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${className}`} />;
}
