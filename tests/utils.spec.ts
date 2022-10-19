import { describe, it, vi, expect } from 'vitest'
import * as Utils from 'src/utils'

describe('utils', () => {
  const https = 'https://github.com/vuejs/vuejs.org'
  const git = 'git@github.com:vuejs/vuejs.org'

  describe('#extractBasename', () => {
    it('extracts the basename from the given url', () => {
      const basename = 'vuejs.org'

      expect(Utils.extractBasename(https)).toBe(basename)
      expect(Utils.extractBasename(git)).toBe(basename)
    })
  })

  describe('#extractRepoName', () => {
    it('extracts repo name from the given url', () => {
      const repo = 'vuejs.org'

      expect(Utils.extractRepoName(https + '.git')).toBe(repo)
      expect(Utils.extractRepoName(git + '.git')).toBe(repo)
    })
  })

  describe('#extractRepoOwner', () => {
    it(`extracts repo owner from the given url`, () => {
      const owner = 'vuejs'

      expect(Utils.extractRepoOwner(https)).toBe(owner)
      expect(Utils.extractRepoOwner(git)).toBe(owner)
    })
  })

  describe('#removeHash', () => {
    it('returns the text with hash removed', () => {
      expect(
        Utils.removeHash('Text which contains hash with space (#110)')
      ).toBe('Text which contains hash with space')

      expect(
        Utils.removeHash('Text which contains hash with no space(#110)')
      ).toBe('Text which contains hash with no space')

      expect(Utils.removeHash('Text which does not contain hash')).toBe(
        'Text which does not contain hash'
      )
    })
  })

  describe('#computeFileDiffSimilariry', () => {
    it('reformat ', () => {
      vi.mock('../src/git');
      expect(Utils.computeFileDiffSimilariry('main')).toMatchInlineSnapshot(
      `
        [
          {
            "difference": 0.97,
            "name": "contributing/writing-guide.md",
          },
          {
            "difference": 0.11,
            "name": "src/api/reactivity-advanced.md",
          },
          {
            "difference": 0.36,
            "name": "src/guide/built-ins/keep-alive.md",
          },
          {
            "difference": 0.52,
            "name": "src/guide/built-ins/transition-group.md",
          },
          {
            "difference": 0.46,
            "name": "src/guide/built-ins/transition.md",
          },
          {
            "difference": 0.35,
            "name": "src/guide/components/events.md",
          },
          {
            "difference": 0.5,
            "name": "src/guide/components/slots.md",
          },
          {
            "difference": 0.79,
            "name": "src/guide/essentials/application.md",
          },
          {
            "difference": 0.39,
            "name": "src/guide/essentials/component-basics.md",
          },
          {
            "difference": 0.16,
            "name": "src/guide/essentials/computed.md",
          },
          {
            "difference": 0.79,
            "name": "src/guide/essentials/conditional.md",
          },
          {
            "difference": 0.25,
            "name": "src/guide/essentials/event-handling.md",
          },
          {
            "difference": 0.49,
            "name": "src/guide/essentials/forms.md",
          },
          {
            "difference": 0.14,
            "name": "src/guide/essentials/list.md",
          },
          {
            "difference": 0.11,
            "name": "src/guide/essentials/reactivity-fundamentals.md",
          },
          {
            "difference": 0.13,
            "name": "src/guide/essentials/template-refs.md",
          },
          {
            "difference": 0.16,
            "name": "src/guide/essentials/watchers.md",
          },
          {
            "difference": 0.33,
            "name": "src/guide/extras/animation.md",
          },
          {
            "difference": 0.07,
            "name": "src/guide/extras/reactivity-in-depth.md",
          },
          {
            "difference": 0.84,
            "name": "src/guide/introduction.md",
          },
          {
            "difference": 0.66,
            "name": "src/guide/quick-start.md",
          },
          {
            "difference": 0.05,
            "name": "src/guide/reusability/composables.md",
          },
          {
            "difference": 0.43,
            "name": "src/guide/scaling-up/routing.md",
          },
          {
            "difference": 0.94,
            "name": "src/guide/scaling-up/sfc.md",
          },
          {
            "difference": 0.26,
            "name": "src/guide/scaling-up/state-management.md",
          },
          {
            "difference": 0.88,
            "name": "src/sponsor/index.md",
          },
          {
            "difference": 0.5,
            "name": "src/translations/index.md",
          },
        ]
      `)
    })
  })
})
