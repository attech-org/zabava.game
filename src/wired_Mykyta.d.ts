interface WiredButton {
  elevation: number;
  disabled: boolean;
}
interface WiredCalendar {
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
interface WiredCard {
  elevation: number;
  fill?: string;
}
interface WiredCheckbox {
  checked: boolean;
  disabled: boolean;
}
interface WiredCombo {
  disabled: boolean;
  selected?: string;
}
interface WiredDialog {
  elevation: number;
  open: boolean;
}
interface WiredDivider {
  elevation: number;
}
interface WiredFab {
  disabled: boolean;
}
