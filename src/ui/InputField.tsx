interface AppProps extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
  isValid?: boolean;
}

export default function InputField({
  name,
  isValid = true,
  ...props
}: AppProps) {
  return (
    <label
      className={`flex cursor-pointer border-b px-4 pb-[18px] ${!isValid ? "border-b-primary-500" : "border-b-secondary-500 has-[:focus]:border-b-white"}`}
      htmlFor={name}
    >
      <input
        className="w-full bg-transparent focus:outline-none"
        name={name}
        id={name}
        {...props}
      />
      {!isValid && <span className="text-primary-500">test</span>}
    </label>
  );
}
