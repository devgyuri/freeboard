import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentList() {
    const router = useRouter();
    const [boardCommentId, setBoardCommentId] = useState("");
    const [password, setPassword] = useState("");

    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

    const {data} = useQuery(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.boardId
        }
    })

    const onClickDelete = async (event) => {
        setBoardCommentId(event.target.id);
        console.log(event.currentTarget._id);
        try {
            await deleteBoardComment({
                variables: {
                    password,
                    boardCommentId
                },
                refetchQueries: {
                    query: FETCH_BOARD_COMMENTS,
                    variables: {
                        boardId: router.query.boardId
                    }
                }
            });
        } catch(error) {
            alert(error.message);
        }
    };
    
    return(
        <BoardCommentListUI
            data={data}
            onClickDelete={onClickDelete}
        />
    );
};