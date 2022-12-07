declare namespace JSX {
  interface IntrinsicElements {
    "wired-button": import("wired-elements").WiredButton | React.ButtonHTMLAttributes<HTMLButtonElement>;
    "wired-calendar": import("wired-elements").WiredCalendar | React.HTMLAttributes<HTMLElement>;
    "wired-card": import("wired-elements").WiredCard | React.HTMLAttributes<HTMLElement>;
    "wired-checkbox": import("wired-elements").WiredCheckbox | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-combo": import("wired-elements").WiredCombo | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-dialog": import("wired-elements").WiredDialog | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-divider": import("wired-elements").WiredDivider | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-fab": import("wired-elements").WiredFab | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-icon-button": import("wired-elements").WiredIconButton | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-image": import("wired-elements").WiredImage | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-input": import("wired-elements").WiredInput | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-link": import("wired-elements").WiredLink | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-listbox": import("wired-elements").WiredListbox | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-progress": import("wired-elements").WiredProgress | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-radio": import("wired-elements").React.HtmlHTMLAttributes<HTMLElement> | WiredRadio;
    "wired-search-input": import("wired-elements").WiredSearchInput | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-slider": import("wired-elements").WiredSlider | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-spinner": import("wired-elements").WiredSpinner | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-tabs": import("wired-elements").WiredTabs | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-textarea": import("wired-elements").WiredTextarea | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-toggle": import("wired-elements").WiredToggle | React.HtmlHTMLAttributes<HTMLElement>;
    "wired-video": import("wired-elements").WiredVideo | React.HtmlHTMLAttributes<HTMLElement>;
  }
}
