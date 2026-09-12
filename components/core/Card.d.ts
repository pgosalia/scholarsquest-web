/**
 * Rounded surface used for every grouped block of content.
 * @startingPoint section="Core" subtitle="Card tones and hover lift" viewport="700x260"
 */
export interface CardProps {
  children?: React.ReactNode;
  tone?: 'plain' | 'warm' | 'teal' | 'pink' | 'ink' | 'outline';
  /** Inner padding in px. */
  padding?: number;
  /** Raises and deepens the shadow on hover — for clickable cards only. */
  hoverLift?: boolean;
  /** CSS colour for a 6px bar across the top edge. */
  accentBar?: string;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
