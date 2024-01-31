import run from './pull.js'
import {Octokit} from 'octokit'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

await run({github: octokit, context: {repo: {owner: 'nornagon', repo: 'play-cdda'}}})
