import * as S from "./Searchbars.styles";
import type { ISearchbarsUIProps } from "./Searchbars.types";

export default function SearchbarsUI(props: ISearchbarsUIProps): JSX.Element {
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
