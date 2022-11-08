import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "new": {},
  "project": {},
  "event_log": {}
}});

export default useIoStore;
