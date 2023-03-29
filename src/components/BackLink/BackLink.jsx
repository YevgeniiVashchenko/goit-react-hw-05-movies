import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { GoBack } from './BackLink.styled';

const BackLink = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  return (
    <GoBack to={backLinkLocationRef.current}>
      <MdOutlineKeyboardBackspace />
      Go back
    </GoBack>
  );
};

export default BackLink;