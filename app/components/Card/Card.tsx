   import Image from "next/image"
   import Linkedin from './images/Linkedin-icon.svg'
   import GitHub from './images/GitHub.svg'
   import Mito from './images/Bolso.jpeg'


   function Card(){
    return(
        <div className="flex flex-row px-10 pt-10 border-b-2 border-b-gray-500" id="inicio">
            <div className="h-screen w-1/2">
             <div className="flex flex-col h-full w-full justify-center px-10">
                <h1 className="text-4xl text-white">
                    OLÁ,
                </h1>
                <h1 className="text-4xl text-white">
                    PEQUENO GAFANHOTO!🖖​🧑‍💻
                </h1>
                <p className="text-xl text-white pt-2">Sou um pequeno amante ddo desing intuitivo e componentização de elementos.</p>

              <div className="flex flex-row gap-5 w-full items-center pt-8">
                <button className="w-[180px] h-[40px] bg-[#41a45a] rounded-[20px] text-white border-2 border-green-500 transition duration-[0.5s] hover:text-black hover:bg-white">Contate-me</button>
                    <a href="">
                        
                        <Image src={Linkedin} className="bg-gray-800 rounded-full w-auto h-auto p-2 transition duration-[0.8s] hover:bg-white hover:scale-[1.2]" />
                        
                    </a>
                    <Image src={GitHub} className="bg-gray-800 rounded-full w-auto h-auto p-2 transition duration-[0.8s] hover:bg-white hover:scale-[1.2]" />

              </div>
              </div>

             

            </div>



            <div className="h-screen w-1/2 p-12 flex flex-col">
              <div className="flex items-center justify-center h-full w-full p-3">
                <Image src={Mito} className="h-full w-full rounded-[20px]" />

              </div>

            </div>

        </div>

    )
   }

   export default Card