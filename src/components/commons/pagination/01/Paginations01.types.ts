import type { MouseEvent } from "react";

export interface IPaginations01Props {
  startPage: number;
  activedPage: number;
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
