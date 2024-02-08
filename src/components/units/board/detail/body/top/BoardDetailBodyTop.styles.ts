import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div`
  font-size: 20px;
`;

export const CreatedAt = styled.div`
  font-size: 15px;
  color: #bdbdbd;
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const LocationIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const LinkIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;
