import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import type {
  IQuery,
  IQueryFetchBoardArgs,
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") {
    return <></>;
  }

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: router.query.boardId,
      },
    },
  );
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickMoveToBoardList = (): void => {
    void router.push("/boards");
  };

  const onClickDelete = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!(event.target instanceof HTMLButtonElement)) {
      return;
    }
    void deleteBoard({
      variables: {
        boardId: event.target.id,
      },
    });
    void router.push("/boards");
  };

  const onClickMoveToBoardEdit = (): void => {
    if (typeof router.query.boardId !== "string") {
      return;
    }
    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickDelete={onClickDelete}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    />
  );
}
