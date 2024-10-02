import Nav from '@/components/nav'
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholder'


export default function alentours() {
    return (
        <div className='min-h-screen'>
            <Nav/>
            
            <h1 className='text-3xl lg:text-5xl font-semibold tracking-tight text-center pt-24'>Que faire aux alentours de la maison ?</h1>
            
            <div className='flex flex-col lg:flex-row justify-center mt-36 p-4 ml-2.5 md:ml-12'>
                <img src="alentours/monpazier.webp" className='w-customImg' alt="Grande place de monpazier" />

                <div className='lg:ml-72 max-w-xl'>
                    <h1 className='text-3xl lg:text-5xl font-semibold'>Monpazier</h1>
                    <p>A 3 km de la maison se trouve la bastide de Monpazier considérée comme le joyau des bastides Périgourdines et classée parmi les Plus Beaux Villages de France. Fondée en 1284 par Edouard 1er d&apos;Angleterre, cette cité a conservé son caractère d&apos;origine</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center mt-36 p-4 ml-2.5 md:ml-12'>
                <div className='max-w-2xl'>
                    <h1 className='text-3xl lg:text-5xl font-semibold'>Le château de Biron</h1>
                    <p>A 10 km de Capdrot, le chateau de Biron. Lors de sa visite, vous pourrez voir les décors du film des Visiteurs avec Jean Reno et Christian Clavier, qui a été tourné en partie ici, tout comme Jeanne d&apos;Arc de Luc Besson et d&apos;autres. Joli village qui propose un marché nocturne en été.</p>
                </div>

                <div className='lg:ml-48'>
                    <img src="alentours/chateau-de-biron.webp" className='w-customImg' alt="Chateau de biron" />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center mt-36 p-4 ml-2.5 md:ml-12'>
                <img src="alentours/beynac.webp" className='w-customImg' alt="Beynac" />

                <div className='lg:ml-72 max-w-xl'>
                    <h1 className='text-3xl lg:text-5xl font-semibold'>Vallée de la Dordogne</h1>
                    <p>A 20km de Macou, découvrez la vallée de la Dordogne et ses sites mondialement connus comme le Château de Beynac, le Château de Castelnaud, le Château des Milandes, la Bastide de Domme ou encore le village de La Roque Gageac.</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center mt-36 p-4 ml-2.5 md:ml-12 pb-48'>
                <div className='max-w-2xl'>
                    <h1 className='text-3xl lg:text-5xl font-semibold'>Sarlat</h1>
                    <p>A environ 40km de la maison, située au cœur de la Dordogne, Sarlat est une ville incontournable du Périgord Noir. Connue pour son riche patrimoine historique et sa gastronomie savoureuse, elle attire chaque année des milliers de visiteurs.</p>
                </div>

                <div className='lg:ml-48'>
                    <img src="alentours/sarlat.webp" className='w-customImg' alt="" />
                </div>
            </div>
        </div>
    )
}