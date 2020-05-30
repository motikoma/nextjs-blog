import React from 'react';
import Head from 'next/head';
import styles from '~/components/layout.module.css';
import utilStyles from '~/styles/utils.module.css';
import Link from 'next/link';

const name = 'せんべい';
export const siteTitle = 'JavaScriptブログ';

const Layout = ({ children, home }: { children: React.ReactNode; home?: boolean }): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next.jsの勉強だよ" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.headingXl}>{name}</h1>
            <div>
              <a href="https://twitter.com/senbei7777">
                <img src="/images/twitter.png" alt="twitter" width="40" height="40" />
              </a>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>ホームに戻る</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
