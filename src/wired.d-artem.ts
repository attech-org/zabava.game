interface WiredIconButton {
  disabled: boolean;
}

interface WiredImage {
  src: string;
  elevetion: number;
}

interface WiredInput {
  placeholder: string;
  disabled: boolean;
  type: string;
  value: string;
}

interface WiredLink {
  elevetion: number;
  href: string;
  target: string;
}

interface WiredListbox {
  id: string;
  horizontal: boolean;
  selected: string;
}
interface WiredItem {
  value: string;
}

interface WiredProgress {
  value: number;
  min: number;
  max: number;
  percentage: boolean;
}

interface WiredRadio {
  checked: boolean;
  disabled: boolean;
  text: string;
  name: string;
}
