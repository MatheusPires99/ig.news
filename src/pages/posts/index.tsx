import { GetStaticProps } from 'next';

import Prismic from '@prismicio/client';

import { MetaTags } from '../../components';
import { getPrismicClient } from '../../services/prismic';
import * as S from '../../styles/pages/Posts';

export default function Posts() {
  return (
    <>
      <MetaTags title="Posts" />

      <S.Container>
        <S.Content>
          <a href="*">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna and Yarn Workspaces</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared functions.
            </p>
          </a>
          <a href="*">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna and Yarn Workspaces</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared functions.
            </p>
          </a>
          <a href="*">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna and Yarn Workspaces</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared functions.
            </p>
          </a>
          <a href="*">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna and Yarn Workspaces</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared functions.
            </p>
          </a>
        </S.Content>
      </S.Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 100,
    },
  );

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
    revalidate: 1,
  };
};
