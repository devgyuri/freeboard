import { type ChangeEvent, useState } from "react";
import { useMutationCreateBoardComment } from "../mutations/useMutationCreateBoardComment";
import { useMutationUpdateBoardComment } from "../mutations/useMutationUpdateBoardComment";
import { useMutationDeleteBoardComment } from "../mutations/useMutationDeleteBoardComment";
import { FETCH_BOARD_COMMENTS } from "../queries/useQueryFetchBoardComments";

interface IUpdateBoardCommentInput {
  contents?: string;
}

interface IUseBoardCommentArgs {
  boardId: string;
  boardCommentId?: string;
  onToggleEdit?: () => void;
}

interface IUseBoardComment {
  onClickWrite: (data: any) => Promise<void>;
  onClickUpdate: (data: any) => Promise<void>;
  onClickDelete: () => Promise<void>;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useBoardComment = (
  args: IUseBoardCommentArgs,
): IUseBoardComment => {
  const [myPassword, setMyPassword] = useState("");
  const [createBoardComment] = useMutationCreateBoardComment();
  const [updateBoardComment] = useMutationUpdateBoardComment();
  const [deleteBoardComment] = useMutationDeleteBoardComment();

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setMyPassword(event.target.value);
  };

  const onClickDelete = async (): Promise<void> => {
    if (args.boardCommentId === null || args.boardCommentId === undefined) {
      return;
    }
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: args.boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: args.boardId,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickWrite = async (data: any): Promise<void> => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: data.write,
            password: data.password,
            contents: data.contents,
            rating: 0,
          },
          boardId: args.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: args.boardId,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdate = async (data: any): Promise<void> => {
    if (data.contents === "") {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (data.password === "") {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (data.contents !== "") {
        updateBoardCommentInput.contents = data.contents;
      }
      if (args.boardCommentId === undefined || args.boardCommentId === null) {
        return;
      }
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: data.password,
          boardCommentId: args.boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: args.boardId },
          },
        ],
      });
      if (args.onToggleEdit !== undefined) {
        args.onToggleEdit();
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    onClickWrite,
    onClickUpdate,
    onClickDelete,
    onChangeDeletePassword,
  };
};
