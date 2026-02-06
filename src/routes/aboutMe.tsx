import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aboutMe')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>
        <h1>Ola!</h1>
        <p>Eu me chamo João Paulo, eu sou um tecnico de informatica e estudate de rede de computadores.</p>
        <p>Conheço as linguagens de programação Python, Java, Java scrpit, e o Framework Angular alem da linguagem SQl para banco de dados.</p>
        <p>Atualmente venho buscando uma oportunidade de emprego como programador back-end.</p>
        <h2>Estudos</h2>
        <p>Eu começei meus estudos no ensino médio no Instuto Federal do Rio de Janeiro, e após terminar meus estudos basicos engrecei em um curso superor de rede de computadores que esta previsto terminar em dezembro de 2026</p>
        <h2>Contatos</h2>
        <ul>
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
        <a href="./aboutMe">Meu Curriculo em PDF</a>
      </div>
    </>
  )
}
