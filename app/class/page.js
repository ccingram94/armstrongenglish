import BookingCalendar from "../../components/BookingCalendar";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

function Class() {
  return (
    <div className="bg-hero bg-cover bg-center w-full">
      <div className="w-full h-full bg-violet-900/90 min-h-screen">
        <div className="w-full h-full">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-3xl p-2 pt-6 font-extrabold text-white">Book a Class</h1>
            <h2 className="text-xl p-2 font-bold text-white/70">One Class (25 Minutes) $25</h2>
          </div>
        </div>
        {/* Top Section: Booking Calendar */}
        <div className="w-full h-full">
          <div className="flex flex-row flex-wrap justify-center items-center">
            <BookingCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;