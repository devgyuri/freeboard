import * as S from "./CommentsBoardView.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import { type ICommentsBoardViewProps } from "./CommentsBoardView.types";
import { useToggle } from "../../../hooks/customs/useToggle";
import { useQueryIdChecker } from "../../../hooks/customs/useQueryIdChecker";
import { useBoardComment } from "../../../hooks/customs/useBoardComment";
import CommentsBoardWrite from "../write/CommentsBoardWrite.index";

export default function CommentsBoardView(
  props: ICommentsBoardViewProps,
): JSX.Element {
  const { id } = useQueryIdChecker("boardId");
  const [isEdit, onToggleEdit] = useToggle();
  const [isOpen, onToggleModal] = useToggle();
  const { onClickDelete, onChangeDeletePassword } = useBoardComment({
    boardId: id,
    boardCommentId: props.el._id,
  });

  return (
    <>
      {isOpen && (
        <S.PasswordModal
          open={true}
          onOk={onClickDelete}
          onCancel={onToggleModal}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
                <S.Star value={props.el?.rating} disabled allowHalf />
              </S.WriterWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png"
                onClick={onToggleEdit}
              />
              <S.DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png"
                onClick={onToggleModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>
            {typeof props.el?.createdAt === "string"
              ? getDate(props.el?.createdAt)
              : ""}
          </S.DateString>
        </S.ItemWrapper>
      )}
      {isEdit && (
        <CommentsBoardWrite
          isEdit={true}
          onToggleEdit={onToggleEdit}
          el={props.el}
        />
      )}
    </>
  );
}
