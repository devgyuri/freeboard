import * as S from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI() {
    return(
        <>
            <S.CommentWrapper>
                <S.LabelWrapper>
                    <S.CommentIcon src="/images/boardComment/review_icon.png"/>
                    <S.Label>댓글</S.Label>
                </S.LabelWrapper>
                <S.WriterWrapper>
                    <S.Writer type="text" placeholder="작성자" />
                    <S.Password type="password" placeholder="비밀번호" />
                </S.WriterWrapper>
                <S.ContentsWrapper>
                    <S.Contents
                        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    />
                    <S.CounterWrapper>
                        <S.Counter>24 / 100</S.Counter>
                        <S.SubmitButton>등록하기</S.SubmitButton>
                    </S.CounterWrapper>
                </S.ContentsWrapper>
            </S.CommentWrapper>
        </>
    );
};