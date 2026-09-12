/** Dropdown field. */
export interface SelectProps {
  label?: string;
  /** Strings, or { value, label } objects. */
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  hint?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
