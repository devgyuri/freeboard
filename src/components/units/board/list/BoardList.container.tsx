import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useState, type MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList(): JSX.Element {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLDivElement>,
  ): void => {
    if (event.target instanceof HTMLDivElement) {
      void router.push(`/boards/${event.target.id}`);
    }
  };

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      count={dataBoardsCount?.fetchBoardsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
