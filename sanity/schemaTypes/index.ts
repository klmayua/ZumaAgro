import { type SchemaTypeDefinition } from 'sanity'
import newsArticle from './newsArticle'
import jobListing from './jobListing'
import teamMember from './teamMember'
import download from './download'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsArticle, jobListing, teamMember, download, siteSettings],
}
