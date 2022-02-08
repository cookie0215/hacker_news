import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div``;
const RootCommentWrap = styled.div``;
const UserInfo = styled.div``;
const CommentCont = styled.div``;
const Reply = styled.div``;

const Comments = () => {
  return (
    <Wrap>
      <RootCommentWrap>
        <UserInfo>유저정보</UserInfo>
        <CommentCont>댓글내용</CommentCont>
        <Reply>답댓글</Reply>
      </RootCommentWrap>
    </Wrap>
  );
};

export default Comments;