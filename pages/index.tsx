import React from 'react';
import Link from 'next/link';
import { Date } from '~/components/date';
import Head from 'next/head';
import Layout, { siteTitle } from '~/components/layout';
import utilStyles from '~/styles/utils.module.css';
import { getSortedPostsData } from '~/lib/posts';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>JavaScriptについて勉強したことをまとめています</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ title, id, date }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
