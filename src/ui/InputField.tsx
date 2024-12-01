type AppProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "email" | "password";
  isValid?: boolean;
};

export default function InputField({
  name,
  onChange,
  value = "",
  placeholder = "",
  type = "text",
  isValid = true,
}: AppProps) {
  return (
    <label
      className={`flex cursor-pointer border-b px-4 pb-[18px] ${!isValid ? "border-b-primary-500" : "border-b-secondary-500 has-[:focus]:border-b-white"}`}
      htmlFor={name}
    >
      <input
        className="w-full bg-transparent focus:outline-none"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {!isValid && <span className="text-primary-500">test</span>}
    </label>
  );
}
