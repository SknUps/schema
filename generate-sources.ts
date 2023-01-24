import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'
import glob from 'glob'
import { compile } from 'json-schema-to-typescript'
import { toSafeString } from 'json-schema-to-typescript/dist/src/utils.js'

const generatedSrcDir = 'generated-src'
const schemaFilesGlob = 'docs/**/*.json'

const schemaFiles = glob.sync(schemaFilesGlob)

if (schemaFiles.length === 0) {
  console.warn(`WARNING: No schema files found matching ${schemaFilesGlob}`)
  process.exit(1)
}

schemaFiles.forEach(file => {
  generateSources(file, `${generatedSrcDir}/${file.replace('docs/', '').replace('.json', '.ts')}`)
})

/**
 * Generates typescript sources for the given json schema.
 *
 * Most of the heavy lifting is managed by json-schema-to-typescript.
 *
 * In addition, the following consts are defined for each schema:
 *   - SCHEMA: the parsed JSON schema
 *   - DEFAULTS: an object populated with only default values if supplied in the schema
 */
async function generateSources (jsonSchemaFile: string, outputFile: string) {
  mkdirSync(dirname(outputFile), { recursive: true })

  const jsonSchemaStr = readFileSync(jsonSchemaFile)
  const jsonSchema = JSON.parse(jsonSchemaStr.toString())
  const typeName = toSafeString(jsonSchema.title || jsonSchema.$id)

  const jsonSchemaTs = await compile(jsonSchema, jsonSchemaFile.replace('.json', ''))
  const jsonDefaults = JSON.stringify(jsonSchemaToDefaults(jsonSchema), null, 2)

  writeFileSync(
    outputFile,
    'import { JSONSchema4 } from "json-schema"\n\n' +
    `${jsonSchemaTs}\n` +
    `export const SCHEMA: JSONSchema4 = ${jsonSchemaStr}\n\n` +
    `export const DEFAULTS: Partial<${typeName}> = ${jsonDefaults}\n`
  )
}

/**
 * Creates a JSON object containing only the default values for the supplied schema.
 */
function jsonSchemaToDefaults (jsonSchema: any) {
  const jsonDefaults = {}
  for (const [k, v] of Object.entries(jsonSchema.properties) as [string, any]) {
    if (v.default) {
      jsonDefaults[k] = v.default
    }
  }
  return jsonDefaults
}
