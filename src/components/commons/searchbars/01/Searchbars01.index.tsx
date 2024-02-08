import * as S from "./Searchbars01.styles";
import type { ISearchbars01Props } from "./Searchbars01.types";

export default function Searchbars01(props: ISearchbars01Props): JSX.Element {
  return (
    <S.Searchbar>
      <S.FireFilledIcon rev={false} />
      <S.SearchbarInput
        placeholder="검색어를 입력해주세요."
        onChange={props.onChangeSearchbar}
      />
    </S.Searchbar>
  );
}
