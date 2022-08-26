import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from '../locales'

const HomePage: NextPage = () => {
  const t = useTranslation()

  return (
    <>
      <Head>
        <title>
          {t('common:site-domain')} | {t('common:home')}
        </title>
      </Head>

      <main className="section">
        <div className="container">
          <div className="columns is-vcentered is-multiline">
            <div className="column is-6-tablet is-3-desktop has-text-right-desktop has-text-white">
              <p className="is-size-1">{t('common:site-domain')}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
