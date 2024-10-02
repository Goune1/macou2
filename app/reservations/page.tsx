"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '@/components/nav'
import Link from 'next/link'
import { SquareArrowOutUpRight } from 'lucide-react';

export default function tarifETreservations() {
    return (
        <div className='min-h-screen'>
            <Nav/>

            <h1 className='text-center text-4xl lg:text-6xl font-bold mt-24 tracking-tight'>Réservations</h1>
            <p className='text-center text-xl p-4'>Voici où vous pourrez nous retrouver afin de réserver votre séjour chez nous</p>

            <div className='mt-36 md:ml-20'>
                <div className='flex flex-col md:flex-row justify-center'>
                    <a className='ml-8' href="https://www.clevacances.com/fr/locationvacances/aquitaine/dordogne/capdrot-8355/dordogne_gite_avec_spa_exterieur_dans_grand_parc_arbore_en_plein_coeur_du_perigord_pres_de_monpazier/2910" target='_blank' rel='noopener noreferrer'>
                        <img src="clevacances.png" className='w-56 md:w-72' alt="logo clé vacances"/>
                    </a>

                    <div className='flex flex-col gap-y-4'>
                        <h1 className='text-2xl lg:ml-12 text-center'>
                            Retrouvez nous sur 
                            <Link className='text-blue-700 inline-flex items-center ml-0.5 font-semibold underline' href='https://www.clevacances.com/fr/locationvacances/aquitaine/dordogne/capdrot-8355/dordogne_gite_avec_spa_exterieur_dans_grand_parc_arbore_en_plein_coeur_du_perigord_pres_de_monpazier/2910' target='_blank' rel='noopener noreferrer' >
                                Clé Vacances
                                <SquareArrowOutUpRight className='ml-1' />
                            </Link>
                        </h1>

                        <div className='flex'>
                            <p className='bg-green-700 w-12 py-1.5 text-center rounded-lg ml-12'>10/10</p>
                            <p className='py-1.5 ml-2 font-semibold'>(31 avis)</p>
                            <img src="cles.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-36'>
                <div className='flex flex-col md:flex-row justify-center'>
                    <a className='ml-8' href="https://fr.airbnb.be/rooms/14684208?source_impression_id=p3_1727873821_P3cxax1drsKeB8Ufhttps://www.airbnb.fr/rooms/14684208?adults=1&children=0&enable_m3_private_room=true&infants=0&location=macou%202&pets=0&search_mode=regular_search&check_in=2024-10-03&check_out=2024-10-08&source_impression_id=p3_1727873993_P3fNy5iq6LQgyIms&previous_page_section_name=1001&federated_search_id=e32723ef-860f-45dd-ad77-7e6bb659bc60" target='_blank' rel='noopener noreferrer'>
                        <img src="airbnb.png" className='w-48 md:w-72' alt="logo abritel"/>
                    </a>
                    

                    <div className='flex flex-col gap-y-4'>
                        <h1 className='text-2xl lg:ml-12 text-center'>
                            Retrouvez nous sur 
                            <Link className='text-blue-700 inline-flex items-center ml-0.5 font-semibold underline' href='https://www.airbnb.fr/rooms/14684208?adults=1&children=0&enable_m3_private_room=true&infants=0&location=macou%202&pets=0&search_mode=regular_search&check_in=2024-10-03&check_out=2024-10-08&source_impression_id=p3_1727873993_P3fNy5iq6LQgyIms&previous_page_section_name=1001&federated_search_id=e32723ef-860f-45dd-ad77-7e6bb659bc60' target='_blank' rel='noopener noreferrer' >
                                Airbnb
                                <SquareArrowOutUpRight className='ml-1' />
                            </Link>
                        </h1>

                        <div className='flex'>
                            <p className='bg-green-700 w-16 py-1.5 text-center rounded-lg ml-12'>4,89/5</p>
                            <p className='py-1.5 ml-2 font-semibold'>(18 avis)</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='mt-36'>
                <div className='flex flex-col md:flex-row justify-center'>
                    <a className='ml-8' href="https://www.abritel.fr/location-vacances/p1127012?dateless=true&x_pwa=1&rfrr=HSR&pwa_ts=1717591136417&referrerUrl=aHR0cHM6Ly93d3cuYWJyaXRlbC5mci9Ib3RlbC1TZWFyY2g%3D&useRewards=true&adults=2&regionId=3000429025&destination=Capdrot%2C%20Dordogne%2C%20France&destType=MARKET&latLong=44.681259%2C0.922409&privacyTrackingState=CAN_NOT_TRACK&searchId=1ce37d49-fc99-48e0-8f47-e39fd275c6cd&sort=RECOMMENDED&userIntent=&expediaPropertyId=18966646&propertyName=G%C3%AEte%20avec%20SPA%20dans%20un%20grand%20parc%20en%20plein%20c%C5%93ur%20du%20P%C3%A9rigord%20%28%20Monpazier-Dordogne%29" target='_blank' rel='noopener noreferrer'>
                        <img src="logo-abritel.webp" className='w-56 md:w-72' alt="logo abritel"/>
                    </a>
                    

                    <div className='flex flex-col gap-y-4'>
                        <h1 className='text-2xl lg:ml-12 text-center'>
                            Retrouvez nous sur 
                            <Link className='text-blue-700 inline-flex items-center ml-0.5 font-semibold underline' href='https://www.abritel.fr/location-vacances/p1127012?dateless=true&x_pwa=1&rfrr=HSR&pwa_ts=1717591136417&referrerUrl=aHR0cHM6Ly93d3cuYWJyaXRlbC5mci9Ib3RlbC1TZWFyY2g%3D&useRewards=true&adults=2&regionId=3000429025&destination=Capdrot%2C%20Dordogne%2C%20France&destType=MARKET&latLong=44.681259%2C0.922409&privacyTrackingState=CAN_NOT_TRACK&searchId=1ce37d49-fc99-48e0-8f47-e39fd275c6cd&sort=RECOMMENDED&userIntent=&expediaPropertyId=18966646&propertyName=G%C3%AEte%20avec%20SPA%20dans%20un%20grand%20parc%20en%20plein%20c%C5%93ur%20du%20P%C3%A9rigord%20%28%20Monpazier-Dordogne%29' target='_blank' rel='noopener noreferrer' >
                                Abritel 
                                <SquareArrowOutUpRight className='ml-1' />
                            </Link>
                        </h1>

                        <div className='flex'>
                            <p className='bg-green-700 w-16 py-1.5 text-center rounded-lg ml-12'>9,6/10</p>
                            <p className='py-1.5 ml-2 font-semibold'>(29 avis)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-36 pb-36'>
                <div className='flex flex-col md:flex-row justify-center'>
                    <a className='ml-8' href="https://www.booking.com/hotel/fr/maison-de-vacance-macou-2.fr.html?aid=356980&label=gog235jc-1FCA0oTUIZbWFpc29uLWRlLXZhY2FuY2UtbWFjb3UtMkgNWANoTYgBAZgBDbgBF8gBD9gBAegBAfgBAogCAagCA7gChuOBswbAAgHSAiQ2M2ZlNTY5Mi1hNWFiLTQ2MTgtYmRkMS1mYjZmMTJlNDlkOWPYAgXgAgE&sid=db5ad313b540f327dc45a6775be8e83e;dest_id=2300688;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;soh=1;sr_order=popularity;srepoch=1717596738;srpvid=c37063de5d960163;type=total;ucfs=1&" target='_blank' rel='noopener noreferrer'>
                        <img src="booking.png" className='w-56 md:w-72' alt="logo abritel"/>
                    </a>

                    <div className='flex flex-col gap-y-4'>
                        <h1 className='text-2xl ml-12'>
                            Retrouvez nous sur 
                            <Link className='text-blue-700 inline-flex items-center ml-0.5 font-semibold underline' href='https://www.booking.com/hotel/fr/maison-de-vacance-macou-2.fr.html?aid=356980&label=gog235jc-1FCA0oTUIZbWFpc29uLWRlLXZhY2FuY2UtbWFjb3UtMkgNWANoTYgBAZgBDbgBF8gBD9gBAegBAfgBAogCAagCA7gChuOBswbAAgHSAiQ2M2ZlNTY5Mi1hNWFiLTQ2MTgtYmRkMS1mYjZmMTJlNDlkOWPYAgXgAgE&sid=db5ad313b540f327dc45a6775be8e83e;dest_id=2300688;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;soh=1;sr_order=popularity;srepoch=1717596738;srpvid=c37063de5d960163;type=total;ucfs=1&' target='_blank' rel='noopener noreferrer' >
                                Booking
                                <SquareArrowOutUpRight className='ml-1' />
                            </Link>
                        </h1>

                        <div className='flex'>
                            <p className='bg-green-700 w-16 py-1.5 text-center rounded-lg ml-12'>8,5/10</p>
                            <p className='py-1.5 ml-2 font-semibold'>(4 avis)</p>
                        </div>
                    </div>
                </div>
            </div>

            


            
        </div>
    )
}