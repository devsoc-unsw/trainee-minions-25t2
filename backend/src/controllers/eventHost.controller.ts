import { Request, Response } from "express";
import * as eventService from "../services/eventAttendee.services";
import { } from "../constants/types";

async function viewAllEventHost(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function viewSingleEventHost(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function createEvent(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function deleteEvent(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function updateEvent(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export {viewAllEventHost, viewSingleEventHost, createEvent, deleteEvent, updateEvent };