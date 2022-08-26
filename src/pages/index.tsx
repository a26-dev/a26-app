import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
            <div className="column is-12-tablet has-text-white">
              <a
                href="https://ora.a26.app"
                style={{
                  display: 'flex',
                  padding: '16px',
                  gap: '16px',
                  alignItems: 'center',
                  backgroundColor: '#f8f8f8',
                  color: '#202020',
                }}
              >
                <div style={{ minWidth: '128px' }}>
                  <Image
                    src="/assets/logo-a26-ora.png"
                    alt="Ora app icon"
                    width={128}
                    height={128}
                    layout="fixed"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontWeight: 'bold',
                      fontSize: '32px',
                    }}
                  >
                    ora
                    <span style={{ fontSize: '18px', color: '#a0a0a0' }}>
                      .a26.app
                    </span>
                  </h3>
                  <p style={{ fontSize: '14px', margin: 0 }}>
                    {t('ora:description')}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
