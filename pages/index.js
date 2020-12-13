import Link from 'next/link'
import { components } from '../utils/mdxComponents'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ARTICLES_PATH, WEBSITES_PATH } from '../constant'
import { NextSeo } from 'next-seo'
import { Title } from '../components/Title/Title'
import { ArticlePreview } from '../components/ArticlePreview/ArticlePreivew'

const Index = ({ source, frontMatter, articles = [], site, products = [] }) => {
  const content = hydrate(source, { components })

  return (
    <>
      <NextSeo
        title={frontMatter.seoTitle}
        description={frontMatter.seoDescription}
        noindex={process.env.is_published}
        nofollow={process.env.is_published}
      />
      <section className="mb-20">
        <div className="flex py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 leading-tight">
              {frontMatter.title}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: frontMatter.introduction,
              }}
            />
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {frontMatter.image && <img src={frontMatter.image} alt="" />}
          </div>
        </div>
      </section>
      {/*{products.length > 0 && (*/}
      {/*  <section className="mb-20">*/}
      {/*    <Title title={'You might be interested in'} className="mb-20" />*/}
      {/*    {products.map(product => (*/}
      {/*      <ProductPreview*/}
      {/*        key={product.id}*/}
      {/*        product={product}*/}
      {/*        className="mb-10"*/}
      {/*        data={props}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </section>*/}
      {/*)}*/}
      {/*{articles.length > 0 && (*/}
      {/*  <section>*/}
      {/*    <Title title="Latest articles" className="mb-20" />*/}
      {/*    {articles.map(article => (*/}
      {/*      <ArticlePreview*/}
      {/*        key={article.id}*/}
      {/*        article={article}*/}
      {/*        className="mb-10"*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </section>*/}
      {/*)}*/}
    </>
  )
}

export const getStaticProps = async () => {
  const site = require(`../websites/site-id-${process.env.id}/site.json`)
  const source = fs.readFileSync(path.join(WEBSITES_PATH, 'home.mdx'))
  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })
  const articleFilePaths = fs
    .readdirSync(ARTICLES_PATH)
    .filter(path => /\.mdx?$/.test(path))
  const articles = articleFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(ARTICLES_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      articles,
      site,
    },
  }
}

export default Index
