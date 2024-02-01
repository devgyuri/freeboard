import type { ApolloQueryResult } from "@apollo/client";
import type { ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";

export interface ISearchbarsProps {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbarsUIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
