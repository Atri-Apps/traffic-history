import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "new": {},
  "project": {},
  "event_log": {},
  "community": {}
}});

export default useIoStore;
