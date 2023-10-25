export default function H2({ children, className }) {
  return (
    <h2 className={`text-3xl font-semibold leading-snug mb-3 ${className}`}>
      {children}
    </h2>
  );
}
