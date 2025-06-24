import React from 'react'

export default function TemplateSection() {
  return (
    <div>
      {/* Section Melanjutkan Tonton Film  */}
      {[
        {
          title: "Melanjutkan Tonton Film",
          movies: 10,
          image: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/04/a-collage-of-ultimate-digimon-from-digimon-adventure.jpg",
        },


      ].map((section, i) => (
        <section key={i} className="px-6 py-6">
          <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide">


            {[...Array(section.movies)].map((_, idx) => (
              <div className='relative' key={idx}>
                                    
                
                <div key={idx} className="overflow-x-auto space-x-4 scrollbar-hide     min-w-[170px] flex-shrink-0 rounded-lg">
                  <div className="absolute px-2 py-1 text-[12px] bg-blue-700 text-white mx-4 my-3  rounded-full ">Episode Baru</div>
                  <div className='absolute'>
                    <div className="flex absolute">
                      <div className="mt-29 mr-30 ml-2 text-[6px] text-justify text-white">Judul Film</div>
                      <div className="mt-29 text-[6px] text-white">Rating</div>
                    </div>
                  </div>
                  <img src={section.image} alt="Film" className="h-[150px] w-[550px]" />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}


      {/* Top Rating Film dan Series Hari ini */}
      {[
        {
          title: "Top Rating Film dan Series Hari ini",
          movies: 9,
          image: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/04/a-collage-of-ultimate-digimon-from-digimon-adventure.jpg",
        },


      ].map((section, i) => (
        <section key={i} className="px-6 py-6">
          <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide">


            {[...Array(section.movies)].map((_, idx) => (
              <div className='relative' key={idx}>

                <div key={idx} className="overflow-x-auto space-x-4 scrollbar-hide  min-w-[300px] flex-shrink-0 rounded-lg">
                  {/* <div className="absolute">
                    <div className="mx-39 text-l text-white text-center bg-red-700 rounded-bl-lg  rounded-tr-lg ">Top 10</div>
                  </div> */}

                  <img src={section.image} alt="Film" className="h-[400px] w-[350px] " />
                </div>

              </div>
            ))}
          </div>
        </section>
      ))}


{/* Film Tranding */}
      {[
        {
          title: "Film Tranding",
          movies: 9,
          image: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/04/a-collage-of-ultimate-digimon-from-digimon-adventure.jpg",
        },


      ].map((section, i) => (
        <section key={i} className="px-6 py-6">
          <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide">


            {[...Array(section.movies)].map((_, idx) => (
              <div className='relative' key={idx}>

                <div key={idx} className="overflow-x-auto space-x-4 scrollbar-hide     min-w-[300px] flex-shrink-0 rounded-lg">
                  <div className="absolute">
                    <div className="mx-64 text-l text-white text-center bg-red-700 rounded-bl-lg  rounded-tr-lg ">Top 10</div>
                  </div>

                  <img src={section.image} alt="Film" className="h-[400px] w-[350px]" />
                </div>

              </div>
            ))}
          </div>
        </section>
      ))}

{/* RIlis Baru */}
      {[
        {
          title: "Rilis Baru",
          movies: 9,
          image: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/04/a-collage-of-ultimate-digimon-from-digimon-adventure.jpg",
        },


      ].map((section, i) => (
        <section key={i} className="px-6 py-6">
          <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide">


            {[...Array(section.movies)].map((_, idx) => (
              <div className='relative'>

                <div key={idx} className="overflow-x-auto space-x-4 scrollbar-hide     min-w-[300px] flex-shrink-0 rounded-lg">
                  {/* <div className="absolute">
                    <div className="mx-39 text-l text-white text-center bg-red-700 rounded-bl-lg  rounded-tr-lg ">Top 10</div>
                  </div> */}

                  <img src={section.image} alt="Film" className="h-[400px] w-[350px]" />
                </div>

              </div>
            ))}
          </div>
        </section>
      ))}







    
    </div>
  )
}
