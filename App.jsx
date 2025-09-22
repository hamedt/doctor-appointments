import { useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button";

export default function AppointmentApp() { const initialSlots = ["09:00", "09:30", "10:00", "10:30", "11:00"]; const [slots, setSlots] = useState(initialSlots); const [appointments, setAppointments] = useState([]); const [name, setName] = useState(""); const [message, setMessage] = useState("");

const handleBook = (slot) => { if (!name) { setMessage("لطفا نام خود را وارد کنید"); return; } if (!slots.includes(slot)) { setMessage("این ساعت قبلا رزرو شده است!"); return; } setAppointments([...appointments, { name, slot }]); setSlots(slots.filter((s) => s !== slot)); setMessage(نوبت شما برای ${slot} ثبت شد.); setName(""); };

return ( <div className="p-6 max-w-xl mx-auto"> <h2 className="text-xl font-bold mb-4 text-center">رزرو نوبت</h2> <Card className="mb-6"> <CardContent> <input type="text" placeholder="نام بیمار" value={name} onChange={(e) => setName(e.target.value)} className="border rounded p-2 w-full mb-4" /> <div className="grid grid-cols-2 gap-2"> {slots.map((slot) => ( <Button key={slot} onClick={() => handleBook(slot)}> {slot} </Button> ))} </div> {message && <p className="mt-4 text-green-600">{message}</p>} </CardContent> </Card>

<h2 className="text-lg font-semibold mb-2">لیست نوبت‌ها (پنل دکتر)</h2>
  <Card>
    <CardContent>
      {appointments.length === 0 ? (
        <p>هنوز نوبتی ثبت نشده</p>
      ) : (
        <ul className="space-y-2">
          {appointments.map((a, i) => (
            <li key={i} className="border rounded p-2">
              {a.slot} — {a.name}
            </li>
          ))}
        </ul>
      )}
    </CardContent>
  </Card>
</div>

); }

