export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`rounded-xl border px-4 py-2 ${props.className ?? ""}`} />;
}
