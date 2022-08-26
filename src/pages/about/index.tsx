import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from '../../locales'

const AboutPage: NextPage = () => {
  const t = useTranslation()

  return (
    <>
      <Head>
        <title>
          {t('common:site-domain')} | {t('common:about')}
        </title>
      </Head>

      <main className="section">
        <div className="container">
          <div className="columns is-8 is-variable">
            <div className="column is-7-tablet">
              <p>{t('about:p-1st')}</p>
              <br />
              <p>{t('about:p-2nd')}</p>
            </div>
            <div className="column  is-5-tablet">
              <p>{t('about:p-3rd')}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AboutPage
