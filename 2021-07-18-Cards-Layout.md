## 카드 기반 레이아웃

__Card.js__

```shell
// Card.js

import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import timeToDate from "../shared/Time";

const Card = (props) => {
  const {
    id,
    thumbnail,
    title,
    description,
    createAt,
    commentCount,
    profileImage,
    username,
    likeCount,
  } = props;
  return (
    <Container>
      <CardRow>
        <Thumbnail imgUrl={thumbnail}></Thumbnail>
        <Content>
          <ContentRow>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </ContentRow>
          <CardInfo>
            {timeToDate(createAt)}
            {" ∙ "}
            {commentCount}개의 댓글
          </CardInfo>
        </Content>
      </CardRow>
      <AuthorInfo>
        <Author>
          <AuthorProfile imgUrl={profileImage}></AuthorProfile>
          <span style={{ color: "gray" }}>by</span>
          <AuthorName>{username}</AuthorName>
        </Author>
        <LikeCountWrap>
          <FavoriteIcon style={{ fontSize: "12px" }} />
          <LikeCount>{likeCount}</LikeCount>
        </LikeCountWrap>
      </AuthorInfo>
    </Container>
  );
};

const Container = styled.div`
  width: 325px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin: 1em;
  /* transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955); */
  &:hover {
    transform: translateY(-1em);
    cursor: pointer;
  }
`;

const CardRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 170px;
`;

const Content = styled.div`
  padding: 1em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 0.75em;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled.p`
  font-size: 0.875rem;
`;

const CardInfo = styled.div`
  font-size: 12px;
  color: gray;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: space-between;
  width: 100%;
  padding: 1em;
  border-top: 1px solid lightGray;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 0.5em;
  }
`;

const AuthorProfile = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const AuthorName = styled.div`
  font-weight: 600;
`;

const LikeCountWrap = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:first-child) {
    margin-left: 0.5em;
  }
`;

const LikeCount = styled.div``;

export default Card;

```
__Time.js__
```shell
// Time.js

import moment from "moment";

const timeForToday = (value) => {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return "방금 전";
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  return moment(value).format("YYYY년 M월 D일");
};

export default timeForToday;

```
__db.json__
```shell
// db.json

