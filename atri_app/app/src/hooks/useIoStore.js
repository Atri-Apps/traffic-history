import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "new": {},
  "traction": {},
  "event_log": {}
}});

export default useIoStore;
