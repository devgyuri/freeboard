import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";

export default function BoardCommentWrite() {
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");
    const [star, setStar] = useState("");

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
    };

    const onClickWrite = async () => {
        try {
            await createBoardComment({
                variables: {
                    createBoardInput: {
                        writer,
                        password,
                        contents,
                        rating: star,
                    },
                    boardId: router.query.boardId,
                },
                refetchQueries: [{
                    query: FETCH_BOARD_COMMENTS,
                    variables: {
                        boardId: router.query.boardId
                    }
                }]
            });
        } catch(error) {
            alert(error.message);
        }

        setWriter("");
        setPassword("");
        setContents("");
    };

    return(
        <BoardCommentWriteUI
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            onClickWrite={onClickWrite}
            writer={writer}
            password={password}
            contents={contents}
            setStar={setStar}
        />
    );
};