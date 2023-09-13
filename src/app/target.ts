import { OptionBase } from "chakra-react-select";

export class Target implements OptionBase {
  constructor(
    public value: string,
    public label: string,
    public colorScheme: string
  ) {}
}

export const Targets: Target[] = [
  new Target("beginner", "初心者大歓迎", "gray"),
  new Target("everyone", "誰でも！", "blue"),
  new Target("enjoy", "楽しくワイワイ", "yellow"),
  new Target("seriously", "がち🔥", "pink"),
  new Target("student", "学生限定", "green"),
  new Target("society", "社会人大歓迎", "red"),
  new Target("Loosely", "ゆるーく", "purple"),
  new Target("remote", "オンライン", "teal"),
  new Target("coders", "コーダー大歓迎", "orange"),
];

function findColorScheme(label: string) {
  return Targets.find((target) => target.label == label)?.colorScheme;
}

export function getColorScheme(label: string, defaultColor: string = "gray") {
  return findColorScheme(label) || defaultColor;
}

export default Target;
