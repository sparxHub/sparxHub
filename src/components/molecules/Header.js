// components/Header.js

function Header(props) {
  const {
    title = 'Nadav Daniel - Entrepreneur & Full Stack Developer',
    description = 'Explore the entrepreneurial journey of Nadav Daniel, a visionary full-stack developer and tech entrepreneur specializing in creating impactful digital solutions.',
    keywords = 'Entrepreneur, Full Stack Developer, Business Solutions, Web Development, React, Next.js, Software Engineer, Nadav Daniel',
    author = 'Nadav Daniel',
    siteName = 'Nadav Daniel - Entrepreneur & Full Stack Developer Portfolio',
    url = 'https://nadav-daniel.com',
    favicon = '/favicon.ico',
    ogType = 'website',
    ogImage = '/og-image.jpg',
    ogImageLarge = '/og-image-summary.jpg',
    twitterCard = 'summary_large_image',
  } = props

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageLarge} />

      {/* Favicon */}
      <link rel="icon" href={favicon} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="application-name" content="Nadav Daniel Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Nadav Daniel Portfolio" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Nadav Daniel',
          jobTitle: 'Entrepreneur & Full Stack Developer',
          url: 'https://nadav-daniel.com',
          sameAs: [
            'https://www.linkedin.com/in/nadav-daniel-0a309150/',
            'https://github.com/sparxHub',
          ],
          description:
            'A tech entrepreneur specializing in full-stack development and creating business-driven digital solutions.',
        })}
      </script>
    </>
  )
}

export default Header
