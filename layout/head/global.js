import Head from 'next/head'

export const Header = () => {
  return (
      <Head>  
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="shortcut icon" href="https://remontokonperm.ru/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="https://remontokonperm.ru/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="apple-mobile-web-app-capable" content="no"></meta>
        <meta property="og:url" content="//remontokonperm.ru/"></meta>
        <title>Тёплый дом — ремонт окон в перми</title>
        <meta property="og:title" content="Тёплый дом — ремонт окон в перми"></meta>
        <meta name="description" content={`Тёплый дом — это качественный ремонт пластиковых окон, 
        Выезд мастера бесплатно,низкии цены, бесплытнный замер.  
        `}></meta>
        <meta name="keywords" content="Ремонт окон, Тёплый дом, мастер, Пермь, цены"></meta>
        <meta name="news_keywords" content="Ремонт окон, Тёплый дом, мастер, Пермь, цены"></meta>
        <meta name="google-site-verification" content="pLLbNWwlbIjfTuUBMcpueh10QbC8FxMrr1lg-TGZNJ0" />
      </Head>
  )
}