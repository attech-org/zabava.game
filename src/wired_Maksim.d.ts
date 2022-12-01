interface WiredSearchInput {
  placeholder: string;
  disabled: boolean;
  value: string;
}

interface WiredSlider {
  value: number;
  min: number;
  max: number;
}

interface WiredSpinner {
  spinning: boolean;
  duration: number;
  value: string;
}

interface WiredTabs {
  selected: string;
  name: string;
  label: string;
}

interface WiredTextarea {
  rows: number;
  maxrows: number;
  value: string;
  disabled: boolean;
  placeholder: string;
}
interface WiredToggle {
  checked: boolean;
  disabled: boolean;
}

interface WiredVideo {
  src: string;
  autoplay: boolean;
  loop: boolean;
  muted: boolean;
  playsinline: boolean;
}






