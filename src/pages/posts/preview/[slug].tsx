import { GetStaticPaths, GetStaticProps } from 'next';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { RichText } from 'prismic-dom';

import { MetaTags } from '../../../components';
import { getPrismicClient } from '../../../services/prismic';
import * as S from '../../../styles/pages/Post';

type PostPreviewProps = {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
};

export default function PostPreview({ post }: PostPreviewProps) {
  const router = useRouter();
  const [session] = useSession();

  useEffect(() => {
    router.push(`/posts/${post.slug}`);
  }, [session, post.slug, router]);

  return (
    <>
      <MetaTags title={post.title} />

      <S.Container>
        <S.Post>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <S.PostContent
            previewContent
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <S.ContinueReading>
            Wanna continue reading?
            <Link href="/">
              <a>Subscribe now 🤗</a>
            </Link>
          </S.ContinueReading>
        </S.Post>
      </S.Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();

  const { slug } = params;
  const response = await prismic.getByUID('post', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
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
