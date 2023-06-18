import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, everyone! My name is Carlos Marques Lopes, and I'm 29 years old. I'm excited to share with you a small project I've built using Next.js. This is my first time learning Next.js, and I must say, it has been an amazing experience so far.

Next.js is a powerful framework that allows developers to build fast and scalable web applications with ease. It provides features like server-side rendering, automatic code splitting, and hot module replacement, which greatly enhance the development process.

For this project, I decided to explore the capabilities of Next.js and create something meaningful. It's been a great learning journey, and I can't wait to showcase what I've accomplished using this fantastic framework.

I hope you enjoy exploring my Next.js project and witnessing the possibilities it offers. Feel free to provide any feedback or suggestions. Thank you for your attention!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}