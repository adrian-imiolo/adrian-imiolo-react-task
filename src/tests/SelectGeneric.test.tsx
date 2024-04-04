import SelectGeneric from "@/tag-page/SelectGeneric";
import { render, screen } from "@testing-library/react";

describe("SelectGeneric", () => {
  it("should render select with options", () => {
    render(
      <SelectGeneric
        options={[
          { value: "value1", label: "label1" },
          { value: "value2", label: "label2" },
        ]}
        value="value1"
        onChange={() => {}}
      />
    );
    expect(screen.getByText("label1")).toBeInTheDocument();
    expect(screen.getByText("label2")).toBeInTheDocument();
  });

  it("should call onChange when value changes", () => {
    let selectedValue = "value1";
    const onChange = (value: string) => {
      selectedValue = value;
    };
    render(
      <SelectGeneric
        options={[
          { value: "value1", label: "label1" },
          { value: "value2", label: "label2" },
        ]}
        value={selectedValue}
        onChange={onChange}
      />
    );
    const select = screen.getByRole("combobox");
    select.value = "value2";
    expect(selectedValue).toBe("value1");
  });
});
