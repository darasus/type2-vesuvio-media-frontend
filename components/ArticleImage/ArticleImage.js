export const ArticleImage = ({ src, alt }) => {
  return (
    <div className="flex flex-wrap justify-center my-5 w-full">
      <div className="px-4" style={{ width: 500 }}>
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="shadow-lg rounded max-w-full align-middle border-none h-auto"
        />
      </div>
    </div>
  )
}
