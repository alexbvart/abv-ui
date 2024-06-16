export type ButtonType = 'primary' | 'secondary' | 'danger';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?:ButtonType
    size?: ButtonSize
    disabled?: boolean;
    className?: string;
  }