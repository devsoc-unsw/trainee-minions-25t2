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

