import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import type { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>
                Date:{" "}
                {typeof props.data?.fetchBoard?.createdAt === "string"
                  ? getDate(props.data?.fetchBoard?.createdAt)
                  : ""}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <S.LinkIcon src="/images/board/detail/link.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }`}
            >
              <S.LocationIcon src="/images/board/detail/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
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
          <S.LikeWrapper>
            <S.IconWrapper>
              <S.LikeIcon rev={false} />
              <S.LikeCount>{props.data?.fetchBoard?.likeCount}</S.LikeCount>
            </S.IconWrapper>
            <S.IconWrapper>
              <S.DisLikeIcon rev={false} />
              <S.DisLikeCount>
                {props.data?.fetchBoard?.dislikeCount}
              </S.DisLikeCount>
            </S.IconWrapper>
          </S.LikeWrapper>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
        <S.Button
          id={props.data?.fetchBoard?._id}
          onClick={props.onClickDelete}
        >
          삭제하기
        </S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
