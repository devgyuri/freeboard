import * as S from "./BoardCommentList.styles"

export default function BoardCommentListUI() {
    return(
        <>
            <S.ItemWrapper>
                <S.FlexWrapper>
                    <S.Avatar src="/images/avatar.png" />
                    <S.MainWrapper>
                        <S.WriterWrapper>
                            <S.Writer>김규리</S.Writer>
                            <S.Star></S.Star>
                        </S.WriterWrapper>
                        <S.Contents>안녕하세요!</S.Contents>
                    </S.MainWrapper>
                    <S.OptionWrapper>
                        <S.UpdateIcon 
                            src="/images/boardComment/option_update_icon.png"
                        />
                        <S.DeleteIcon
                            src="/images/boardComment/option_delete_icon.png"
                        />
                    </S.OptionWrapper>
                </S.FlexWrapper>
                <S.DateString>2023.10.20</S.DateString>
            </S.ItemWrapper>
        </>
    );
};