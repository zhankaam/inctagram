import { useRouter } from 'next/router'

import VerificationImg from 'shared/assets/images/verification.png'
import { useTranslation } from 'next-i18next'
import { makeStaticProps, getStaticPaths } from 'shared/lib/i18n/getStatic'
import { Info } from 'entities/Info'
import { getAuthLayout } from 'layouts/Layout/AuthLayout/AuthLayout'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

export default function verification () {
    const { t } = useTranslation()
    const router = useRouter()

    return (
        <Info
      title={t('verification-title')} // Срок действия ссылки для подтверждения электронной почты истек!
      text={t('verification-text')} // Срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз
      buttonText={t('verification-button')} // Повторно отправить ссылку для подтверждения
      image={VerificationImg}
      onClick={router.back}
        />
    )
}
verification.getLayout = getAuthLayout
