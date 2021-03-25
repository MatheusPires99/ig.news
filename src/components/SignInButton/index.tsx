import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import * as S from './styles';

export function SignInButton() {
  const theme = useTheme();

  const isUserLoggedIn = true;

  return (
    <S.Container type="button">
      <FaGithub
        color={isUserLoggedIn ? theme.colors.green : theme.colors.yellow}
      />

      {isUserLoggedIn ? 'Matheus Pires' : 'Sing in with GitHub'}

      <FiX color="#737380" />
    </S.Container>
  );
}
