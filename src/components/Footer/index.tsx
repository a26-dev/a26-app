import type { FunctionComponent } from 'react'
import useTranslation from '../../locales'
import styles from './styles.module.scss'

const Footer: FunctionComponent = (props) => {
  const t = useTranslation()
  const devDomain = t('common:dev-domain')
  return (
    <footer
      className="section"
      style={{ backgroundColor: '#202020', flexGrow: 1 }}
      {...props}
    >
      <div className="container">
        <p className="is-size-7 has-text-centered" style={{ color: '#d0d0d0' }}>
          {t('footer:made-with-love')} &middot; 2022 &middot;{' '}
          <a
            className={styles.devLink}
            href={`https://${devDomain}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {devDomain}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
