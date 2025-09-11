import { Request, Response } from "express";
import * as eventService from "../services/eventAttendee.services";
import { Event, VenueEvents, EventStore, FullEventDetails, EventDetails } from "../constants/types";
import { eventsCollection } from "../db";

async function viewAllEventsByHost(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function viewSingleEventByHost(req: Request, res: Response) {
    try {

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function createEvent(req: Request, res: Response) {
    try {
        const { title,
            date,
            venue,
            price,
            status,
            image,
            location,
            description,
            registrationDeadlines,
            capacity,
            ageRangeMax,
            emergencyContact } = req.body;

        const newEvent: EventDetails = {
            id: Date.now(), // or just use mongodb's
            title: title,
            date: date,
            venue: venue,
            price: price,
            status: status,
            image: image,
            location: location,
            description: description,
            registrationDeadlines: registrationDeadlines,
            capacity: capacity,
            ageRange: ageRangeMax,
            emergencyContact: emergencyContact,
        };
        eventsCollection.insertOne(newEvent); // new item inserted into db through backend
        res.status(201).json(newEvent);
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

export { viewAllEventsByHost, viewSingleEventByHost, createEvent, deleteEvent, updateEvent };