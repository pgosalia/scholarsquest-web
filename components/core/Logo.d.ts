/**
 * The Scholar's Quest logo, in its approved lockups.
 */
export interface LogoProps {
  /** Which supplied artwork to show. */
  variant?: 'full-color' | 'full-white' | 'mark-color' | 'mark-white' | 'mark-black';
  /** Rendered height in px; width scales. */
  height?: number;
  /** Relative path prefix to the design system root (where assets/ lives). */
  assetBase?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
