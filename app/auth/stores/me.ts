import { create } from "zustand";

type TStates = {
  me: undefined | any;
};

type TActions = {
  setMe: (me: TStates) => void;
};

const useMeStore = create<TStates & TActions>((set) => ({
  me: undefined,
  setMe: (me: TStates) => set({ me }),
}));

export default useMeStore;
