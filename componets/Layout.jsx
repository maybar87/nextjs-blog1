import Head from 'next/Head'; 
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/Utils.module.css';

const name='MarceloWeb'

export default function Layout({ children, title, description, home}) {
    return (
        <div className={styles.container}>
           <Head>
                <link rel="icon" href="/favicon.ico" />
                <title> {title}</title>
                <meta name="description" content={description} />
           </Head>
           <header className={styles.header}>
            {home ? (
             <>
             <Image
              priority
              src="/img/01.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
             </>
             ) : (
             <>
            <Link href="/">
              <Image
                priority
                src="/img/01.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
           <nav>
              <Link href='/'>
                Inicio--
              </Link>
              <Link href='/blog'>
                Blog--
              </Link>
              <Link href='/contact'>
                Contacto--
              </Link>
              <Link href='/about'>
                About
              </Link>
           </nav>
           <main>
               { children }
           </main>
           <footer>
           {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
           </footer>
        </div>
    )
}


Layout.defaultProps={
    title: "Nextjs -- mi sitio web ",
    description: "Descripcion de mi sitio web"
}