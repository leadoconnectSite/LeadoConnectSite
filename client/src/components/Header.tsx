import { useMemo, useState } from "react";
import { Menu, X, CalendarDays, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00"];
  const timeZone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 leadconnect-dark border-b border-leadconnect-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-white text-xl md:text-2xl font-bold tracking-tight" data-testid="link-logo">
              LeadoConnect<span className="text-accent">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => {}} 
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              data-testid="button-home"
            >
              Home
            </button>
            <button 
              onClick={() => {}} 
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              data-testid="button-about"
            >
              About Us
            </button>
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center"
                data-testid="button-services"
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-leadconnect-dark border border-leadconnect-teal rounded-md mt-2">
                <button 
                  onClick={() => {}}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Appointment Setting
                </button>
                <button 
                  onClick={() => {}}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                >
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="leadconnect-accent text-leadconnect-dark px-6 py-2.5 font-semibold hover:bg-leadconnect-accent-hover transition-colors text-sm w-full"
                  data-testid="button-mobile-book-demo"
                >
                  Book a Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-leadconnect-dark text-white border border-leadconnect-teal max-w-4xl">
                <div className="space-y-4 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2 border border-white/10">
                      <CalendarDays className="w-4 h-4 text-accent" />
                      <input type="date" className="bg-transparent outline-none w-full text-sm placeholder-gray-400" aria-label="Select date" value={selectedDate?.toISOString().split('T')[0]} onChange={(e) => setSelectedDate(new Date(e.target.value))} />
                    </label>
                    <label className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2 border border-white/10">
                      <Clock className="w-4 h-4 text-accent" />
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`text-xs px-2 py-2 rounded-md border transition-colors ${selectedTime === t ? 'bg-accent text-leadconnect-dark border-accent' : 'border-white/10 bg-white/5 text-white hover:bg-white/10'}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden leadconnect-dark border-t border-leadconnect-teal">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <button
              onClick={() => {}}
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
              data-testid="button-mobile-home"
            >
              Home
            </button>
            <button
              onClick={() => {}}
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
              data-testid="button-mobile-about"
            >
              About Us
            </button>
            <div className="space-y-2">
              <button
                onClick={() => {}}
                className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2 w-full text-left"
                data-testid="button-mobile-services"
              >
                Services
              </button>
              <div className="pl-4 space-y-2">
                <button
                  onClick={() => {}}
                  className="block text-gray-300 hover:text-white transition-colors text-sm font-medium py-1 w-full text-left"
                >
                  Appointment Setting
                </button>
                <button
                  onClick={() => {}}
                  className="block text-gray-300 hover:text-white transition-colors text-sm font-medium py-1 w-full text-left"
                >
                  B2B Lead Generation
                </button>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="leadconnect-accent text-leadconnect-dark px-6 py-2.5 font-semibold hover:bg-leadconnect-accent-hover transition-colors text-sm w-full"
                  data-testid="button-mobile-book-demo"
                >
                  Book a Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-leadconnect-dark text-white border border-leadconnect-teal">
                <DialogHeader>
                  <DialogTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xl md:text-2xl font-bold tracking-tight">LeadoConnect<span className="text-accent">.</span></span>
                    </div>
                  </DialogTitle>
                  <DialogDescription className="text-gray-300">
                    Schedule a demo with our CEO <span className="font-semibold text-white">Darryl Alexander</span>
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2 border border-white/10">
                      <CalendarDays className="w-4 h-4 text-accent" />
                      <input type="date" className="bg-transparent outline-none w-full text-sm placeholder-gray-400" aria-label="Select date" />
                    </label>
                    <label className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2 border border-white/10">
                      <Clock className="w-4 h-4 text-accent" />
                      <input type="time" className="bg-transparent outline-none w-full text-sm placeholder-gray-400" aria-label="Select time" />
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <Button className="leadconnect-accent text-leadconnect-dark px-5 py-2 font-semibold hover:bg-leadconnect-accent-hover w-full">Confirm Booking</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      )}
    </header>
  );
}
