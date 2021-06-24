import { FirebaseSnapshot } from "src/types";
import { getTime, getHours, getMinutes, setMinutes, setHours } from "date-fns";

export const parseSnapshot = (
  snapshot: FirebaseSnapshot
): Record<string, unknown>[] => {
  return snapshot.docs.map((contentObj) => ({
    ...contentObj.data(),
    id: contentObj.id,
  }));
};

export const combineDateTime = (date: Date, time: Date): number => {
  const hour = getHours(time);
  const minute = getMinutes(time);

  return getTime(setMinutes(setHours(date, hour), minute));
};
