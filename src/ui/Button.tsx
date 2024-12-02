interface AppProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: AppProps) {
  return (
    <button
      className={`h-12 rounded-md bg-primary-500 text-white transition duration-300 hover:bg-white hover:text-black ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
