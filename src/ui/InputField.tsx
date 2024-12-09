import { FieldError } from "react-hook-form";

interface AppProps extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
  error: string;
}

export default function InputField({ name, error, ...props }: AppProps) {
  return (
    <label
      className={`relative flex cursor-pointer border-b px-4 pb-[18px] ${!!error ? "border-b-primary-500" : "border-b-secondary-500 has-[:focus]:border-b-white"}`}
      htmlFor={name}
    >
      <input
        className="w-full bg-transparent focus:outline-none"
        name={name}
        id={name}
        {...props}
      />
      {!!error && (
        <span className="absolute right-0 top-0 text-primary-500">{error}</span>
      )}
    </label>
  );
}
