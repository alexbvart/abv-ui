import { ReactNode } from "react";

type ToggleGroupType = "single" | "multiple";

export interface ToggleGroupProps {
  type: ToggleGroupType;
  children: ReactNode;
  className?: string;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
}
export interface ToggleGroupItemChild {
  Item: React.FC<ToggleGroupItemProps>;
}

export interface ToggleGroupItemProps {
  value: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}


export interface ToggleContextProps {
  type: ToggleGroupType;
  selectedValues: string[];
  onSelect: (value: string) => void;
}
