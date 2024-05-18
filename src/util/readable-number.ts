import readable from "readable-numbers";

export function readableNumber(n: number) {
  return readable(n, 1, true);
}
