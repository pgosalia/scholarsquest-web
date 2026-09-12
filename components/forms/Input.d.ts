/** Labelled single-line text field. */
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  /** Lucide icon name rendered inside the field. */
  icon?: string;
  /** Helper text under the field. */
  hint?: string;
  /** Error message — replaces the hint and turns the field red. */
  error?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
