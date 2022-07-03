import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import axios from 'axios'
import { withLayout } from './../../HOC/WithLayout'
import { MenuItem } from './../../interfaces/menu.interface'
import { firstLevelMenu } from '../../helpers/helpers'
import { ParsedUrlQuery } from 'querystring'

function Type({ firstCategory }: TypeProps): JSX.Element {
  return <>TYPE: {firstCategory}</>
}

export default withLayout(Type)

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => '/' + m.route),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type)
  if (!firstCategoryItem) {
    return {
      notFound: true,
    }
  }

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + 'top-page/find', {
    firstCategory: firstCategoryItem.id,
  })

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  }
}

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
