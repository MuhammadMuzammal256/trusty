export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl px-10 mx-auto h-full ${className}`}>
      {children}
    </div>
  );
}