import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-11-01',
  useCdn: true,
})

// Helper function for image URLs
export function urlFor(source: any) {
  if (!source) return ''
  const { projectId, dataset } = client.config()
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${source.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`
}
