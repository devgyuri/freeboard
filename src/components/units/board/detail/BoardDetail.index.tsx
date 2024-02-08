import BoardDetailHeader from "./header/BoardDetailHeader.index";
import BoardDetailBody from "./body/BoardDetailBody.index";
import BoardDetailFooter from "./footer/BoardDetailFooter.index";

export default function BoardDetail(): JSX.Element {
  return (
    <>
      <BoardDetailHeader />
      <BoardDetailBody />
      <BoardDetailFooter />
    </>
  );
}
