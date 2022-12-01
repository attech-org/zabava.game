interface WiredButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  elevation: number;
  disabled?: boolean;
}
interface WiredCalendar extends React.HTMLAttributes<HTMLElement> {
  elevation: number;
  selected?: string;
  firstdate?: string;
  lastdate?: string;
  locale?: string;
  disabled: boolean;
  initials: boolean;
  value?: { date: Date; text: string };
  format: Function;
}
interface WiredCard extends React.HTMLAttributes<HTMLElement> {
  elevation: number;
  fill?: string;
}
interface WiredCheckbox extends React.HTMLAttributes<HTMLElement> {
  checked: boolean;
  disabled: boolean;
}
interface WiredCombo extends React.HTMLAttributes<HTMLElement> {
  disabled: boolean;
  selected?: string;
}
interface WiredDialog extends React.HTMLAttributes<HTMLElement> {
  elevation: number;
  open: boolean;
}
interface WiredDivider extends React.HTMLAttributes<HTMLElement> {
  elevation: number;
}
interface WiredFab extends React.HTMLAttributes<HTMLElement> {
  disabled: boolean;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
    "wired-button": WiredButton;
  }
}