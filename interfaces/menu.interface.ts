export interface Id {
  secondCategory: string
}

export interface Page {
  alias: string
  title: string
  _id: string
  category: string
}

export interface Menu {
  _id: {
    secondCategory: string
  }
  pages: Page[]
}

export interface Domain {
  id: string
  city: string
  inCity: string
}

export interface PageProps {
  menu: Menu[]
  firstCategory: number
  domain?: any
  domains: Domain[]
}

export interface RootObject {
  pageProps: PageProps
  __N_SSG: boolean
}
