import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${props => props.theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};
`;

export const CardHeader = styled.div`
  background-color: ${props => props.theme.colors.gray};
`;

export const CardPoster = styled.img`
  object-fit: cover;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};

  padding: ${props => props.theme.spacing(4)};
`;

export const CardTitle = styled.p`
  font-size: ${props => props.theme.spacing(6)};
  text-transform: capitalize;
  align-self: center;
  margin-bottom: 0;
`;

export const CardText = styled.p`
  font-weight: 200;
  letter-spacing: ${props => props.theme.spacing(0.2)};
  align-self: center;
  margin-bottom: 0;
`;

export const CardFooter = styled.div`
  display: flex;
  padding: ${props => props.theme.spacing(4)};
  margin-top: auto;
`;

export const UserBox = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  width: 100%;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const UserInfo = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatText = styled.span`
  font-size: ${props => props.theme.spacing(5)};

  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const StatValue = styled.span`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.spacing(6)};
  font-weight: 500;
`;
