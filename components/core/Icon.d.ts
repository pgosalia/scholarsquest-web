/**
 * Lucide icon inlined as SVG so it takes currentColor.
 */
export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "graduation-cap"). */
  name?: string;
  /** Pixel size of the square glyph. */
  size?: number;
  /** SVG stroke width; Lucide's default is 2. */
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
