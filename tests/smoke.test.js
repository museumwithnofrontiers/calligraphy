import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'calligraphy',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Calligraphy',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '1d61ec66-2c37-507e-9e98-65e166b78f82',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '35dafca1-8ab1-5d22-8ffd-d39248a402df',
    dynasty: {
      item: '89a86236-adc3-549a-bfa6-2e0e2a3a3b00',
      name: 'Other Dynasties',
    },
    timeline: {
      code: 'gr',
      id: 'grc',
      country: 'Greece',
      rows: 11,
      event: 'Filiki Etaireia',
      gallery: 9,
      galleryTiles: 9,
      galleryItem: 'Floor mat',
    },
    partner: {
      id: 'bb94125a-04ef-5227-b3bb-8ebc7dfdafbe',
      name: 'Jordan Museum for Costumes and Jewellery',
      city: 'Amman',
      country: 'Jordan',
      objects: 3,
    },
  },
})
