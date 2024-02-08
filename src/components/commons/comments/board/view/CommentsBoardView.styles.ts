import styled from "@emotion/styled";
import { Rate, Modal } from "antd";

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid #bdbdbd;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Writer = styled.div`
  height: 24px;
  line-height: 24px;
  font-size: 20px;
  font-weight: 500;
  font-size: 16px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
  font-size: 16px;
  height: 24px;
  color: #ffd600;
`;

export const Contents = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 8px;
`;

export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  padding: 15px 0px 0px 60px;
  font-weight: 400;
  font-size: 12px;
  color: #bdbdbd;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
`;
