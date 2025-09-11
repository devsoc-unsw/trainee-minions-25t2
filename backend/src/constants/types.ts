import { ObjectId } from "mongodb"

// Auth
export type SessionId = string;
export type Name = string;
export type UserId = string;
export type Email = string;
export type Password = string;


export type Session = {
  // _id: ObjectId,
  sessionId: SessionId;
  userId: UserId;
};

export type User = {
  // _id: ObjectId,
  name: Name;
  email: Email;
  password: Password;
  userId: UserId;
};

// types for dataStore
export type SessionStore = {
  sessions: Session[];
};

// Event type
export interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  price: string;
  status: string;
  image: any;
}

export interface EventDetails {
  id: number;
  title: string;
  date: string;
  venue: string;
  price: string;
  status: string;
  image: any;
  location: string;
  description: string;
  registrationDeadlines: string;
  capacity: number;
  ageRange: number;
  emergencyContact: string; // email format?
}
export interface FullEventDetails {
  id: number;
  title: string;
  date: string;
  venue: string;
  price: string;
  status: string;
  image: any;
  location: string;
  description: string;
  registrationDeadlines: string;
  capacity: number;
  ageRange: number[]; // main difference here. TODO: replace EventDetails with FullEventDetails type
  emergencyContact: string;
}

export interface VenueEvents {
  venue: string;
  events: Event[];
}

export type EventStore = {
  events: Event[];
}

