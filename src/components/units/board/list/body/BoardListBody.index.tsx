import { getDate } from "../../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import * as S from "./BoardListBody.styles";
import { v4 as uuidv4 } from "uuid";
import { type IBoardListBodyProps } from "./BoardListBody.types";

const SECRET = "@#$%";

export default function BoardListBody(props: IBoardListBodyProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el, index) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle onClick={onClickMoveToPage(`/boards/${el._id}`)}>
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
    </>
  );
}
