export type ButtonType = "primary" | "secondary" | "danger";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /**
   * How large should the button be?
   */
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}
