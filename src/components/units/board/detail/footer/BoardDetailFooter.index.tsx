import CommentsBoardView from "../../../../commons/comments/board/view/CommentsBoardView.index";
import CommentsBoardWrite from "../../../../commons/comments/board/write/CommentsBoardWrite.index";
import { useQueryIdChecker } from "../../../../commons/hooks/customs/useQueryIdChecker";
import { useQueryFetchBoardComments } from "../../../../commons/hooks/queries/useQueryFetchBoardComments";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardDetailFooter(): JSX.Element {
  const { id } = useQueryIdChecker("boardId");
  const { data, fetchMore } = useQueryFetchBoardComments({
    boardId: id,
  });

  const onLoadMore = (): void => {
    if (data === null || data === undefined) {
      return;
    }

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (
          fetchMoreResult?.fetchBoardComments === undefined ||
          fetchMoreResult?.fetchBoardComments === null
        ) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <>
      <CommentsBoardWrite />
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchBoardComments.map((el) => (
          <CommentsBoardView key={el._id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </>
  );
}
