import type { FunctionComponent } from 'react'
import useTranslation from '../../locales'

const Footer: FunctionComponent = (props) => {
  const t = useTranslation()
  return (
    <footer
      className="section"
      style={{ backgroundColor: '#202020', flexGrow: 1 }}
      {...props}
    >
      <div className="container">
        <p>{t('footer:built-with')}</p>
        <p>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJS.org
          </a>
        </p>
        <p>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel.com
          </a>
        </p>
        <p>
          <a href="https://bulma.com" target="_blank" rel="noopener noreferrer">
            Bulma.io
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
