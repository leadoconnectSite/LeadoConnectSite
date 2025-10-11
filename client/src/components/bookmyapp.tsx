import { useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export type BookMyAppProps = {
  variant?: "desktop" | "mobile";
};

export default function BookMyApp({ variant = "desktop" }: BookMyAppProps) {
  const [selectedDate, setSelectedDate] = useState<string>(() => new Date().toISOString().split("T")[0]);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const buttonProps = {
    className:
      "leadconnect-accent text-leadconnect-dark px-6 py-2.5 font-semibold hover:bg-leadconnect-accent-hover transition-colors text-sm w-full",
    "data-testid": variant === "mobile" ? "button-mobile-book-demo" : "button-desktop-book-demo",
  } as const;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button {...buttonProps}>Book a Demo</Button>
      </DialogTrigger>
      {variant === "mobile" ? (
        <DialogContent className="bg-leadconnect-dark text-white border border-leadconnect-teal">
          <DialogHeader>
            <DialogTitle>
              <div className="flex items-center gap-2">
                <span className="text-white text-xl md:text-2xl font-bold tracking-tight">
                  LeadoConnect<span className="text-accent">.</span>
                </span>
              </div>
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Schedule a demo with our CEO <span className="font-semibold text-white">Darryl Alexander</span>
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div className="space-y-1">
              <p className="text-white font-semibold">Darryl Alexander</p>
              <p className="text-gray-300">LeadoConnect-Web</p>
              <p className="text-gray-300">30 min</p>
              <p className="text-gray-400 text-sm">Web conferencing details provided upon confirmation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2 border border-white/10">
                <CalendarDays className="w-4 h-4 text-accent" />
                <input
                  type="date"
                  className="bg-transparent outline-none w-full text-sm placeholder-gray-400"
                  aria-label="Select date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </label>
              <label className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2 border border-white/10">
                <Clock className="w-4 h-4 text-accent" />
                <input
                  type="time"
                  className="bg-transparent outline-none w-full text-sm placeholder-gray-400"
                  aria-label="Select time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
              </label>
            </div>
            <div className="space-y-2">
              <p className="text-white font-semibold text-base">Boost Your B2B Sales – Schedule a Free Consultation!</p>
              <p className="text-gray-300 text-sm">Here’s what you’ll gain from this 1-on-1 call:</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>A tailored outbound strategy for 2025-2026.</li>
                <li>An in-depth analysis of your sales and lead generation processes.</li>
                <li>A comprehensive review of your existing outbound sales and marketing workflows.</li>
                <li>An evaluation of your current status and a discussion of future goals.</li>
              </ul>
              <div className="pt-2 text-sm text-gray-300 space-y-1">
                <p>LeadoConnect</p>
                <p>Fueling Your Sales Pipeline.</p>
                <p>Looking Forward to Meeting You.</p>
                <p>Show less</p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="leadconnect-accent text-leadconnect-dark px-5 py-2 font-semibold hover:bg-leadconnect-accent-hover w-full">
                Confirm Booking
              </Button>
            </div>
          </div>
        </DialogContent>
      ) : (
        <DialogContent className="bg-leadconnect-dark text-white border border-leadconnect-teal max-w-3xl">
          <div className="space-y-4 mt-2">
            <div className="space-y-1">
              <p className="text-white font-semibold text-lg">Darryl Alexander</p>
              <p className="text-gray-300">LeadoConnect-Web</p>
              <p className="text-gray-300">30 min</p>
              <p className="text-gray-400 text-sm">Web conferencing details provided upon confirmation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2 border border-white/10">
                <CalendarDays className="w-4 h-4 text-accent" />
                <input
                  type="date"
                  className="bg-transparent outline-none w-full text-sm placeholder-gray-400"
                  aria-label="Select date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </label>
              <label className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2 border border-white/10">
                <Clock className="w-4 h-4 text-accent" />
                <input
                  type="time"
                  className="bg-transparent outline-none w-full text-sm placeholder-gray-400"
                  aria-label="Select time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
              </label>
            </div>
            <div className="space-y-2">
              <p className="text-white font-semibold text-base">Boost Your B2B Sales – Schedule a Free Consultation!</p>
              <p className="text-gray-300 text-sm">Here’s what you’ll gain from this 1-on-1 call:</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>A tailored outbound strategy for 2025-2026.</li>
                <li>An in-depth analysis of your sales and lead generation processes.</li>
                <li>A comprehensive review of your existing outbound sales and marketing workflows.</li>
                <li>An evaluation of your current status and a discussion of future goals.</li>
              </ul>
              <div className="pt-2 text-sm text-gray-300 space-y-1">
                <p>LeadoConnect</p>
                <p>Fueling Your Sales Pipeline.</p>
                <p>Looking Forward to Meeting You.</p>
                <p>Show less</p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="leadconnect-accent text-leadconnect-dark px-5 py-2 font-semibold hover:bg-leadconnect-accent-hover w-full">
                Confirm Booking
              </Button>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
