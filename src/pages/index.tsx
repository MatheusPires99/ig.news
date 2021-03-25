import Head from 'next/head';

import { SubscribeButton } from '../components/SubscribeButton';
import * as S from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <S.Container>
        <S.Hero>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </S.Hero>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </S.Container>
    </>
  );
}
