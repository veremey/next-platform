import { Htag, Ptag } from './../components'
import { Button } from './../components'
import { HashTag } from './../components'

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">text Livereload</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <Ptag size="l">Большой</Ptag>
      <Ptag size="m">норм</Ptag>
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
    </div>
  )
}
