"use client";
import { useForm } from "react-hook-form";
import { FormLabel, FormControl, Input, Button, Box, Textarea } from "./common";
import MultiSelect from "./MultiSelect";
import UploadFile from "./UploadFile";

// フォームで使用する変数の型を定義
type formInputs = {
  title: string;
  description: string;
  area: string;
  targets: string;
  uploadFile: File;
  peopleLimit: number;
};

const RecruitmentForm = () => {
  // React Hook Formでバリデーションやフォームが送信されたときの処理などを書くために必要な
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<formInputs>();

  // フォームが送信されたときの処理
  const onSubmit = handleSubmit((data) => {
    // フォームで入力されたデータをコンソールに表示
    console.log(data);
  });

  return (
    <Box m={4}>
      <form onSubmit={onSubmit}>
        <FormControl mb={5}>
          <FormLabel htmlFor="title">タイトル</FormLabel>
          <Input
            id="title"
            {...register("title", {
              // 後ほどここにバリデーションを追加
            })}
          />
        </FormControl>
        <FormControl mb={5}>
          <FormLabel>詳細</FormLabel>
          <Textarea
            rows={15}
            borderRadius={"lg"}
            id="description"
            {...register("description", {
              // 後ほどここにバリデーションを追加
            })}
          />
        </FormControl>
        <FormControl mb={5}>
          <FormLabel htmlFor="area">対象地域</FormLabel>
          <Input
            id="area"
            {...register("area", {
              // 後ほどここにバリデーションを追加
            })}
          />
        </FormControl>
        <FormControl mb={5}>
          <FormLabel htmlFor="targets">対象者</FormLabel>
          <MultiSelect
            id="targets"
            {...register("targets", {
              // 後ほどここにバリデーションを追加
            })}
            onChange={(selectedOptions) => {
              // 選択されたオプションを処理するためのコードをここに追加
              console.log("選択されたオプション:", selectedOptions);
            }}
          />
        </FormControl>
        <FormControl mb={5}>
          <FormLabel htmlFor="uploadFile">サムネイル画像</FormLabel>
          <UploadFile
            id="uploadFile"
            {...register("uploadFile", {
              // 後ほどここにバリデーションを追加
            })}
          />
          <Button
            width="100%"
            mt={7}
            colorScheme="orange"
            isLoading={isSubmitting}
            type="submit"
          >
            募集する
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default RecruitmentForm;
