import { useCallback, useContext, useMemo } from "react";
import { FirebaseContext } from "../context/firebase";
import { startOfDay, endOfDay, getTime } from "date-fns";
import { Bookings } from "../types";
import { parseSnapshot } from "src/lib/parser";

const useGetCount = () => {
  const { firebase } = useContext(FirebaseContext);

  const getCount = useCallback(
    async (date: Date | number) => {
      if (!firebase) {
        return 0;
      }
      const collectionRef = firebase.firestore().collection("bookings");

      const snapshot = await collectionRef
        .where("date", ">", getTime(startOfDay(date)))
        .where("date", "<", getTime(endOfDay(date)))
        .get();

      if (snapshot.empty) {
        console.warn("No matching documents");
        return 0;
      }

      // @ts-ignore
      const bookings: Bookings = parseSnapshot(snapshot);
      const bookingsCount = bookings.reduce(
        (acc, currentItem) => acc + Number(currentItem.people),
        0
      );

      return bookingsCount;
    },
    [firebase]
  );

  return useMemo(() => ({ getCount }), [getCount]);
};

export { useGetCount };
