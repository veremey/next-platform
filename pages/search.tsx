import { GetStaticProps } from 'next'
import axios from 'axios'
import { withLayout } from '../HOC/WithLayout'
import { MenuItem } from '../interfaces/menu.interface'

function Search(): JSX.Element {
  return <>Search</>
}

export default withLayout(Search)

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + 'top-page/find',
    {
      firstCategory,
    }
  )

  return {
    props: {
      menu,
      firstCategory,
    },
  }
}
