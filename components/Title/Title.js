import clsx from 'clsx'

export const Title = ({ title, className }) => {
  return (
    <div className={clsx('flex flex-wrap w-full', className)}>
      <div className="w-full">
        <h3 className="text-4xl font-medium title-font mb-2">{title}</h3>
        <div className="h-1 w-20 bg-primary-500 rounded"></div>
      </div>
    </div>
  )
}
