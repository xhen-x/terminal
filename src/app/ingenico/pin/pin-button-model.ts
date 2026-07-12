export interface PinpadButton {
  label?: string;          // ← make optional with ?
  value: string;
  row: number;
  col: number;
  type?: 'number' | 'action' | 'special';
  rowSpan?: number;
  colSpan?: number;
  letters?: string[];
}