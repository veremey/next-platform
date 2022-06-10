import { Layout } from '../Layout/Layout'
import { Component } from 'react'
import { FunctionalComponent } from 'preact'

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionalComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
