import { Box, BoxProps } from "@chakra-ui/react";
import {
  ActionMeta,
  MultiValue,
  Select,
  GroupBase,
  OptionBase,
} from "chakra-react-select";
import { useState } from "react";

class Target implements OptionBase {
  constructor(
    public value: string,
    public label: string,
    public colorScheme: string
  ) {}
}

const MultiSelect = (
  props: BoxProps & { onChange: (selectedOptions: Target[]) => void }
) => {
  const Targets: Target[] = [
    new Target("beginner", "初心者大歓迎", "gray"),
    new Target("everyone", "誰でも！", "blue"),
    new Target("enjoy", "楽しくワイワイ", "yellow"),
    new Target("seriously", "がち🔥", "pink"),
    new Target("student", "学生限定", "green"),
    new Target("society", "社会人大歓迎", "red"),
    new Target("Loosely", "ゆるーく", "purple"),
    new Target("rag", "誰か案ちょうだい", "teal"),
    new Target("munch", "誰か案ちょうだい", "orange"),
  ];

  const [selectedTargets, setSelectedTargets] = useState<Target[]>([]);

  const handleOnChangeSelectedCats = (
    _newValue: MultiValue<Target>,
    actionMeta: ActionMeta<Target>
  ) => {
    switch (actionMeta.action) {
      case "select-option":
        if (actionMeta.option) {
          const Targets = actionMeta.option;
          setSelectedTargets((prev) => [...prev, Targets]);
          break;
        }
        break;

      case "remove-value":
      case "pop-value":
        if (actionMeta.removedValue) {
          const toDeleteTargets = actionMeta.removedValue;

          setSelectedTargets((prev) =>
            prev.filter((Targets) => Targets.value != toDeleteTargets.value)
          );
          break;
        }
        break;

      case "clear":
        setSelectedTargets([]);
        break;
      default:
        break;
    }
    props.onChange(selectedTargets);
  };

  return (
    <Box w="100%" {...props}>
      <Select<Target, true, GroupBase<Target>>
        isMulti
        name="multiSelectOptions"
        placeholder="複数選択"
        options={Targets}
        value={selectedTargets}
        onChange={handleOnChangeSelectedCats}
      />
    </Box>
  );
};

export default MultiSelect;
