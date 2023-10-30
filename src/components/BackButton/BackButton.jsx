import { useNavigate } from 'react-router-dom';
import { BBox, BButton } from './BackButton.styles';

export const BackButton = ({ label }) => {
  const navigate = useNavigate();
  return (
    <BBox>
      <BButton onClick={() => navigate('/', { replace: true })}>
        {label}
      </BButton>
    </BBox>
  );
};
