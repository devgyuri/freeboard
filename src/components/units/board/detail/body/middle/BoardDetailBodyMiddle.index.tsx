import { useBoardLike } from "../../../../../commons/hooks/customs/useBoardLike";
import { useQueryIdChecker } from "../../../../../commons/hooks/customs/useQueryIdChecker";
import * as S from "./BoardDetailBodyMiddle.styles";
import { type IBoardDetailBodyProps } from "./BoardDetailBodyMiddle.types";

export default function BoardDetailBodyMiddle(
  props: IBoardDetailBodyProps,
): JSX.Element {
  const { id: boardId } = useQueryIdChecker("boardId");
  const { onClickLike, onClickDislike } = useBoardLike({
    boardId,
  });

  return (
    <S.Body>
      <S.Title>{props.data?.fetchBoard?.title}</S.Title>
      <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
      {props.data?.fetchBoard.youtubeUrl !== "" && (
        <S.Youtube
          url={props.data?.fetchBoard.youtubeUrl ?? ""}
          width="486px"
          height="240px"
        />
      )}
      <S.ImageWrapper>
        {props.data?.fetchBoard.images
          ?.filter((el) => el)
          .map((el) => (
            <S.Image key={el} src={`https://storage.googleapis.com/${el}`} />
          ))}
      </S.ImageWrapper>
      <S.LikeWrapper>
        <S.IconWrapper>
          <S.LikeIcon rev={false} onClick={onClickLike} />
          <S.LikeCount>{props.data?.fetchBoard?.likeCount}</S.LikeCount>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.DisLikeIcon rev={false} onClick={onClickDislike} />
          <S.DisLikeCount>
            {props.data?.fetchBoard?.dislikeCount}
          </S.DisLikeCount>
        </S.IconWrapper>
      </S.LikeWrapper>
    </S.Body>
  );
}
