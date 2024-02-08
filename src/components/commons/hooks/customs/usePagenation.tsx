import { type ApolloQueryResult } from "@apollo/client";
import { type IQuery } from "../../../../commons/types/generated/types";
import { useState, type MouseEvent } from "react";

interface IUsePaginationArgs {
  count: number | undefined;
  refetch: (
    variables?: Partial<any> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

interface IUsePagination {
  startPage: number;
  activedPage: number;
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export const usePagination = (args: IUsePaginationArgs): IUsePagination => {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivePage] = useState(1);
  const lastPage = args.count != null ? Math.ceil(args.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const activedPage = Number(event.currentTarget.id);
    setActivePage(activedPage);
    void args.refetch({ page: activedPage });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) {
      return;
    }
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    void args.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      void args.refetch({ page: startPage + 10 });
    }
  };

  return {
    startPage,
    activedPage,
    lastPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
  };
};
