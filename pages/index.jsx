import Layout from '../componets/Layout';
import utilStyles from '../styles/Utils.module.css';




export default function Home() {
  return (
    <Layout title='Home -- Nextjs' description='Descripcion del home' home  > 
    <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

    </Layout>
  )
}
