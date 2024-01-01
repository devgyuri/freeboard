import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export default function BoardDetail() {
    const router = useRouter();
    if(!router || typeof router.query.boardId !== "string") {
        return <></>;
    }

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    });
    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onClickMoveToBoardList = () => {
        router.push("/boards")
    };

    const onClickDelete = (event: any) => {
        deleteBoard({
            variables: {
                boardId: event.target.id
            }
        });
        router.push("/boards");
    };

    const onClickMoveToBoardEdit = () => {
        router.push(`/boards/${router.query.boardId}/edit`);
    };

    return(
        <BoardDetailUI 
            data={data}
            onClickMoveToBoardList={onClickMoveToBoardList}
            onClickDelete={onClickDelete}
            onClickMoveToBoardEdit={onClickMoveToBoardEdit}
        />
    );
};