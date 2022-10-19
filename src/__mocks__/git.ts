import { ExecOptions, ShellReturnValue, ShellString } from 'shelljs'
import { Readable } from 'node:stream'

export class Git {
  exec(command: string, execOptions: ExecOptions = {}) {}

  config(prop: string, value: string) {}

  clone(userName: string, token: string, url: string, name: string) {}

  addRemote(url: string, name: string) {}

  branch(option?: string) {}

  checkout(branch: string, option?: string) {}

  fetch(repo: string, branch: string) {}

  merge(branch: string) {}

  cherryPick(hash: string) {}

  push(repo: string, branch: string) {}

  reset() {}

  diff(args = ''): Partial<ShellReturnValue> {
    return {
      stdout: `diff --git a/.github/contributing/writing-guide.md b/.github/contributing/writing-guide.md
      dissimilarity index 97%
      diff --git a/.github/pull_request_template.md b/.github/pull_request_template.md
      dissimilarity index 98%
      diff --git a/README.md b/README.md
      dissimilarity index 84%
      diff --git a/src/about/team.md b/src/about/team.md
      diff --git a/src/api/reactivity-advanced.md b/src/api/reactivity-advanced.md
      dissimilarity index 11%
      diff --git a/src/guide/built-ins/keep-alive.md b/src/guide/built-ins/keep-alive.md
      dissimilarity index 36%
      diff --git a/src/guide/built-ins/transition-group.md b/src/guide/built-ins/transition-group.md
      dissimilarity index 52%
      diff --git a/src/guide/built-ins/transition.md b/src/guide/built-ins/transition.md
      dissimilarity index 46%
      diff --git a/src/guide/components/events.md b/src/guide/components/events.md
      dissimilarity index 35%
      diff --git a/src/guide/components/slots.md b/src/guide/components/slots.md
      dissimilarity index 50%
      diff --git a/src/guide/essentials/application.md b/src/guide/essentials/application.md
      dissimilarity index 79%
      diff --git a/src/guide/essentials/component-basics.md b/src/guide/essentials/component-basics.md
      dissimilarity index 39%
      diff --git a/src/guide/essentials/computed.md b/src/guide/essentials/computed.md
      dissimilarity index 16%
      diff --git a/src/guide/essentials/conditional.md b/src/guide/essentials/conditional.md
      dissimilarity index 79%
      diff --git a/src/guide/essentials/event-handling.md b/src/guide/essentials/event-handling.md
      dissimilarity index 25%
      diff --git a/src/guide/essentials/forms.md b/src/guide/essentials/forms.md
      dissimilarity index 49%
      diff --git a/src/guide/essentials/list.md b/src/guide/essentials/list.md
      dissimilarity index 14%
      diff --git a/src/guide/essentials/reactivity-fundamentals.md b/src/guide/essentials/reactivity-fundamentals.md
      dissimilarity index 11%
      diff --git a/src/guide/essentials/template-refs.md b/src/guide/essentials/template-refs.md
      dissimilarity index 13%
      diff --git a/src/guide/essentials/watchers.md b/src/guide/essentials/watchers.md
      dissimilarity index 16%
      diff --git a/src/guide/extras/animation.md b/src/guide/extras/animation.md
      dissimilarity index 33%
      diff --git a/src/guide/extras/reactivity-in-depth.md b/src/guide/extras/reactivity-in-depth.md
      dissimilarity index 7%
      diff --git a/src/guide/introduction.md b/src/guide/introduction.md
      dissimilarity index 84%
      diff --git a/src/guide/quick-start.md b/src/guide/quick-start.md
      dissimilarity index 66%
      diff --git a/src/guide/reusability/composables.md b/src/guide/reusability/composables.md
      dissimilarity index 5%
      diff --git a/src/guide/scaling-up/routing.md b/src/guide/scaling-up/routing.md
      dissimilarity index 43%
      diff --git a/src/guide/scaling-up/sfc.md b/src/guide/scaling-up/sfc.md
      dissimilarity index 94%
      diff --git a/src/guide/scaling-up/state-management.md b/src/guide/scaling-up/state-management.md
      dissimilarity index 26%
      diff --git a/src/index.md b/src/index.md
      diff --git a/src/sponsor/index.md b/src/sponsor/index.md
      dissimilarity index 88%
      diff --git a/src/translations/index.md b/src/translations/index.md
      dissimilarity index 50%`
    }
  }
}
