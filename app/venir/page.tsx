import Nav from '@/components/nav'
import Map from '@/components/map'

export default function venir() {
    return (
        <div className='min-h-screen'>
            <Nav/>

            <h1 className='text-center text-3xl lg:text-5xl font-bold tracking-tight pt-24 p-4'>Comment venir à <span className='text-indigo-600'>Macou 2</span> ?</h1>

            <div className='flex justify-center mt-24'>
                <div className='flex flex-col lg:flex-row p-4'>
                    <Map/>

                    <div className='flex flex-col gap-y-20 pt-12 max-w-screen p-4'>
                        <div className='lg:ml-48'>
                            <h1 className='text-3xl font-semibold'>Position GPS :</h1>
                            <p>N  44°41&apos;05&apos;&apos;  E  0°55&apos;09&apos;&apos; </p>
                        </div>

                        <div className='lg:ml-48 '>
                            <h1 className='text-3xl font-semibold'>Adresse pour nous trouver :</h1>
                            <p>Sur Waze : Maison de vacances Macou2, 24540 Capdrot</p>
                            <p>Sur Maps : Macou2, 24540 Capdrot</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
