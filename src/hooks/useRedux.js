import { useSelector } from 'react-redux';
import { selectIsModalProfileOpen } from '../redux/global/selectors';

export const useGlobal = () => {
  const isModalProfileOpen = useSelector(selectIsModalProfileOpen);

  return {
    isModalProfileOpen,
  };
};
