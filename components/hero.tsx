export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="ml-2 lg:ml-28 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="">
            <h1 className="mt-24 text-4xl font-bold text-gray-900 sm:mt-10 sm:text-6xl tracking-tight">Bienvenue à <span className="text-indigo-600 font-bold">Macou 2</span></h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 ">
              Venez découvrir Macou 2, un véritable joyau de 140 m² avec un parc arboré <br /> de 20000 m² en plein coeur du périgord
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/la-maison"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Découvrir
              </a>
              <a href="reservations" className="text-sm font-semibold leading-6 text-gray-900">
                Réserver <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full p-4 md:p-0 bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full mt-12"
            src="home.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
