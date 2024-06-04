import Nav from '@/components/nav'
import Calendar from '@/components/ui/calendar'

export default function tarifETreservations() {
    return (
        <div className='min-h-screen'>
            <Nav/>

            <h1>tarifs & réservations</h1>

            <Calendar/>
        </div>
    )
}