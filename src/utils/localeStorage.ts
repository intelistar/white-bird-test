export const storage = {
  set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  clear(): void {
    localStorage.clear();
  },

  addToArray<T>(key: string, item: T) {
    const existing = storage.get<T[]>(key) || [];
    if (!existing.includes(item)) {
      storage.set(key, [...existing, item]);
    }
  },

  removeFromArray<T>(key: string, item: T) {
    const existing = storage.get<T[]>(key) || [];
    storage.set(
      key,
      existing.filter((i) => i !== item),
    );
  },
};
