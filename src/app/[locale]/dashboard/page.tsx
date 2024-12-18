import { getTranslations } from 'next-intl/server';
import OneView from 'src/sections/one/view';

// ----------------------------------------------------------------------

export default function Page() {
  return <OneView />;
}

export async function generateMetadata({ params }: { params: Promise<any> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Main' });

  return {
    title: t('title'),
  };
}
