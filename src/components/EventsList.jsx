import React from "react";
import EventCardV2 from "./EventCardV2";
import { BlurFade } from "./ui/BlurFade";

const EventsData = [
  {
    EventName: "LOLFEST 2024 Finale",
    EventDesc:
      "Radio Mango's biggest comedy competition concludes with a laugh riot. Watch top comedians battle for the title!",
    EventLink: "https://www.example.com",
    EventDate: "20 March 2024",
    EventTime: "09:00 - 13:00",
    EventLoc: "SDPK Hall",
  },
  {
    EventName: "CollaboWrite: Story Writing Competition",
    EventDesc:
      "Unleash your creativity! Excel 2024 presents a story writing competition with exciting prizes. Get a chance to be published!",
    EventLink: "https://bit.ly/CollaboWrite2024.Edgar",
    EventDate: "20 March 2024",
    EventTime: "09:00 - 13:00",
    EventLoc: "SDPK Hall",
  },
  {
    EventName: "Inkspire: Story Writing Workshop",
    EventDesc:
      "Hone your writing skills with Juney Thomas! Learn the secrets of crafting captivating stories.",
    EventLink: "https://bit.ly/Inkspire2024",
    EventDate: "20 March 2024",
    EventTime: "09:00 - 13:00",
    EventLoc: "SDPK Hall",
  },
  {
    EventName: "Excel 2024 Logo Launch",
    EventDesc:
      "Witness the grand unveiling of Excel 2024's official logo! Enjoy soulful music and celebrate innovation.",
    EventLink: "https://www.youtube.com/live/TFjKOhHUa5E?si=QKntbesfC_FKIiyl",
    EventDate: "20 March 2024",
    EventTime: "09:00 - 13:00",
    EventLoc: "SDPK Hall",
  },
  {
    EventName: "Games Galore",
    EventDesc:
      "Kick off Excel 2024 with non-stop fun and games! Join us for an evening of pure joy and laughter.",
    EventLink: "https://www.example.com",
    EventDate: "20 March 2024",
    EventTime: "09:00 - 13:00",
    EventLoc: "SDPK Hall",
  },
  {
    EventName: "Get Ready With Maveli - Onam Reel Challenge",
    EventDesc:
      "Show off your Onam style! Create a dazzling reel featuring a stunning transition to your Onam outfit.",
    EventLink: "https://forms.gle/KLnG9TVA8CXJTR5t5",
    EventDate: "20 March 2024",
    EventTime: "09:00 - 13:00",
    EventLoc: "SDPK Hall",
  },
  {
    EventName: "Mahindra Super League Kerala - Super Shootout Challenge",
    EventDesc:
      "Join the football fever! Participate in a fun-filled football session with players from SLK.",
    EventLink: "https://www.example.com",
    EventDate: "20 March 2024",
    EventTime: "09:00 - 13:00",
    EventLoc: "SDPK Hall",
  },
];

const EventsList = () => {
  return (
    <div className="flex flex-col items-center gap-8 mt-8">
      {EventsData.map((event, index) => (
        <BlurFade
          key={index}
          delay={0.1 + index * 0.1}
          duration={0.5}
          yOffset={9}
        >
          <div>
            <EventCardV2 {...event} />
          </div>
        </BlurFade>
      ))}
    </div>
  );
};

export default EventsList;
