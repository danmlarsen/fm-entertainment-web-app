export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`h-12 rounded-md bg-primary-500 text-white transition duration-300 hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </button>
  );
}
