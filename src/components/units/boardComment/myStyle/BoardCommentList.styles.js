import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
    margin: 0 100px 100px 100px;
    width: 1200px;
    padding-bottom: 20px;
    border: none;
    border-bottom: 1px solid #bdbdbd;
    display: flex;
    flex-direction: column;
`;

export const FlexWrapper = styled.div`
    width: 1200px;
    padding-top: 12px;
    display: flex;
    flex-direction: row;
`;

export const Avatar = styled.img`
    width: 48px;
    height: 48px;
    margin-right: 12px;
`;

export const MainWrapper = styled.div`
    width: 1632px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

export const WriterWrapper = styled.div`
    margin-bottom: 4px;
    display: flex;
    flex-direction: row;
`;

export const Writer = styled.div`
    width: 45px;
    margin-right: 16px;
    line-height: 24px;
    font-weight: 500;
    font-size: 16px;
`;

export const Star = styled.div`
    width: 120px;
    background-color: #ffd600;
`;

export const Contents = styled.div`
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    color: #4f4f4f
`;

export const OptionWrapper = styled.div`
    width: 56px;
    display: flex;
    flex-direction: row;
    justify-contents: space-between;
`;

export const UpdateIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    cursor: pointer;
`;

export const DeleteIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const DateString = styled.div`
    width: 100%;
    padding-left: 60px;
    font-weight: 400;
    font-size: 12px;
    color: #bdbdbd;
`;