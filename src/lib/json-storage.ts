type Key = string

const create = (storage: Storage) => ({
  push<T>(on: Key, value: T) {
    const items: T[] = []

    const json = localStorage.getItem(on)

    if (json) {
      items.push(...JSON.parse(json))
    }

    items.push(value)

    this.set(on, items)
  },
  set<T>(on: Key, value: T) {
    storage.setItem(on, JSON.stringify(value))
  },
  get<T>(from: Key): T|null {
    const json = storage.getItem(from)

    if (!json) {
      return null
    }

    return JSON.parse(json)
  },
})

export default {
  create,
  local: create(localStorage),
  session: create(sessionStorage),
}
