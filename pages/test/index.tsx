import BoardCommentWrite from "../../src/components/units/boardComment/write/BoardCommentWrite.container";
import BoardCommentList from "../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardDetail from "../../src/components/units/board/detail/BoardDetail.container";

export default function TestPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
