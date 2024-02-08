import { type MutationTuple, gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const useMutationLikeBoard = (): MutationTuple<
  Pick<IMutation, "likeBoard">,
  IMutationLikeBoardArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  return mutation;
};
