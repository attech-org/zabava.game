declare namespace JSX {
  interface IntrinsicElements {
    "wired-button": import("wired-elements").WiredButton | React.ButtonHTMLAttributes<HTMLButtonElement>;
    "wired-calendar": import("wired-elements").WiredCalendar | React.Attributes<HTMLElement>;
    "wired-card": import("wired-elements").WiredCard | React.Attributes<HTMLElement>;
    "wired-checkbox": import("wired-elements").WiredCheckbox | React.Attributes<HTMLElement>;
    "wired-combo": import("wired-elements").WiredCombo | React.Attributes<HTMLElement>;
    "wired-dialog": import("wired-elements").WiredDialog | React.Attributes<HTMLElement>;
    "wired-divider": import("wired-elements").WiredDivider | React.Attributes<HTMLElement>;
    "wired-fab": import("wired-elements").WiredFab | React.Attributes<HTMLElement>;
    "wired-icon-button": import("wired-elements").WiredIconButton | React.Attributes<HTMLElement>;
    "wired-image": import("wired-elements").WiredImage | React.Attributes<HTMLElement>;
    "wired-input": import("wired-elements").WiredInput | React.Attributes<HTMLElement>;
    "wired-item": import("wired-elements").WiredItem | React.Attributes<HTMLElement>;
    "wired-link": import("wired-elements").WiredLink | React.Attributes<HTMLElement>;
    "wired-listbox": import("wired-elements").WiredListbox | React.Attributes<HTMLElement>;
    "wired-progress": import("wired-elements").WiredProgress | React.Attributes<HTMLElement>;
    "wired-radio": import("wired-elements").WiredRadio | React.Attributes<HTMLElement>;
    "wired-search-input": import("wired-elements").WiredSearchInput | React.Attributes<HTMLElement>;
    "wired-slider": import("wired-elements").WiredSlider | React.Attributes<HTMLElement>;
    "wired-spinner": import("wired-elements").WiredSpinner | React.Attributes<HTMLElement>;
    "wired-tabs": import("wired-elements").WiredTabs | React.Attributes<HTMLElement>;
    "wired-textarea": import("wired-elements").WiredTextarea | React.Attributes<HTMLElement>;
    "wired-toggle": import("wired-elements").WiredToggle | React.Attributes<HTMLElement>;
    "wired-video": import("wired-elements").WiredVideo | React.Attributes<HTMLElement>;
  }
}
