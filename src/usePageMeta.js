import { useEffect } from 'react'

// Updates the <title> and description tags from index.html in place (no duplicate tags),
// and puts the index.html values back when the page unmounts.
const descTag = document.querySelector('meta[name="description"]')
const fallback = { title: document.title, description: descTag?.content }

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title
    descTag?.setAttribute('content', description)
    return () => {
      document.title = fallback.title
      descTag?.setAttribute('content', fallback.description)
    }
  }, [title, description])
}
