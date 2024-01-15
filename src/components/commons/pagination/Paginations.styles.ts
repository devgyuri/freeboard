import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: col;
`;

export const Page = styled.div`
  width: 30px;
  text-align: center;
  margin: 0px 5px;
  color: ${(props: IPageProps) => (props.isActive ?? false ? "blue" : "black")};
  font-weight: ${(props: IPageProps) =>
    props.isActive ?? false ? "bold" : "normal"};
  cursor: ${(props: IPageProps) =>
    props.isActive ?? false ? "none" : "pointer"};
`;
