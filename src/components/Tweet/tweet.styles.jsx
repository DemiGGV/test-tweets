import styled from 'styled-components';
// import UserSvg from '../../assets/ellipse1Stroke.svg';
import { ReactComponent as UserSvg } from '../../assets/userFrame.svg';

export const TweetMainBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(
    320deg,
    var(--colors-main-gradient-end),
    var(--colors-main-gradient-middle),
    var(--colors-main-gradient-start) 75%
  );
  box-shadow: var(--shadows-main);
`;
export const TopBox = styled.div`
  width: 100%;
  min-height: 214px;
  background-image: url(${props => props.$src});
  background-position: center;
  background-size: 308px 168px;
  background-repeat: no-repeat;
`;
export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 75px;
`;
export const UserBox = styled.div`
  position: relative;
  height: 16px;
  width: 100%;
  background: linear-gradient(
    to bottom,
    var(--colors-line-gradient-start),
    var(--colors-line-gradient-end)
  );
  box-shadow: var(--shadows-line);
`;
export const UserFrame = styled.div`
  position: absolute;
  left: 50%;
  top: -36px;
  transform: translateX(-50%);
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--colors-avatar-bg);
  overflow: hidden;
`;
export const SvgFrame = styled(UserSvg)`
  position: absolute;
  left: -5px;
  fill: #ebd8ff;
  filter: drop-shadow(
    0px 4.391631126403809px 4.391631126403809px rgba(0, 0, 0, 0.06)
  );
`;
export const UserLogo = styled.img`
  border: 8px solid transparent;
`;
export const BottomBox = styled.div`
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
  color: var(--colors-text-light);
  text-align: center;
`;
export const InfoText = styled.p`
  margin-top: 16px;
  color: var(--colors-text-light);
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
export const ButtonFollow = styled.button`
  margin-top: 26px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 196px;
  height: 50px;

  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;

  background-color: ${props =>
    props.$isFollowed
      ? 'var(--colors-button-enabled)'
      : 'var(--colors-button-default)'};
  color: var(--colors-text-dark);
  box-shadow: var(--shadows-button);
  transition: var(--transition-bgc-global);
  transition: var(--transition-color-global);
  &:hover {
    color: var(--colors-button-enabled);
    background: var(--colors-button-hovered);
  }
`;

export const BtnText = styled.p``;
