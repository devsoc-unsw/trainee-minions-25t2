import { Request, Response } from "express";
import * as eventService from "../services/eventAttendee.services";
import { Event, VenueEvents, EventStore, FullEventDetails, EventDetails } from "../constants/types";
import { eventsCollection, eventsDisplayCollection } from "../db";


async function viewAllEventsByHost(req: Request, res: Response) {
    try {
        const documents = await eventsDisplayCollection.find().toArray();
        res.json(documents);
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

        // hardcoded - CreateEvent does not have form inputs for these values:
        const defaultVenue = 'Courtside Lakers';
        const defaultPrice = 'From $1';
        const defaultStatus = 'Full';

        const newDisplayEvent: Event = {
            id: newEvent.id,
            title: title,
            date: date, // example: Tuesday at 7:00pm
            venue: defaultVenue,
            price: defaultPrice, //
            status: defaultStatus, //
            image: 'https://images.unsplash.com/photo-1597290282695-edc43d0e7129?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyfGVufDB8fDB8fHww' // default stand-in image for now
        }
        eventsDisplayCollection.insertOne(newDisplayEvent);
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