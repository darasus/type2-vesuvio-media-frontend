import Link from 'next/link'

export const Footer = ({ articles = [] }) => {
  return (
    <footer className="text-gray-700 bg-gray-100">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap text-left order-first">
          <div className="w-full px-4">
            <span className="inline-block py-1 px-2 rounded bg-gray-200 text-gray-700 text-xs font-medium tracking-widest mb-3">
              ARTICLES
            </span>
            <nav className="list-none">
              {articles?.map((article, i) => (
                <div key={i}>
                  <Link href={`/${article.slug}`}>
                    <a
                      className="text-gray-600 hover:text-gray-800"
                      title={article.title}
                    >
                      {article.title}
                    </a>
                  </Link>
                </div>
              )) || null}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <span className="text-sm text-gray-500 sm:mt-0 mt-4">
            {`Vesuvio Media © ${new Date().getFullYear()}`}
          </span>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="/privacy-policy">
              <a rel="nofollow" className="text-gray-500">
                <span className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 underline">
                  {`Privacy policy`}
                </span>
              </a>
            </Link>
            <Link href="/terms-of-service">
              <a rel="nofollow" className="text-gray-500">
                <span className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 underline">
                  {`Temrs of Service`}
                </span>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
