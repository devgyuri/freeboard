import { type ApolloQueryResult } from "@apollo/client";
import _ from "lodash";
import { type ChangeEvent, useState } from "react";
import { type IQuery } from "../../../../commons/types/generated/types";

interface IUseSearchbar {
  keyword: string;
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface IUseSearchbarArgs {
  refetch: (
    variable?: Partial<any> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  refetchBoardsCount: (
    variables?: Partial<any> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

export const useSearchbar = (args: IUseSearchbarArgs): IUseSearchbar => {
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((value: string) => {
    void args.refetch({ search: value, page: 1 });
    void args.refetchBoardsCount({ search: value });
    setKeyword(value);
  }, 500);

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return {
    keyword,
    onChangeSearchbar,
  };
};
