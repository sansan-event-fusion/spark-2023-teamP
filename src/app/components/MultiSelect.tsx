import { Box, BoxProps } from "@chakra-ui/react";
import {
  ActionMeta,
  MultiValue,
  Select,
  GroupBase,
  OptionBase,
} from "chakra-react-select";
import { useState } from "react";
import Target, { Targets } from "../target";

const MultiSelect = (
  props: BoxProps & { onSelected: (selectedLabels: string[]) => void }
) => {
  const [selectedTargets, setSelectedTargets] = useState<Target[]>([]);

  const handleOnChangeSelectedCats = (
    _newValue: MultiValue<Target>,
    actionMeta: ActionMeta<Target>
  ) => {
    let new_selectedTargets = selectedTargets;

    switch (actionMeta.action) {
      case "select-option":
        if (actionMeta.option) {
          const Targets = actionMeta.option;
          new_selectedTargets = [...selectedTargets, Targets];
          break;
        }
        break;

      case "remove-value":
      case "pop-value":
        if (actionMeta.removedValue) {
          const toDeleteTargets = actionMeta.removedValue;

          new_selectedTargets = selectedTargets.filter(
            (Targets) => Targets.value != toDeleteTargets.value
          );
          break;
        }
        break;

      case "clear":
        new_selectedTargets = [];
        break;
      default:
        break;
    }
    setSelectedTargets(new_selectedTargets);
    props.onSelected(new_selectedTargets.map((target) => target.label));
  };

  return (
    <Box w="100%" {...props}>
      <Select<Target, true, GroupBase<Target>>
        isMulti
        name="multiSelectOptions"
        placeholder="カテゴリを選択"
        options={Targets}
        value={selectedTargets}
        onChange={handleOnChangeSelectedCats}
      />
    </Box>
  );
};

export default MultiSelect;
