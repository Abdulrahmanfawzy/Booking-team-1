import React, { useState } from "react";
import BookingCards from "./components/BookingCards";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Booking() {
  const [status, setStatus] = useState("all");

  return (
    <div className="container mx-auto py-5">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
        <div className="space-y-4 w-full lg:w-auto">
          <h1 className="font-bold text-2xl">Your Appointments</h1>

          <Tabs
            defaultValue="all"
            value={status}
            onValueChange={setStatus}
          >
            <TabsList className="h-6 gap-2 bg-transparent">
              <TabsTrigger
                value="all"
                className="h-7 px-6 rounded-lg data-[state=active]:bg-blue-800 data-[state=active]:text-white"
              >
                All
              </TabsTrigger>

              <TabsTrigger
                value="upcoming"
                className="h-8 px-6 rounded-lg data-[state=active]:bg-blue-800 data-[state=active]:text-white"
              >
                Pending
              </TabsTrigger>

              <TabsTrigger
                value="completed"
                className="h-8 px-6 rounded-lg data-[state=active]:bg-blue-800 data-[state=active]:text-white"
              >
                Completed
              </TabsTrigger>

              <TabsTrigger
                value="cancelled"
                className="h-8 px-6 rounded-lg data-[state=active]:bg-blue-800 data-[state=active]:text-white"
              >
                Cancelled
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="w-full lg:w-auto">
          <input
            type="date"
            className="w-full lg:w-80 border rounded-lg p-2"
          />
        </div>
      </div>

      <BookingCards status={status} />
    </div>
  );
}