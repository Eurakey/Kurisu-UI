type ButtonType = 'primary' | 'danger' | 'info' | 'success' | 'warning';
type ButtonSize = 'small' | 'medium' | 'large';
type NativeType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  nativeType?: NativeType;
  autofocus?: boolean;
}

interface ButtonInstance {
  ref: HTMLButtonElement;
}

export type { ButtonType, ButtonSize, ButtonProps, NativeType, ButtonInstance };
