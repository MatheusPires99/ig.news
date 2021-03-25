import { signIn, signOut, useSession } from 'next-auth/client';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import * as S from './styles';

export function SignInButton() {
  const theme = useTheme();
  const [session] = useSession();

  const isUserLoggedIn = session;

  function handleClickOnSignIn() {
    if (!isUserLoggedIn) {
      signIn('github');
    } else {
      signOut();
    }
  }

  return (
    <S.Container type="button" onClick={handleClickOnSignIn}>
      <FaGithub
        color={isUserLoggedIn ? theme.colors.green : theme.colors.yellow}
      />

      {isUserLoggedIn ? session.user.name : 'Sing in with GitHub'}

      {isUserLoggedIn && <FiX color="#737380" />}
    </S.Container>
  );
}
