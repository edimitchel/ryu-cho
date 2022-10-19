import { extractRepoOwner, extractRepoName } from './utils'

export interface UserConfig {
  /**
   * Git user name to use when making PR.
   *
   * Uses `process.env.USER_NAME` if it exists.
   */
  userName: string

  /**
   * Git email address to use when making PR.
   *
   * Uses `process.env.EMAIL` if it exists.
   */
  email: string

  /**
   * GitHub access token.
   *
   * Uses `process.env.ACCESS_TOKEN` if it exists.
   */
  accessToken: string

  /**
   * The url for the upstream repo.
   *
   * Uses `process.env.UPSTREAM_REPO` if it exists.
   *
   * @example 'git@github.com:vuejs/vuejs.org'
   */
  upstreamRepo: string

  /**
   * The branch to track on the upstream repo.
   *
   * Uses `process.env.UPSTREAM_REPO_BRANCH` if it exists.
   *
   * @default 'main'
   */
  upstreamRepoBranch?: string

  /**
   * The url for the head repo.
   *
   * Uses `process.env.HEAD_REPO` if it exists.
   *
   * @example 'https://github.com/vuejs/vuejs.org'
   */
  headRepo: string

  /**
   * The branch to track on head repo.
   *
   * Uses `process.env.HEAD_REPO_BRANCH` if it exists.
   *
   * @default 'main'
   */
  headRepoBranch?: string

  /**
   * The name of the GitHub workflow. This value is used to determine the last
   * run of the Che Tsumi.
   *
   * Uses `process.env.WORKFLOW_NAME` if it exists.
   *
   * @default 'ryu-cho'
   */
  workflowName?: string

  /**
   * The git commit sha to start tracking.
   *
   * Uses `process.env.TRACK_FROM` if it exists.
   *
   * @example '889d985125558731c14278c3c5764bdcfb2389fd'
   */
  trackFrom: string

  /**
   * File path to track. If this option is set, commit not containing the
   * path will be not tracked.
   *
   * @example 'docs/'
   */
  pathStartsWith?: string

  /**
   * Enable progress translation tracker which would be visible on the issue
   * assigned for.
   * Will generate tree only if any update are detected.
   */
  progressTracker?: {
    /**
     * Issue number to track the translation status to find
     * the tracker issue to update on each translation update.
     * @exemple 120
     */
    issueNumber?: number

    /**
     * Amount of percentage text difference between source and translated content which will
     * consider the translation as possibly not fully translated.
     *
     * @default 0.20
     * @example 0.20
     */
    translatedSimilarityThrottle?: number

    /**
     * Enable or disable updating the title of the tracking issue (with the percentage of translation)
     */
    updateTitle: boolean
  }
}

export interface Config {
  userName: string
  email: string
  accessToken: string
  workflowName: string
  trackFrom: string
  pathStartsWith?: string
  progressTracker?: {
    issueNumber: number
    updateTitle: boolean
    translatedSimilarityThrottle: number
  }

  remote: {
    upstream: Remote
    head: Remote
  }
}

export interface Remote {
  url: string
  owner: string
  name: string
  branch: string
}

export function createConfig(config: UserConfig): Config {
  const { progressTracker } = config
  return {
    userName: config.userName,
    email: config.email,
    accessToken: config.accessToken,
    workflowName: config.workflowName ?? 'ryu-cho',
    trackFrom: config.trackFrom,
    pathStartsWith: config.pathStartsWith,
    progressTracker: progressTracker
      ? {
          issueNumber: progressTracker?.issueNumber!,
          updateTitle: progressTracker?.updateTitle ?? false,
          translatedSimilarityThrottle:
            progressTracker.translatedSimilarityThrottle ?? 0.2
        }
      : undefined,

    remote: {
      upstream: {
        url: config.upstreamRepo,
        owner: extractRepoOwner(config.upstreamRepo),
        name: extractRepoName(config.upstreamRepo),
        branch: config.upstreamRepoBranch ?? 'main'
      },
      head: {
        url: config.headRepo,
        owner: extractRepoOwner(config.headRepo),
        name: extractRepoName(config.headRepo),
        branch: config.headRepoBranch ?? 'main'
      }
    }
  }
}
