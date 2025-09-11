import theking from "../assets/maxresdefault.svg";
import bar1 from "../assets/rooftop_bar1.jpg";
import bar2 from "../assets/rooftop_bar2.jpg";
import bar3 from "../assets/rooftop_bar3.jpg";
import bar4 from "../assets/rooftop_bar4.jpg";
import res1 from "../assets/restaurant_1.jpg";
import res2 from "../assets/restaurant_2.jpg";

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
    date: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Full",
    image: bar1,
  },
  {
    id: 2,
    title: "LeOblock",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Nearly full",
    image: bar2,
  },
  {
    id: 3,
    title: "Louis Lim Estate",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "",
    image: bar3,
  },
  {
    id: 4,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Popular",
    image: bar4,
  },
  {
    id: 5,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "",
    image: bar4,
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
    image: res1,
  },
  {
    id: 2,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Nearly full",
    image: bar4,
  },
  {
    id: 3,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "",
    image: res2,
  },
  {
    id: 4,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Popular",
    image: bar3,
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
