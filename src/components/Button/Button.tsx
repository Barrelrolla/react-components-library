export interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return <button className="border px-4 py-2 bg-primary">{label}</button>;
}
