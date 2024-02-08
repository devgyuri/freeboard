import { Fragment } from "react";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";

const NAVIGATION_MENUS = [
  { name: "firebase", page: "/myFirebase" },
  { name: "라이브강아지", page: "/openapis" },
  { name: "라이브게시판", page: "/boards" },
  { name: "라이브상품", page: "/markets" },
  { name: "라이브페이지", page: "/mypages" },
];

export default function LayoutNavigation(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem onClick={onClickMoveToPage(el.page)}>{el.name}</MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
