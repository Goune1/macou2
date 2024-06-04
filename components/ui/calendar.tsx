"use client"
import {RangeCalendar} from "@nextui-org/calendar";
import {today, getLocalTimeZone} from '@internationalized/date';

export default function calendar() {
    return (
        <div className="flex gap-x-4">
            <RangeCalendar
                aria-label="Date (Uncontrolled)"
                defaultValue={{
                start: today(getLocalTimeZone()),
                end: today(getLocalTimeZone()).add({weeks: 1}),
                }}
            />
        </div>
    )
}