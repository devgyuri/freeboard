import type { ChangeEvent } from "react";
import SearchbarsUI from "./Searchbars.presenter";
import type { ISearchbarsProps } from "./Searchbars.types";
import _ from "lodash";

export default function Searchbar(props: ISearchbarsProps): JSX.Element {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 500);

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return <SearchbarsUI onChangeSearchbar={onChangeSearchbar} />;
}
