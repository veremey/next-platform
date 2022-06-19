import { GetStaticProps } from 'next'
import { useState } from 'react'
import axios from 'axios'
import { Htag, Ptag, Rating } from './../components'
import { Button } from './../components'
import { HashTag } from './../components'
import { withLayout } from './../HOC/WithLayout'
import { MenuItem } from './../interfaces/menu.interface'

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag="h1">text Livereload</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <Ptag size="l">Большой</Ptag>
      <Ptag size="m">норм</Ptag>
      <br />
      <Ptag size="s">Маленький</Ptag>
      <HashTag href="kkkk" color="red">
        Большой
      </HashTag>
      <HashTag size="m" color="green">
        норм
      </HashTag>
      <HashTag size="s" color="primary">
        Маленький
      </HashTag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + 'top-page/find', {
    firstCategory,
  })

  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
