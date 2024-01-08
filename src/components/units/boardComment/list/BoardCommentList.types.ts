import type { IQuery } from "../../../../commons/types/generated/types";
import type { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  isOpenDeleteModal: boolean;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeletePassword: (evnet: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteCancel: (event: MouseEvent<HTMLButtonElement>) => void;
}
