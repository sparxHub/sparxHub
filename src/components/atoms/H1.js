export default function H1({ children, className }) {
  return (
    <h1
      className={`text-4xl sm:text-5xl font-calibre-semibold leading-tight mb-4 ${className}`}
    >
      {children}
    </h1>
  );
}
