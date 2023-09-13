"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { FormLabel, FormControl, Input, Button, Box, Textarea } from "./common";
import MultiSelect from "./MultiSelect";
import UploadFile from "./UploadFile";
import { createRecruitment } from "../api/helper";
import { configAtom, credentialAtom } from "../atom";

// フォームで使用する変数の型を定義
type formInputs = {
  title: string;
  description: string;
  area: string;
  targets: string[];
  uploadFile: File;
  peopleLimit: number;
};

const RecruitmentForm = () => {
  const router = useRouter();
  const credential = useRecoilValue(credentialAtom)!;
  const config = useRecoilValue(configAtom)!;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<formInputs>();

  const onSubmit = handleSubmit(async (data) => {
    data.peopleLimit = data.peopleLimit || 1; // TODO

    if (config.mocked) {
      console.log("create recruitment");
      console.log({
        userId: credential.id,
        title: data.title,
        description: data.description,
        area: data.area,
        peopleLimit: data.peopleLimit,
        targets: data.targets,
        uploadFile: data.uploadFile,
      });

      router.push("/");

      return;
    }

    await createRecruitment(
      credential.id,
      data.title,
      data.description,
      data.area,
      data.peopleLimit,
      data.targets,
      data.uploadFile);

    router.push("/");
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
            onSelected={(selectedLabel: string[]) => {
              setValue("targets", selectedLabel);
            }}
          />
        </FormControl>
        <FormControl mb={5}>
          <FormLabel htmlFor="uploadFile">サムネイル画像</FormLabel>
          <UploadFile
            id="uploadFile"
            onSelected={(file: File) => {
              setValue("uploadFile", file);
            }}
          />
        </FormControl>
        <Button
          width="100%"
          mt={7}
          colorScheme="orange"
          isLoading={isSubmitting}
          type="submit"
        >
          募集する
        </Button>
      </form>
    </Box>
  );
};

export default RecruitmentForm;
