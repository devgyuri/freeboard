import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
    width: 1200px;
    margin: 100px 100px 20px 100px;
    display: flex;
    flex-direction: column;
`;

export const LabelWrapper = styled.div`
    display: flex;
    margin-bottom: 40px;
    flex-direction: row;
    justify-contents: left;
    align-items: center;
`;

export const CommentIcon = styled.img`
    width: 24px;
    height: 24px
`;

export const Label = styled.div`
    margin-left: 12px;
    height: 27px;
    line-height: 27px;
    font-weight: 500;
    font-size: 18px;
`;

export const WriterWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-contents: left;
`;

export const Writer = styled.input`
    width: 180px;
    height: 52px;
    padding: 0 20px;
    margin-right: 24px;
    border: 1px solid #bdbdbd;
    font-size: 16px;
`;

export const Password = styled.input`
    width: 180px;
    padding: 0 20px;
    border: 1px solid #bdbdbd;
    font-size: 16px;
`;

export const ContentsWrapper = styled.div`
    width: 1200px;
    border: 1px solid #bdbdbd;
    display: flex;
    flex-direction: column;
`;

export const Contents = styled.textarea`
    width: 100%;
    height: 109px;
    border: none;
    border-bottom: 1px solid #f2f2f2;
    padding: 20px;
    font-size: 16px;
    resize: none;

    ::placeholder {
        color: #bdbdbd;
        font-size: 16px;
    }
`;

export const Line = styled.div`

`;

export const CounterWrapper = styled.div`
    width: 1200px;
    height: 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Counter = styled.div`
    width: 1109px;
    padding-left: 20px;
    color: #bdbdbd;
    font-size: 16px;
`;

export const SubmitButton = styled.button`
    width: 91px;
    height: 52px;
    color: white;
    background-color: black;
    cursor: pointer;
`;