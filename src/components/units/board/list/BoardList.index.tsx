import styled from "@emotion/styled";
import { useSearchbar } from "../../../commons/hooks/customs/useSearchbar";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import Paginations01 from "../../../commons/pagination/01/Paginations01.index";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.index";
import { usePagination } from "../../../commons/hooks/customs/usePagenation";
import BoardListHeader from "./header/BoardListHeader.index";
import BoardListBody from "./body/BoardListBody.index";
import BoardListFooter from "./footer/BoardListFooter.index";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export default function BoardList(): JSX.Element {
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();

  const paginationArgs = usePagination({
    refetch,
    count: dataBoardsCount?.fetchBoardsCount,
  });

  const { keyword, onChangeSearchbar } = useSearchbar({
    refetch,
    refetchBoardsCount,
  });

  return (
    <Wrapper>
      <BoardListHeader>
        <Searchbars01 onChangeSearchbar={onChangeSearchbar} />
      </BoardListHeader>
      <BoardListBody data={data} keyword={keyword} />
      <BoardListFooter>
        <Paginations01 {...paginationArgs} />
      </BoardListFooter>
    </Wrapper>
  );
}
