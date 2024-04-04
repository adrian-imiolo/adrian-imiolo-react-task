import { cn } from "@/lib/utils";
import { SelectOptions } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps<T> {
  value: T;
  onChange: (value: T) => void;
  options: T[];
  className?: string;
}

function SelectGeneric<T extends SelectOptions>({
  value,
  onChange,
  options,
  className,
}: SelectProps<T>) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={cn("max-w-[100px]", className)}>
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectGeneric;
