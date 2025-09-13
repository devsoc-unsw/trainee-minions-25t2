// Database queries
// "Rules" e.g. password validation

import { ErrorMap } from "../constants/errors";
import {
    Name,
    Email,
    Password,
    Session,
    UserId,
    User,
    SessionId,
    Gender,
    Sexuality,
} from "../constants/types";
import { v4 as uuidv4 } from "uuid";
import { sessionsCollection, usersCollection } from "../db";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";

function isValidName(name: Name): string | boolean {
    if (name.length > 100) {
      return ErrorMap["NAME_TOO_LONG"];
    }
  
    if (name.length < 1) {
      return ErrorMap["NAME_TOO_SHORT"];
    }
  
    return true;
}

async function isValidEmail(
    email: Email,
    isRegister?: boolean
  ): Promise<string | boolean> {
    if (email.length > 50) {
      return ErrorMap["EMAIL_TOO_LONG"];
    }
  
    if (email.length < 1) {
      return ErrorMap["EMAIL_TOO_SHORT"];
    }
  
    const usersDoc = await usersCollection.findOne({});
    const users = usersDoc?.users || [];
  
    if (users.find((u: User) => u.email === email) && isRegister) {
      return ErrorMap["EMAIL_ALREADY_EXISTS"];
    }
  
    return true;
}

function isValidPassword(password: Password): string | boolean {
    if (password.length < 6) {
      return ErrorMap["PASSWORD_LENGTH"];
    }
  
    const numPattern = /\d/;
    const upperPattern = /[A-Z]/;
    const lowerPattern = /[a-z]/;
    if (
      !numPattern.test(password) ||
      !upperPattern.test(password) ||
      !lowerPattern.test(password)
    ) {
      return ErrorMap["PASSWORD_SYMBOLS"];
    }
  
    return true;
  }

  export async function authRegister(
    name: Name,
    email: Email,
    password: Password,
    gender: Gender,
    sexuality: Sexuality
  ): Promise<Session> {
    if (isValidName(name) !== true) {
      throw new Error(isValidName(name) as string);
    }
  
    if ((await isValidEmail(email, true)) !== true) {
      throw new Error((await isValidEmail(email, true)) as string);
    }
  
    if (isValidPassword(password) !== true) {
      throw new Error(isValidPassword(password) as string);
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    const session: Session = {
      sessionId: uuidv4(),
      userId: uuidv4(),
    };
  
    const user: User = {
      name: name,
      email: email,
      password: password,
      userId: session.userId,
      gender: gender,
      sexuality: sexuality
    };
  
    await sessionsCollection.insertOne(session);
  
    await usersCollection.insertOne(user);
    return session;
  }
  
  export async function authLogin(email: Email, password: Password) {
    const user = await usersCollection.findOne({
      email: email,
      password: password,
    });
  
    if (!user) {
      console.log("should error here");
      throw new Error(
        `${ErrorMap["EMAIL_DOES_NOT_EXIST"]} or ${ErrorMap["PASSWORD_INCORRECT"]}`
      );
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //     throw new Error(`${ErrorMap["PASSWORD_INCORRECT"]}`);
    // }
  
    const session: Session = {
      sessionId: uuidv4(),
      userId: user.userId,
    };
  
    await sessionsCollection.insertOne(session);
    console.log(session.sessionId);
    return session.sessionId;
  }
  
  export async function authLogout(sessionId: SessionId) {
    console.log("sessionId: ", sessionId);
    // Remove session from MongoDB
    await sessionsCollection.deleteOne({
      sessionId: sessionId,
    });
  
    return {};
  }
  