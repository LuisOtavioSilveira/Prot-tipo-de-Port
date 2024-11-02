import Image from "next/image"
import Projetos from './images/Play.jpg'


function Projeto(){
    return(
        <div className="flex flex-col w-full h-[800px] p-5 border-b-2 border-b-white" id="projetos">
            <div className="flex flex-col w-full h-auto   ">
            <h1 className='text-6xl font-extrabold text-red-500'>Trabalhos</h1>
        <p className='text-lg text-gray-400 '>Aqui estão alguns dos meus projetos mais recentes, <br/>onde utilizei tecnologias modernas para entregar soluções eficientes e inovadoras.</p>
 
            </div>
            <div className="flex flex-row py-[30px] ">
                <div className="flex flex-col w-1/2 bg-gray-800 h-[600px] rounded-[20px] ">
                 <div className="flex items-center  justify-center h-full w-full">
                    <Image src={Projetos} className="rounded-[20px] w-[700px] h-[500px]"/>

                 </div>
                </div>

                 <div className="flex flex-col w-1/2 items-center ">
                 <h1 className="text-white text-4xl">DESCRIÇÃO DO PROJETO</h1>

                 </div>

            </div>

        </div>

    )
}

export default Projeto