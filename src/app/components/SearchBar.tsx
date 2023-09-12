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

type SearchForm = {
  keywords: string;
  targets: string[];
};

export default function SearchBar() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<SearchForm>();

  // フォームが送信されたときの処理
  const onSubmit = handleSubmit((data) => {
    // フォームで入力されたデータをコンソールに表示
    console.log(data);
  });

  return (
    <>
      <Box>
        <form onSubmit={onSubmit}>
          <FormControl mb={5}>
            <FormLabel htmlFor="keywords" />
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                id="keywords"
                {...register("keywords", {
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
