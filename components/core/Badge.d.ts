/** Small status or category pill. */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'teal' | 'pink' | 'sun' | 'grape' | 'success' | 'neutral' | 'solid';
  /** Lucide icon name shown before the label. */
  icon?: string;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
