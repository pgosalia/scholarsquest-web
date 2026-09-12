/** Circular icon-only button for toolbars, cards and dialogs. */
export interface IconButtonProps {
  /** Lucide icon name. */
  icon?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'soft' | 'teal' | 'pink' | 'solid' | 'bare';
  /** Accessible label — required, the button has no text. */
  label?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
