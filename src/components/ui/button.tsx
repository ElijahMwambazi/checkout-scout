export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`rounded-xl px-4 py-2 font-medium ${props.className ?? ""}`} />;
}
