import { Request, Response } from "express";
import * as eventService from "../services/eventAttendee.services";
import { } from "../constants/types";

async function viewAllEventAttendee(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function viewSingleEventAttendee(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function signUpForEvent(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function unsignUpForEvent(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export {
    viewAllEventAttendee, 
    viewSingleEventAttendee, 
    signUpForEvent, 
    unsignUpForEvent
};