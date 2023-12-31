import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { TQuestionMessage } from "@/app/type";
import { getMockData, setMockData, mock } from "@/app/api/query";

type QuestionBar = {
  question: string;
};

export default function QuestionBar() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuestionBar>();

  const onSubmit = handleSubmit((data) => {
    const questionMessage: TQuestionMessage = {
      body: data.question,
      created_at: new Date()
    };
    const prev = getMockData(["getQuestion", 1]) as TQuestionMessage[];
    setMockData(["getQuestion", 1], [...prev, questionMessage]);
    reset();
  });

  return (
    <>
      <Box position={"relative"} mt={10}>
        <form onSubmit={onSubmit}>
          <FormControl mb={5}>
            <FormLabel htmlFor="question">匿名質問広場</FormLabel>
            <Textarea
              rows={10}
              placeholder="匿名で主催者に対し、イベントに関する質問を送ることができます。気になったことをコメントしてみましょう！"
              borderRadius={"lg"}
              id="question"
              {...register("question", {
                // 後ほどここにバリデーションを追加
              })}
            />
          </FormControl>
          <Button
            width="30%"
            bg="orange.500"
            color="white"
            isLoading={isSubmitting}
            type="submit"
            position={"absolute"}
            right={0}
          >
            送信
          </Button>
        </form>
      </Box>
    </>
  );
}
