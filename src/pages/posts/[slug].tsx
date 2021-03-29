import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

import { RichText } from 'prismic-dom';

import { MetaTags } from '../../components';
import { getPrismicClient } from '../../services/prismic';
import * as S from '../../styles/pages/Post';

type PostProps = {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
};

export default function Post({ post }: PostProps) {
  return (
    <>
      <MetaTags title={post.title} />

      <S.Container>
        <S.Post>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <S.PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        </S.Post>
      </S.Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });

  if (!session.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const prismic = getPrismicClient(req);

  const { slug } = params;
  const response = await prismic.getByUID('post', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
  };

  return {
    props: {
      post,
    },
  };
};