{
  "api": {
    "articles": [
      {
        "id": "1",
        "title": "Spring MVC 패턴으로 구현한 회원가입/로그인 + 어노테이션 정리 -② Controller",
        "description": "먼저 새롭게 Spring 프로젝트를 생성한다. 그리고 삭제한다. 끝.",
        "createAt": 1626532648355,
        "thumbnail": "https://media.vlpt.us/images/jee1818/post/f43495c5-5308-4f59-a325-580e7b63c0d8/캡처.JPG",
        "commentCount": 12,
        "username": "가나다",
        "likeCount": 99,
        "profileImage": "https://media.vlpt.us/images/jee1818/profile/6369ba04-8b5b-4672-8244-780f3447196c/KakaoTalk_20201121_224809313.jpg?w=240"
      },
      {
        "id": "2",
        "title": "정보처리기사_필기(ft. note)",
        "description": "아.. 따기 싫은데..",
        "createAt": 1626532256578,
        "thumbnail": "https://media.vlpt.us/images/happyd1/post/3f0f0f2f-4586-4dcf-82de-0b3637bb09c9/cat103.jpg",
        "commentCount": 9,
        "username": "라마바",
        "likeCount": 35,
        "profileImage": "https://media.vlpt.us/images/happyd1/profile/d6469687-2ac6-4b09-af2c-dbb530b1b0e2/프사.jpg?w=240"
      },
      {
        "id": "3",
        "title": "무인도에서 살아남는 방법",
        "description": "무인도에서 살아남는 방법을 알려드립니다.",
        "createAt": 1626535026667,
        "thumbnail": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXNsYW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "commentCount": 0,
        "username": "사아자",
        "likeCount": 9,
        "profileImage": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VjdW1iZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        "id": "4",
        "title": "모니터가 눈부실 때 대처방법",
        "description": "모니터가 아니라 제가 눈부신겁니다.",
        "createAt": 1626535066237,
        "thumbnail": "https://images.unsplash.com/photo-1518530179311-641ebb3b6b1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJhY2tsaWdodHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "commentCount": 0,
        "username": "차카타",
        "likeCount": 96,
        "profileImage": "https://ca.slack-edge.com/T01L2TNGW3T-U01T6RA1QTF-0b4abfc7db20-512"
      },
      {
        "id": "5",
        "title": "효과적인 DB Modeling을 위한 전략",
        "description": "전문가에게 맡기면 됩니다.",
        "createAt": 1626535234837,
        "thumbnail": "https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VydmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "commentCount": 91,
        "username": "파하하",
        "likeCount": 45,
        "profileImage": "https://ca.slack-edge.com/T01L2TNGW3T-U022V1QJ612-abb3a474c01b-512"
      },
      {
        "id": "6",
        "title": "Spring MVC 패턴으로 구현한 회원가입/로그인 + 어노테이션 정리 -② Controller",
        "description": "먼저 새롭게 Spring 프로젝트를 생성한다. 그리고 삭제한다. 끝.",
        "createAt": 1626532648355,
        "thumbnail": "https://media.vlpt.us/images/jee1818/post/f43495c5-5308-4f59-a325-580e7b63c0d8/캡처.JPG",
        "commentCount": 12,
        "username": "가나다",
        "likeCount": 99,
        "profileImage": "https://media.vlpt.us/images/jee1818/profile/6369ba04-8b5b-4672-8244-780f3447196c/KakaoTalk_20201121_224809313.jpg?w=240"
      },
      {
        "id": "7",
        "title": "정보처리기사_필기(ft. note)",
        "description": "아.. 따기 싫은데..",
        "createAt": 1626532256578,
        "thumbnail": "https://media.vlpt.us/images/happyd1/post/3f0f0f2f-4586-4dcf-82de-0b3637bb09c9/cat103.jpg",
        "commentCount": 9,
        "username": "라마바",
        "likeCount": 35,
        "profileImage": "https://media.vlpt.us/images/happyd1/profile/d6469687-2ac6-4b09-af2c-dbb530b1b0e2/프사.jpg?w=240"
      },
      {
        "id": "8",
        "title": "무인도에서 살아남는 방법",
        "description": "무인도에서 살아남는 방법을 알려드립니다.",
        "createAt": 1626535026667,
        "thumbnail": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXNsYW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "commentCount": 0,
        "username": "사아자",
        "likeCount": 9,
        "profileImage": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VjdW1iZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        "id": "9",
        "title": "모니터가 눈부실 때 대처방법",
        "description": "모니터가 아니라 제가 눈부신겁니다.",
        "createAt": 1626535066237,
        "thumbnail": "https://images.unsplash.com/photo-1518530179311-641ebb3b6b1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJhY2tsaWdodHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "commentCount": 0,
        "username": "차카타",
        "likeCount": 96,
        "profileImage": "https://ca.slack-edge.com/T01L2TNGW3T-U01T6RA1QTF-0b4abfc7db20-512"
      },
      {
        "id": "10",
        "title": "효과적인 DB Modeling을 위한 전략",
        "description": "전문가에게 맡기면 됩니다.",
        "createAt": 1626535234837,
        "thumbnail": "https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VydmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "commentCount": 91,
        "username": "파하하",
        "likeCount": 45,
        "profileImage": "https://ca.slack-edge.com/T01L2TNGW3T-U022V1QJ612-abb3a474c01b-512"
      },
      {
        "id": "11",
        "title": "Spring MVC 패턴으로 구현한 회원가입/로그인 + 어노테이션 정리 -② Controller",
        "description": "먼저 새롭게 Spring 프로젝트를 생성한다. 그리고 삭제한다. 끝.",
        "createAt": 1626532648355,
        "thumbnail": "https://media.vlpt.us/images/jee1818/post/f43495c5-5308-4f59-a325-580e7b63c0d8/캡처.JPG",
        "commentCount": 12,
        "username": "가나다",
        "likeCount": 99,
        "profileImage": "https://media.vlpt.us/images/jee1818/profile/6369ba04-8b5b-4672-8244-780f3447196c/KakaoTalk_20201121_224809313.jpg?w=240"
      },
      {
        "id": "12",
        "title": "정보처리기사_필기(ft. note)",
        "description": "아.. 따기 싫은데..",
        "createAt": 1626532256578,
        "thumbnail": "https://media.vlpt.us/images/happyd1/post/3f0f0f2f-4586-4dcf-82de-0b3637bb09c9/cat103.jpg",
        "commentCount": 9,
        "username": "라마바",
        "likeCount": 35,
        "profileImage": "https://media.vlpt.us/images/happyd1/profile/d6469687-2ac6-4b09-af2c-dbb530b1b0e2/프사.jpg?w=240"
      },
      {
        "id": "13",
        "title": "무인도에서 살아남는 방법",
        "description": "무인도에서 살아남는 방법을 알려드립니다.",
        "createAt": 1626535026667,
        "thumbnail": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXNsYW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "commentCount": 0,
        "username": "사아자",
        "likeCount": 9,
        "profileImage": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VjdW1iZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        "id": "14",
        "title": "모니터가 눈부실 때 대처방법",
        "description": "모니터가 아니라 제가 눈부신겁니다.",
        "createAt": 1626535066237,
        "thumbnail": "https://images.unsplash.com/photo-1518530179311-641ebb3b6b1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJhY2tsaWdodHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "commentCount": 0,
        "username": "차카타",
        "likeCount": 96,
        "profileImage": "https://ca.slack-edge.com/T01L2TNGW3T-U01T6RA1QTF-0b4abfc7db20-512"
      },
      {
        "id": "15",
        "title": "효과적인 DB Modeling을 위한 전략",
        "description": "전문가에게 맡기면 됩니다.",
        "createAt": 1626535234837,
        "thumbnail": "https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VydmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "commentCount": 91,
        "username": "파하하",
        "likeCount": 45,
        "profileImage": "https://ca.slack-edge.com/T01L2TNGW3T-U022V1QJ612-abb3a474c01b-512"
      }
    ]
  }
}

```
