import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  align-items: center;

  padding: 10px 30px;
  overflow: hidden;
  border-radius: 10px;

  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

export const Avatar = styled.img`
  width: 80px;
  border-radius: 20%;

  box-shadow: ${props => props.theme.shadows.regular};
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.gray};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`;

export const GreenCircle = styled.span`
  height: 25px;
  width: 25px;
  background-color: green;
  border-radius: 50%;
`;

export const RedCircle = styled.span`
  height: 25px;
  width: 25px;
  background-color: red;
  border-radius: 50%;
`;
