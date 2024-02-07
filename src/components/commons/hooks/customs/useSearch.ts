import { useState } from "react";

interface IUseSearch {
  keyword: string;
  onChangeKeyword: (value: string) => void;
}

export const useSearch = (): IUseSearch => {
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return {
    keyword,
    onChangeKeyword,
  };
};
