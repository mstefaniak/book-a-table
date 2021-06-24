import firebase from "firebase";

export enum STATUS {
  CANCELED = 0,
  NEW = 1,
  CONFIRMED = 2,
  PREPARED = 3,
  FINISHED = 4,
}

export interface Booking {
  id: string;
  name: string;
  status: STATUS;
  people: number;
  area: string;
  comment: string;
  date: {
    seconds: number;
    nanoseconds: number;
  };
}
export type Bookings = Array<Booking>;

export type FirebaseSnapshot =
  firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>;
