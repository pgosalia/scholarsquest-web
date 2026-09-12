/** Left navigation rail for the student / parent app. */
export interface SideNavItem { value: string; label: string; icon?: string; badge?: number | string }
export interface SideNavProps {
  items?: SideNavItem[];
  value?: string;
  onChange?: (value: string) => void;
  assetBase?: string;
  /** Pinned to the bottom of the rail. */
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SideNav(props: SideNavProps): JSX.Element;
