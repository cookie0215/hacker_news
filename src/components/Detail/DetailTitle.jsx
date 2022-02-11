import { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Link } from '../../assets/linkIcon.svg';
import ModalPotal from '../Modal/ModalPotal';
import User from '../Modal/User';

const TitleWrap = styled.div`
  width: 100%;
  padding: 56px 20px 16px;
  background: ${({ theme }) => theme.detailTopBgColor};
`;

const Top = styled.div`
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.fontColor};
`;

const LinkWrap = styled.div`
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArticleLink = styled.a`
  font-size: 1.2rem;
	font-weight: 400;
  color: #fff;
`;
const LinkIcon = styled(Link)`
  margin-left: 8px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AuthorInfo = styled.div`
  display: flex;
`;
const Author = styled.span`
  display: block;
  padding: 1px 9px;
  background: #FFFFFF;
  border-radius: 10px;
  color: #FF6B00;
`;
const Point = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.fontColor};
`;
const Update = styled.span`
  color: #424242;
`;

const DetailTitle = () => {
  const [userActive, setUserActive] = useState(false);
  const userOpen = () => {
    setUserActive(true);
  }
  const userClose = () => {
    setUserActive(false);
  }

  return (
    <>
      <ModalPotal>
        {userActive &&
          <User userClose={userClose} />
        }
      </ModalPotal>
      <TitleWrap>
        <Top>
          <Title>
            Show HN: Bulk convert images online without sending to server
          </Title>
        </Top>
        <LinkWrap>
          <ArticleLink target='_blank' rel='noreferrer'>
            webutils.app
            <LinkIcon />
          </ArticleLink>
        </LinkWrap>
        <Bottom>
          <AuthorInfo>
            <Author onClick={userOpen}>atum47</Author>
            <Point>509 points</Point>
          </AuthorInfo>
          <Update>2 hours ago</Update>
        </Bottom>
      </TitleWrap>
    </>
  );
};

export default DetailTitle;