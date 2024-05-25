'use client'

type Props = {
  title: string
}

export const BaseLayout = ({ title }: Props) => {
  return (
    <>
      <div className='text-3xl font-bold underline'>
        <h1 className='text-center'>{title}</h1>
      </div>
    </>
  )
}
