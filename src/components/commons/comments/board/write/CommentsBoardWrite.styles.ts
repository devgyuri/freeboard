import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px 40px 100px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PencilIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Label = styled.span`
  margin-left: 12px;
  height: 24px;
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-contents: flex-start;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding: 0px 20px;
  border: 1px solid #bdbdbd;
  margin-right: 20px;
  font-size: 16px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  resize: none;

  ::placeholder {
    color: #bdbdbd;
    font-size: 16px;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: #bdbdbd;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const Star = styled(Rate)`
  height: 24px;
  font-size: 16px;
  color: #fd600;
`;
