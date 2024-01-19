import * as S from "./OpenapiList.styles";
import type { IOpenapiListUIProps } from "./OpenapiList.types";

export default function OpenapiListUI(props: IOpenapiListUIProps): JSX.Element {
  console.log(props.imgUrls);
  return (
    <S.Wrapper>
      <div>
        {props.imgUrls.map((el, index) => (
          <>
            <S.DogImg key={el} src={el} />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </S.Wrapper>
  );
}
