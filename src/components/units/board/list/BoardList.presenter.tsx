import { getDate } from "../../../../commons/libraries/utils";
import Paginations from "../../../commons/pagination/Paginations.container";
import Searchbar from "../../../commons/searchbars/Searchbars.container";
import * as S from "./BoardList.styles";
import type { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";

const SECRET = "@#$%^";

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <Searchbar
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `${SECRET}${props.keyword}${SECRET}`)
              .split(SECRET)
              .map((el) => (
                <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.TextToken>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>
            {typeof el.createdAt === "string" ? getDate(el.createdAt) : ""}
          </S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Paginations refetch={props.refetch} count={props.count} />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
