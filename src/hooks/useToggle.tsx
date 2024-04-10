import { useState } from "react";

type IUseToggle = {
  defaultValue: boolean;
};

export default function useToggle({ defaultValue }: IUseToggle) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value: boolean) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}
