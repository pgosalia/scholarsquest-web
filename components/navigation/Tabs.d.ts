/** Tab switcher: soft pill group, or underlined. */
export interface TabsProps {
  /** Strings, or { value, label, icon } objects. */
  items?: Array<string | { value: string; label: string; icon?: string }>;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'pill' | 'underline';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
