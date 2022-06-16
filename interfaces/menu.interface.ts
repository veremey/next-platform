export interface PageItem {
  id: number
  name: string
  title: string
  alias: string
  categoryId: number
  tags: string[]
}

export interface MenuItem {
  id: number
  title: string
  section?: string
  name?: string
  alias?: string
  group?: PageItem[]
}
