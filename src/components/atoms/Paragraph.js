export default function Paragraph({ children, className }) {
  return (
    <p className={`text-lg leading-relaxed mb-4 ${className}`}>{children}</p>
  );
}
