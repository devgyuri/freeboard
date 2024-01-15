import { Page, PageWrapper } from "./Paginations.styles";
import type { IPaginationsUIProps } from "./Paginations.types";

export default function PaginationsUI(props: IPaginationsUIProps): JSX.Element {
  return (
    <div>
      <PageWrapper>
        <Page onClick={props.onClickPrevPage}>{`<`}</Page>
        {new Array(10).fill(1).map(
          (_, index) =>
            props.startPage + index <= props.lastPage && (
              <Page
                key={props.startPage + index}
                onClick={props.onClickPage}
                id={String(props.startPage + index)}
                isActive={props.startPage + index === props.activedPage}
              >
                {props.startPage + index}
              </Page>
            ),
        )}
        <Page onClick={props.onClickNextPage}>{`>`}</Page>
      </PageWrapper>
    </div>
  );
}
