import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aboutMe')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>
        <h1 className='text-center text-8xl font-bold my-20'>Ola!</h1>
        <div className='grid grid-cols-3'>
          <img className='row-start-1 row-end-4 drop-shadow-md drop-shadow-black' src="perfil.jpg" alt="" />
          <p className='col-start-2 col-end-4 pl-6 text-3xl font-extralight self-end'>Eu me chamo João Paulo, eu sou um tecnico de informatica e estudate de rede de computadores.</p>
          <p className='col-start-2 col-end-4 pl-6 text-3xl font-extralight self-center'>Conheço as linguagens de programação Python, Java, Java Scrpit. Type Script, a Biblioteca React, e o Framework Angular alem da linguagem SQl para banco de dados.</p>
          <p className='col-start-2 col-end-4 pl-6 text-3xl font-extralight self-start'>Atualmente cursando rede de computadores no Instituto Federal do Rio de Janeiro, enquanto busco uma oportinidade de ingressar no mercado de trabalho.</p>
        </div>
        <div className='flex flex-col w-1/2 mx-auto my-10'>
          <h2 className='text-3xl text-emerald-700'>Estudos</h2>
          <p className='text-lg'>Eu começei meus estudos Instuto Federal do Rio de Janeiro fazendo o curso de tecnico de computadores integrado ao ensino médio. Atualmente estou no curso superor de rede de computadores, no mesmo instituto, que esta previsto terminar em dezembro de 2026</p>
          <h2 className='text-3xl text-emerald-700'>Contatos</h2>
          <ul className='text-lg list-disc pl-5'>
            <li>E-mail:
              <a href="mailto:joaopauloleiresloeps.15@gmali.com" target='_blank' >joaopauloleiresloeps.15@gmali.com</a>
            </li>
            <li>Github:
              <a href="https://github.com/Jsp0w" target='_blank'>Jsp0w</a>
            </li>
            <li>Linkedin:
              <a href="./aboutMe">João Paulo Leires Lopes</a>
            </li>
          </ul>
          {/* <a href="./aboutMe">Meu Curriculo em PDF</a> */}
        </div>
      </div>
    </>
  )
}
