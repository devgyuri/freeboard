import { useMutationLikeBoard } from "../mutations/useMutationLikeBoard";
import { useMutationDislikeBoard } from "../mutations/useMutationDislikeBoard";
import { FETCH_BOARD } from "../queries/useQueryFetchBoard";

interface IUseBoardLikeArgs {
  boardId: string;
}

interface IUseBoardLike {
  onClickLike: () => Promise<void>;
  onClickDislike: () => Promise<void>;
}

export const useBoardLike = (args: IUseBoardLikeArgs): IUseBoardLike => {
  const [likeBoard] = useMutationLikeBoard();
  const [dislikeBoard] = useMutationDislikeBoard();

  const onClickLike = async (): Promise<void> => {
    await likeBoard({
      variables: { boardId: args.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: args.boardId },
        },
      ],
    });
  };

  const onClickDislike = async (): Promise<void> => {
    await dislikeBoard({
      variables: { boardId: args.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: args.boardId },
        },
      ],
    });
  };

  return {
    onClickLike,
    onClickDislike,
  };
};
