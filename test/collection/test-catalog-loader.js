/**
 * This test requires catalog-loader to be present in the same base directory as the 'schema' project.
 * It will attempt to load all collection.json files from ../catalog-loader.
 * 
 * To execute run npm run test-catalog
 */
const { deserialize } = require('../deserialize')
const fs = require('fs')
const path = require('path')

describe('collection-schema.json (production catalog)', () => {
  const baseDir = '../catalog-loader/collection/production'
  const collections = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `${baseDir}/${dirent.name}/collection.json`)
    .filter(f => fs.existsSync(f))
  for (const c of collections) {
    it(`validates ${c}`, () => {
      const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/collection/collection-schema.json'))
      const example = fs.readFileSync(c)
      deserialize(example, schema)
    })
  }
})

describe('collection-schema.json (development catalog)', () => {
  const baseDir = '../catalog-loader/collection/development'
  const collections = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `${baseDir}/${dirent.name}/collection.json`)
    .filter(f => fs.existsSync(f))
  for (const c of collections) {
    it(`validates ${c}`, () => {
      const schema = fs.readFileSync(path.resolve(__dirname, '../../docs/collection/collection-schema.json'))
      const example = fs.readFileSync(c)
      deserialize(example, schema)
    })
  }
})
