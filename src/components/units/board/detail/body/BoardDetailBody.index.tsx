import styled from "@emotion/styled";
import { useQueryIdChecker } from "../../../../commons/hooks/customs/useQueryIdChecker";
import { useQueryFetchBoard } from "../../../../commons/hooks/queries/useQueryFetchBoard";
import BoardDetailBodyTop from "./top/BoardDetailBodyTop.index";
import BoardDetailBodyMiddle from "./middle/BoardDetailBodyMiddle.index";
import BoardDetailBodyBottom from "./bottom/BoardDetailBodyBottom.index";

export const CardWrapper = styled.div`
  boarder: 1px solid black;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export default function BoardDetailBody(): JSX.Element {
  const { id } = useQueryIdChecker("boardId");
  const { data } = useQueryFetchBoard({
    boardId: id,
  });

  return (
    <CardWrapper>
      <BoardDetailBodyTop data={data} />
      <BoardDetailBodyMiddle data={data} />
      <BoardDetailBodyBottom />
    </CardWrapper>
  );
}
