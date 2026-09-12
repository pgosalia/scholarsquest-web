/**
 * Primary call-to-action control.
 * @startingPoint section="Core" subtitle="Pill buttons in every variant and size" viewport="700x220"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = pink CTA, secondary = teal, outline/ghost = quiet, sun = playful highlight. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'sun';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name shown before the label. */
  iconLeft?: string;
  /** Lucide icon name shown after the label. */
  iconRight?: string;
  /** Adds the offset "sticker" shadow used on hero CTAs. */
  pop?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
