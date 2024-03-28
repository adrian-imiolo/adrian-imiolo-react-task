import { SelectOptions } from "./TagBrowserPage";

interface SelectProps {
  value: SelectOptions;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[] | number[];
}

export function SelectGeneric({ value, onChange, options }: SelectProps) {
  return (
    <select value={value} onChange={onChange} className="capitalize">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
