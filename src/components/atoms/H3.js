export default function H3({ children, className }) {
  return (
    <h3
      className={`text-2xl font-calibre-medium mb-4  leading-relaxed  ${className}`}
    >
      {children}
    </h3>
  );
}
