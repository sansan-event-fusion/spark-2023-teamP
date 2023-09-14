import React, { useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import MultiSelect from "./MultiSelect";
import { useForm } from "react-hook-form";
import { TCondition } from "../type";

type SearchForm = {
  keyword: string;
  targets: string[];
};

type Props = {
  onChange: (data: TCondition) => void;
};

export default function SearchBar({ onChange }: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<SearchForm>();

  const onSubmit = handleSubmit((data) => {
    const { keyword, targets } = data;
    let condition: TCondition = { keyword, targets };

    if (!condition.keyword || condition.keyword === "") {
      condition.keyword = undefined;
    }
    if (!condition.targets || condition.targets.length === 0) {
      condition.targets = undefined;
    }

    onChange(condition);
  });

  return (
    <>
      <Box>
        <form onSubmit={onSubmit}>
          <FormControl mb={5}>
            <FormLabel htmlFor="keyword" />
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                id="keyword"
                {...register("keyword", {
                  // 後ほどここにバリデーションを追加
                })}
              />
            </InputGroup>
          </FormControl>
          <MultiSelect
            id="targets"
            onSelected={(selectedLabel: string[]) => {
              setValue("targets", selectedLabel);
            }}
          />
          <Button
            width="100%"
            mt={5}
            bg="orange.500"
            color="white"
            isLoading={isSubmitting}
            type="submit"
            mb={7}
          >
            検索する
          </Button>
        </form>
      </Box>
    </>
  );
}
