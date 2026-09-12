/** Radio option; `block` turns it into a selectable card. */
export interface RadioProps {
  label?: React.ReactNode;
  /** Secondary line, only rendered in block mode. */
  description?: string;
  name?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Renders as a bordered, full-width selectable card. */
  block?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
