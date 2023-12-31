import { Box, BoxProps, Input } from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";

const UploadFile = (props: BoxProps & { onSelected: (file: File) => void }) => {
  const [file, setFiles] = useState<File | null>(null); // 選択したファイルを配列で格納
  const attachRef = useRef<HTMLInputElement>(null); // ファイル選択のコントロールを参照
  const [fileSelected, setFileSelected] = useState(false); // ファイルが選択されたかどうかの状態

  // ファイル選択イベント
  const handleInputFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files || !files.length) return; // ファイルがない場合は処理終了
      const newFile = files[0]; // FileListを配列に変換
      setFiles(newFile); // 選択したファイルを変数に追加
      setFileSelected(true); // ファイルが選択されたことを記録
      if (attachRef.current) attachRef.current.value = ""; // 内部的なファイルの選択状態をクリア
      props.onSelected(newFile);
    },
    []
  );

  // ファイルを削除する関数
  const handleFileDelete = () => {
    setFiles(null);
    setFileSelected(false); // ファイルが選択されていない状態に戻す
  };

  return (
    <>
      <Box {...props}>
        <Input
          type="button"
          value="画像を選択してください"
          onClick={() => !fileSelected && attachRef.current?.click()}
          disabled={fileSelected}
        ></Input>
        <Input
          type="file"
          style={{ display: "none" }}
          ref={attachRef}
          onChange={handleInputFileChange}
        ></Input>
      </Box>
      <Box
        bg={"#EDF2F6"}
        borderRadius="10px"
        width={"fit-content"}
        ps={3}
        pe={3}
        mt={4}
      >
        {/* 後に複数枚画像をアップロードする時のため(中長期)を考えてmap関数 */}
        {file && (
          <Box key={file.name}>
            {file.name}
            <Box
              as="button"
              fontSize={22}
              bg="transparent"
              color="#838991"
              ms={2}
              onClick={() => handleFileDelete()}
            >
              ×
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default UploadFile;
