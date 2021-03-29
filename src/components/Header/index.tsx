import { useRouter } from 'next/router';
import Link from 'next/link';

import { SignInButton } from '..';

import { navLinks } from '../../constants';
import * as S from './styles';

export function Header() {
  const { asPath } = useRouter();

  return (
    <S.Container>
      <S.Content>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          {navLinks.map(navLink => (
            <Link href={navLink.path} key={navLink.path}>
              <S.NavLink isActive={asPath === navLink.path}>
                {navLink.name}
              </S.NavLink>
            </Link>
          ))}
        </nav>

        <SignInButton />
      </S.Content>
    </S.Container>
  );
}
