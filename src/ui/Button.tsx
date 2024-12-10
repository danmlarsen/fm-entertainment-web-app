import { twMerge } from "tailwind-merge";

interface AppProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: AppProps) {
  return (
    <button
      className={twMerge(
        "h-12 rounded-md bg-primary-500 text-white transition duration-300 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
