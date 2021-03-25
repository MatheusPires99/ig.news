import { SignInButton } from '..';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <S.NavLink href="*" isActive>
            Home
          </S.NavLink>
          <S.NavLink href="*" isActive={false}>
            Posts
          </S.NavLink>
        </nav>

        <SignInButton />
      </S.Content>
    </S.Container>
  );
}
