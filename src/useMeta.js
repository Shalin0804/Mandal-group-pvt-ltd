import { useEffect } from 'react'
import { site } from './data/site'

export default function useMeta(title, description) {
  useEffect(() => {
    document.title = `${title} | ${site.name}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
