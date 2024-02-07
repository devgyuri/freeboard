import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useSearch } from "../../../commons/hooks/customs/useSearch";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import { getDate } from "../../../../commons/libraries/utils";
import Paginations from "../../../commons/pagination/Paginations.container";
import Searchbar from "../../../commons/searchbars/Searchbars.container";
import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";

const SECRET = "@#$%^";

export default function BoardList(): JSX.Element {
  const { keyword, onChangeKeyword } = useSearch();
  const { onClickMoveToPage } = useMoveToPage();
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();

  return (
    <S.Wrapper>
      <Searchbar
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        onChangeKeyword={onChangeKeyword}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle onClick={onClickMoveToPage(`/boards/${el._id}`)}>
            {el.title
              .replaceAll(keyword, `${SECRET}${keyword}${SECRET}`)
              .split(SECRET)
              .map((el) => (
                <S.TextToken key={uuidv4()} isMatched={keyword === el}>
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
        <Paginations
          refetch={refetch}
          count={dataBoardsCount?.fetchBoardsCount}
        />
        <S.Button onClick={onClickMoveToPage("/boards/new")}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
