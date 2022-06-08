import { LayoutProps } from './Layout.props'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import styles from './Layout.module.scss'
import cn from 'classnames'
import { Component } from 'react'
import { FunctionalComponent } from 'preact'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <>{children}</>
      </div>
      <Footer />
    </>
  )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionalComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
