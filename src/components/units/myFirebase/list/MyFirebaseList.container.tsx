import { useEffect, useState } from "react";
import MyFirebaseListUI from "./MyFirebaseList.presenter";
import { collection, getFirestore, getDocs } from "firebase/firestore/lite";
import type { DocumentData } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { firebaseApp } from "../../../../commons/libraries/firebase";

export default function MyFirebaseList(): JSX.Element {
  const router = useRouter();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchBoards = async (): Promise<void> => {
      // eslint-disable-next-line
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setDataBoards(boards);
    };
    void fetchBoards();
  }, []);

  const onClickMoveToBoardNew = (): void => {
    void router.push("/myFirebase/new");
  };

  return (
    <MyFirebaseListUI
      dataBoards={dataBoards}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}
