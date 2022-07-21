import { queries, render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { queries: { ...queries }, ...options })

export * from '@testing-library/react'
export { customRender as render }
