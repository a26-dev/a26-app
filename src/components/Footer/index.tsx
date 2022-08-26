import type { FunctionComponent } from 'react'
import useTranslation from '../../locales'
import styles from './styles.module.scss'

const Footer: FunctionComponent = (props) => {
  const t = useTranslation()
  const devDomain = t('common:dev-domain')

  return (
    <footer
      className={`${styles.footer} ${styles.section} section has-background-black`}
      {...props}
    >
      <div className="container">
        <p className="is-size-7 has-text-centered">
          {t('footer:made-with-love')} &middot;{' '}
          <a
            href={`https://${devDomain}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {devDomain}
          </a>{' '}
          &middot; 2022
        </p>
      </div>
    </footer>
  )
}

export default Footer
