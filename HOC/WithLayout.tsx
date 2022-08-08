import { Layout } from '../Layout/Layout'
import { FunctionalComponent } from 'preact'
import { AppContextProvider } from '../context/app.context'
import { IAppContext } from './../context/app.context'

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionalComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    )
  }
}
