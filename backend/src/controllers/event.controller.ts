import { Request, Response } from "express";
import * as eventService from "../services/event.services";
import { } from "../constants/types";

async function viewAllEvent(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function viewSingleEvent(req: Request, res: Response) {
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

export {viewAllEvent, viewSingleEvent, createEvent, deleteEvent, updateEvent, signUpForEvent, unsignUpForEvent};