import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";

export default function LayoutHeader(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage("/boards")}>💎 LIVE</InnerLogo>
        <div>
          <InnerButton onClick={onClickMoveToPage("/login")}>
            로그인
          </InnerButton>
          <InnerButton>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
