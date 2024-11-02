 import Logo from './images/logo.png'
 import Image from 'next/image'

  function NavBar(){
    return(
        <div className='flex flex-row items-center w-full h-[96px] bg-[#0a0a0a] px-[60px] fixed'>
            <div className='flex items-start w-[150px] '>
                <h1 className='text-white text-2xl '>
                    SD SILVEIRA
                </h1>
            </div>

          
            <div className='flex flex-row gap-12 w-full justify-end'>
    <a href="#inicio" className='relative text-gray-400 text-xl transition duration-[0.8s] ease-in-out group'>
        <span className='relative z-10'>Inicio</span>
        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
    </a>
    <a href="" className='relative text-gray-400 text-xl transition duration-[0.8s] ease-in-out group'>
        <span className='relative z-10'>Sobre Mim</span>
        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
    </a>
    <a href="#projetos" className='relative text-gray-400 text-xl transition duration-[0.8s] ease-in-out group'>
        <span className='relative z-10'>Trabalhos</span>
        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
    </a>
</div>


        </div>

    )
  }

  export default NavBar