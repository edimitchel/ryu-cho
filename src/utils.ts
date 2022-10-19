import path from 'path'
import colors from 'colors/safe'
import { Git } from './git'
import { ShellString } from 'shelljs'

export type LogType = 'I' | 'S' | 'W' | 'E'

export function log(type: LogType, message: string): void {
  switch (type) {
    case 'I':
      console.info(colors.blue(message))
      break
    case 'S':
      console.info(colors.green(message))
      break
    case 'W':
      console.warn(colors.yellow(message))
      break
    case 'E':
      console.error(colors.red(message))
      break
  }
}

export function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message)
  }
}

export function extractBasename(url: string): string {
  return path.basename(url)
}

export function extractRepoName(url: string): string {
  return path.basename(url, '.git')
}

export function extractRepoOwner(url: string): string {
  let dirname = path.dirname(url)

  if (dirname.includes(':')) {
    dirname = dirname.split(':').pop()!
  }

  return path.basename(dirname)
}

export function removeHash(text: string): string {
  return text.replace(/( )?\(#.*\)/, '')
}

function queryDiffFilesWithDissimilarity(fromRef: string): string {
  const git = new Git()
  const diff = git.diff(
    fromRef + " -B1%/1% @~ -- ':*.md' | grep 'diss|diff --git"
  ) as ShellString

  return diff.stdout
}

const fileNameRE = /b\/([a-z/-]*\.md)[\s\S].*dissimilarity index (\d{1,2})%/g

export function computeFileDifferenceContent(diffOutput: string) {
  const matches = Array.from(diffOutput.matchAll(fileNameRE))

  return matches.map(([_, name, percentage]) => ({
    name,
    difference: parseInt(percentage) / 100
  }))
}

export function getFileDifferences(fromRef: string) {
  const diff = queryDiffFilesWithDissimilarity(fromRef)

  return computeFileDifferenceContent(diff)
}
