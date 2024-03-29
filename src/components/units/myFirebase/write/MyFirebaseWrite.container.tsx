import { useState } from "react";
import type { ChangeEvent } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore/lite";
import MyFirebaseWriteUI from "./MyFirebaseWrite.presenter";
import { useRouter } from "next/router";
import { firebaseApp } from "../../../../commons/libraries/firebase";

export default function MyFirebaseWrite(): JSX.Element {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async (): Promise<void> => {
    // eslint-disable-next-line
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, { writer, title, contents });
    alert("게시물 등록에 성공하였습니다.");
    void router.push("/myFirebase");
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  return (
    <MyFirebaseWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
