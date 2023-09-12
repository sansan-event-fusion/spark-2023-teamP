import React, { useState } from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      border="1px solid #ccc"
      borderRadius="5px"
      p="5px"
      bg="#f0f0f0"
      mt={3}
      mb={5}
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="キーワードを入力"
          border="none"
          _focus={{
            border: "none",
          }}
          borderRadius="5px"
        />
      </InputGroup>
    </Box>
  );
}
