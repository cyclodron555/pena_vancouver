/**
 * Peña Madridista Vancouver - Events
 * Easy-to-edit event data structure
 */

export interface Event {
  id: string;
  title: string;
  date: string; // Format: "2024-12-15"
  time: string; // Format: "19:00" (24-hour)
  location: string;
  description: string;
  image: string; // Placeholder path, will be replaced
  rsvpLink?: string;
}

export const events: Event[] = [
  {
    id: "event-1",
    title: "Real Madrid vs Barcelona - Match Gathering",
    date: "2024-12-15",
    time: "19:00",
    location: "Cactus Club Cafe, Vancouver Downtown",
    description:
      "Join us for one of the most anticipated matches of the season! Watch the classic El Clásico with fellow Madridistas and enjoy food and drinks.",
    image: "/images/placeholder-event.png",
    rsvpLink: "https://wa.me/group-link", // PLACEHOLDER
  },
  {
    id: "event-2",
    title: "Pre-Season Training Watch Party",
    date: "2024-12-22",
    time: "14:30",
    location: "Online via Zoom",
    description:
      "Watch Real Madrid's pre-season friendly match together. Link will be shared with members.",
    image: "/images/placeholder-event.png",
  },
  {
    id: "event-3",
    title: "Peña Madridista Winter Celebration",
    date: "2024-12-28",
    time: "20:00",
    location: "The Rec Room, Granville Street",
    description:
      "Year-end celebration for all our members! Food, drinks, and great company while we celebrate Real Madrid's year.",
    image: "/images/placeholder-event.png",
    rsvpLink: "https://wa.me/group-link", // PLACEHOLDER
  },
];
