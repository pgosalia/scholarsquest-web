/** Round person chip with a brand-coloured ring. */
export interface AvatarProps {
  /** Full name — initials are derived from it. */
  name?: string;
  /** Photo URL; initials show when omitted. */
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  ring?: 'teal' | 'pink' | 'sun' | 'none';
  style?: React.CSSProperties;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
