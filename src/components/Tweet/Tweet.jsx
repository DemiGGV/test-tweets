import {
  BottomBox,
  BtnText,
  ButtonFollow,
  InfoText,
  Logo,
  SvgFrame,
  TopBox,
  TweetMainBox,
  UserBox,
  UserFrame,
  UserLogo,
} from './tweet.styles';
import logoImage from '../../assets/logo.svg';
import topImage from '../../assets/topImage.png';
import placeholderImage from '../../assets/userPlaceholder.png';
import { textNormalize } from 'utils/textNormalize';
// import { ReactComponent as UserSvg } from '../../assets/ellipse1Stroke.svg';
// import UserSvg from '../../assets/ellipse1Stroke.svg';

export const Tweet = ({ tweet, onPressHandle, isFollowed = 'false' }) => {
  const { tweets, user, avatar, followers, id } = tweet;
  return (
    <TweetMainBox>
      <TopBox $src={topImage}>
        <Logo src={logoImage} alt="Company logo image" />
      </TopBox>
      <UserBox>
        <UserFrame>
          <SvgFrame />
          <UserLogo
            src={!avatar ? placeholderImage : avatar}
            alt="User avatar image"
            title={user}
          />
        </UserFrame>
      </UserBox>
      <BottomBox>
        <InfoText>{textNormalize(tweets)} tweets</InfoText>
        <InfoText>{textNormalize(followers)} followers</InfoText>
        <ButtonFollow
          $isFollowed={isFollowed}
          onClick={() => onPressHandle(id)}
        >
          <BtnText>{isFollowed ? 'followed' : 'follow'}</BtnText>
        </ButtonFollow>
      </BottomBox>
    </TweetMainBox>
  );
};
