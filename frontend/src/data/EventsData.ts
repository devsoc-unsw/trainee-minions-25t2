import theking from "../assets/maxresdefault.svg";

export interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  price: string;
  status: string;
  image: any;
}

export const popularEvents: Event[] = [
  {
    id: 1,
    title: "LeOblock",
    date: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Full",
    image: theking,
  },
  {
    id: 2,
    title: "LeOblock",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Nearly full",
    image: theking,
  },
  {
    id: 3,
    title:
      "LeOblock | LeOblock | LeOblock | LeOblock | LeOblock | LeOblock | LeOblock | LeOblock | LeOblock",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "",
    image: theking,
  },
  {
    id: 4,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Popular",
    image: theking,
  },
  {
    id: 5,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "",
    image: theking,
  },
];

export const weekendEvents: Event[] = [
  {
    id: 1,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Full",
    image: theking,
  },
  {
    id: 2,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Nearly full",
    image: theking,
  },
  {
    id: 3,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "",
    image: theking,
  },
  {
    id: 4,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Popular",
    image: theking,
  },
  {
    id: 5,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "",
    image: theking,
  },
];
