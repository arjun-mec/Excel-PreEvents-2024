import React from "react";
import {
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  SquareArrowOutUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EventCardV2 = ({
  EventName,
  EventDesc,
  EventDate,
  EventLoc,
  EventTime,
  EventLink,
}) => {
  const handleRegisterClick = () => {
    if (EventLink) {
      window.open(EventLink, "_blank");
    }
  };

  return (
    <div className="flex items-center justify-center event-card">
      <Card className="w-full max-w-[600px] bg-[#7A1CAC] bg-opacity-30 border border-white border-opacity-30 shadow-xl rounded-md">
        <div className="px-2 py-1 bg-opacity-20 rounded-md">
          <CardHeader className="pb-4">
            <CardTitle className="text-white heading-md">{EventName}</CardTitle>
            <CardDescription className="text-sm sm:text-base text-[#f4f7f5] font-robotomono">
              {EventDesc}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 pb-4 font-robotomono">
            <div className="flex items-center text-sm text-[#f4f7f5]">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>{EventDate}</span>
            </div>
            <div className="flex items-center text-sm text-[#f4f7f5]">
              <MapPinIcon className="mr-2 h-4 w-4" />
              <span>{EventLoc}</span>
            </div>
            <div className="flex items-center text-sm text-[#f4f7f5]">
              <ClockIcon className="mr-2 h-4 w-4" />
              <span>{EventTime}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-[#b79ced] mt-2 bg-opacity-30 text-white border border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 transition-all duration-300 font-robotomono"
              onClick={handleRegisterClick}
            >
              Register Now
              <SquareArrowOutUpRight className="ml-3 h-5 w-5" />
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default EventCardV2;
