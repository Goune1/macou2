import Nav from '@/components/nav'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
  

export default function laMaison() {
    return (
        <div className='min-h-screen'>
            <Nav/>

            <h1 className='text-4xl lg:text-6xl text-center font-semibold pt-24'>Découvrez la maison !</h1>

            <div className='flex flex-col lg:flex-row justify-center mt-36 p-4 ml-12'>
                <div className=''>
                    <Carousel className='w-customCarouselMobile lg:w-customCarousel'>
                        <CarouselContent className='z-1'>
                            <CarouselItem><img src="/exterieur/1.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 1" /></CarouselItem>
                            <CarouselItem><img src="/exterieur/2.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 2" /></CarouselItem>
                            <CarouselItem><img src="/exterieur/3.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 3" /></CarouselItem>
                            <CarouselItem><img src="/exterieur/4.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 4" /></CarouselItem>
                        </CarouselContent>
                        <CarouselNext className='z-50'/>
                        <CarouselPrevious className='z-50'/>
                    </Carousel>
                </div>

                <div className='max-w-2xl lg:ml-48'>
                    <h1 className='text-5xl font-semibold'>L&apos;extérieur</h1>
                    <p>L&apos;extérieur de Macou 2 est extrêmement vaste : près de 20000m². Il contient notamment un grand jardin devant la maison et une immense forêt derrière. <br /> Il y a également de l&apos;ombre pour pouvoir s&apos;y installer confortablement l&apos;été</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center mt-36 p-4 ml-12'>
                <div className='max-w-xl'>
                    <h1 className='text-5xl font-semibold'>Le SPA</h1>
                    <p>La maison possède un SPA de la marque Hydropool. Ce dernier possède 2 places assises et une place couchée. Il est minutieusement entretenu afin d&apos;éviter quelconque problème d&apos;hygiène</p>
                </div>

                <div className='lg:ml-72'>
                    <Carousel className='w-customCarouselMobile lg:w-customCarousel'>
                        <CarouselContent className='z-1'>
                            <CarouselItem><img src="/spa/1.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 1" /></CarouselItem>
                            <CarouselItem><img src="/spa/2.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 2" /></CarouselItem>
                            <CarouselItem><img src="/spa/3.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 3" /></CarouselItem>
                        </CarouselContent>
                        <CarouselNext className='z-50'/>
                        <CarouselPrevious className='z-50'/>
                    </Carousel>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center mt-36 p-4 ml-12'>

                <div className=''>
                    <Carousel className='w-customCarouselMobile lg:w-customCarousel'>
                        <CarouselContent className='z-1'>
                            <CarouselItem><img src="/sejour/1.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 1" /></CarouselItem>
                            <CarouselItem><img src="/sejour/2.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 2" /></CarouselItem>
                            <CarouselItem><img src="/sejour/3.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 3" /></CarouselItem>
                            <CarouselItem><img src="/sejour/4.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 4" /></CarouselItem>
                            <CarouselItem><img src="/sejour/5.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 5" /></CarouselItem>
                            <CarouselItem><img src="/sejour/6.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo sejour 6" /></CarouselItem>
                        </CarouselContent>
                        <CarouselNext className='z-50'/>
                        <CarouselPrevious className='z-50'/>
                    </Carousel>
                </div>

                <div className='max-w-2xl lg:ml-48'>
                    <h1 className='text-5xl font-semibold'>Le séjour & salle à manger</h1>
                    <p>Le séjour contient un canapé, 2 fauteuils inclinables grand confort, une grande télévision accompagnée de son lecteur DVD ainsi que la cheminée. <br />Le séjour est plein de vieux meubles et de vieilles décorations comme des outils utilisés dans les champs par exemple.</p>
                </div>

                
            </div>

            <div className='flex flex-col lg:flex-row justify-center mt-36 p-4 ml-12'>
                <div className=' max-w-xl'>
                    <h1 className='text-5xl font-semibold'>Les chambres</h1>
                    <p>La maison de Macou contient 3 chambres au summum du confort. Deux contenant un unique lit double et une autre contenant un lit double et deux lits simples.</p>
                </div>

                <div className='lg:ml-72 pb-48'>
                    <Carousel className='w-customCarouselMobile lg:w-customCarousel'>
                        <CarouselContent className='z-1'>
                            <CarouselItem><img src="/chambres/0.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo chambre 1" /></CarouselItem>
                            <CarouselItem><img src="/chambres/1.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo chambre 2" /></CarouselItem>
                            <CarouselItem><img src="/chambres/2.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo chambre 3" /></CarouselItem>
                            <CarouselItem><img src="/chambres/5.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo chambre 4" /></CarouselItem>
                            <CarouselItem><img src="/chambres/3.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo chambre 5" /></CarouselItem>
                            <CarouselItem><img src="/chambres/4.JPG" className='w-customCarouselMobile lg:w-customCarousel h-64 lg:h-96' alt="photo chambre 6" /></CarouselItem>
                            
                        </CarouselContent>
                        <CarouselNext className='z-50'/>
                        <CarouselPrevious className='z-50'/>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}