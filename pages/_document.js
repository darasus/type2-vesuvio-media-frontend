import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const isProduction = process.env.NODE_ENV === 'production'

    return { ...initialProps, isProduction }
  }

  render() {
    const { isProduction } = this.props

    return (
      <Html
        className="sm:text-lg lg:text-xl text-black antialiased leading-tight"
        lang="en"
      >
        <Head>
          {isProduction && process.env.ga && (
            <React.Fragment>
              <script
                async
                defer
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ga}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.ga}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </React.Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
