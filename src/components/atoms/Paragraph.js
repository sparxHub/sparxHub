export default function Paragraph({ children, className }) {
  return (
    <p className={`text-base sm:text-lg leading-relaxed mb-4 ${className}`}>
      {children}
    </p>
  );
}
