import { useEffect } from 'react'

/** Sets the browser-tab title, description and canonical link for each page. */
export function useSeo(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title
    const set = (sel: string, attr: string, val: string) => document.querySelector(sel)?.setAttribute(attr, val)
    set('meta[name="description"]', 'content', description)
    set('link[rel="canonical"]', 'href', `https://shahrukhsulehry.com${path}`)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', description)
    set('meta[property="og:url"]', 'content', `https://shahrukhsulehry.com${path}`)
  }, [title, description, path])
}
