import { makeAutoObservable } from 'mobx';

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  }
}

// Create a single instance of the store
export const rootStore = new RootStore();