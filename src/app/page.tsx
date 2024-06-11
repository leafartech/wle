import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Header } from "@/components/header";
import Section from "@/components/section";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-zinc-50 w-full h-full">
      <Header />
      <main>
        <Section className="px-4 pt-0 sm:pt-24 w-full">
          <div className="w-full max-w-5xl flex justify-center">
            <div className="w-full sm:grid sm:grid-cols-2 flex flex-col-reverse gap-6 sm:gap-0   items-center">
              <div className="flex items-center justify-start">
                <Image
                  src="/images/bg2.png"
                  alt="Imagem ilustrativa"
                  width={364}
                  height={364}
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm uppercase text-[#1DB83D] font-semibold">Obtenha Seu Certificado Digital com Conforto e Segurança</h4>
                  <h2 className="text-4xl font-bold">O Que é um Certificado Digital?</h2>
                </div>
                <div className="flex flex-col gap-2 sm:gap-4">
                  <p className="text-zinc-600">O Certificado Digital é uma ferramenta essencial para quem deseja realizar transações online com segurança.</p>
                  <p className="text-zinc-600">Ele garante a autenticidade e a integridade das informações, proporcionando confiança em operações como
                    assinatura de documentos, acesso a sistemas e serviços públicos, entre outros.</p>
                </div>
                <Button />
              </div>
            </div>
          </div>
        </Section>
        <Section className="px-4 pt-8 sm:pt-24">
          <div className="flex flex-col gap-4 w-full  max-w-5xl">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm uppercase text-[#1DB83D] font-semibold">Vantagens de fazer via videoconferência</h4>
              <h2 className="text-4xl font-bold">Por Que Escolher Nosso Serviço?</h2>
            </div>
            <div className="flex sm:flex-row flex-col gap-4">
              <Card
                title="Comodidade:">
                <p className="text-zinc-600">Adquira seu certificado digital sem precisar se deslocar até uma certificadora. Todo o processo é realizado online, através de uma videoconferência.</p>
              </Card>
              <Card
                title="Rapidez:">
                <p className="text-zinc-600">Nossa equipe está pronta para atendê-lo de forma ágil, garantindo que você tenha seu certificado em mãos o mais rápido possível.</p>
              </Card>
              <Card
                title="Segurança:">
                <p className="text-zinc-600">Utilizamos tecnologia de ponta para assegurar que todos os procedimentos são realizados de maneira segura e conforme as normas legais.</p>
              </Card>
            </div>
            <div className="flex sm:flex-row flex-col gap-4">
              <Card
                title="Amplo Alcance:"
              >
                <p className="text-zinc-600">Permite que pessoas em regiões remotas ou com dificuldade de acesso a postos físicos também possam obter seu certificado digital.</p>
              </Card>
              <Card
                title="Rapidez na emissão:"
              >
                <p className="text-zinc-600">O uso de videoconferência acelera a verificação e validação dos documentos, aumentando a rapidez do processo de emissão do certificado digital.</p>
              </Card>
            </div>
            <p className="text-zinc-600 sm:text-center text-left text-xl my-4">Essas vantagens tornam o processo de obtenção do certificado digital por videoconferência uma opção atraente e moderna, alinhada com as necessidades de um mundo cada vez mais digital e conectado.</p>
            <div className="w-full flex justify-center">
              <Button />
            </div>
          </div>
        </Section>
        <Section className="px-4 pt-8 sm:pt-24">
          <div className="w-full max-w-5xl flex justify-center">
            <div className="w-full sm:grid sm:grid-cols-2 flex flex-col gap-6 sm:gap-0 items-center">
              <div className="flex flex-col items-start gap-4 w-full max-w-5xl">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl font-bold">Como Funciona?</h2>
                </div>
                <ul className="flex flex-col gap-4">
                  <li className="flex-col gap-0">
                    <h5 className="font-semibold text-xl text-[#1DB83D]">1. Certificado:</h5>
                    <p className="text-zinc-600 flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 fill-black w-6 h-6" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M328-400q-9 0-14.5-6t-5.5-14q0-2 6-14l145-145q5-5 10-7t11-2q6 0 11 2t10 7l145 145q3 3 4.5 6.5t1.5 7.5q0 8-5.5 14t-14.5 6H328Z" /></svg>
                      <span>Escolha qual o modelo de certificado você precisa adquirir.</span>
                    </p>
                  </li>
                  <li className="flex-col gap-0">
                    <h5 className="font-semibold text-xl text-[#1DB83D]">2. Agendamento:</h5>
                    <p className="text-zinc-600 flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 fill-black w-6 h-6" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M328-400q-9 0-14.5-6t-5.5-14q0-2 6-14l145-145q5-5 10-7t11-2q6 0 11 2t10 7l145 145q3 3 4.5 6.5t1.5 7.5q0 8-5.5 14t-14.5 6H328Z" /></svg>
                      <span>Selecione o melhor horário para realizar sua videoconferência.</span>
                    </p>
                  </li>
                  <li className="flex-col gap-0">
                    <h5 className="font-semibold text-xl text-[#1DB83D]">3. Documentação:</h5>
                    <p className="text-zinc-600 flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 fill-black w-6 h-6" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M328-400q-9 0-14.5-6t-5.5-14q0-2 6-14l145-145q5-5 10-7t11-2q6 0 11 2t10 7l145 145q3 3 4.5 6.5t1.5 7.5q0 8-5.5 14t-14.5 6H328Z" /></svg>
                      <span>Esteja com os documentos necessários da empresa (contrato social) e sua CNH.</span>
                    </p>
                  </li>
                  <li className="flex-col gap-0">
                    <h5 className="font-semibold text-xl text-[#1DB83D]">4. Videoconferência:</h5>
                    <p className="text-zinc-600 flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 fill-black w-6 h-6" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M328-400q-9 0-14.5-6t-5.5-14q0-2 6-14l145-145q5-5 10-7t11-2q6 0 11 2t10 7l145 145q3 3 4.5 6.5t1.5 7.5q0 8-5.5 14t-14.5 6H328Z" /></svg>
                      <span>Nossa equipe entrará em contato no dia e hora marcado para a videoconferência.</span>
                    </p>
                  </li>
                  <li className="flex-col gap-0">
                    <h5 className="font-semibold text-xl text-[#1DB83D]">5. Recebimento:</h5>
                    <p className="text-zinc-600 flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 fill-black w-6 h-6" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M328-400q-9 0-14.5-6t-5.5-14q0-2 6-14l145-145q5-5 10-7t11-2q6 0 11 2t10 7l145 145q3 3 4.5 6.5t1.5 7.5q0 8-5.5 14t-14.5 6H328Z" /></svg>
                      <span>Após a validação, seu certificado digital será emitido e enviado eletronicamente.</span>
                    </p>
                  </li>
                </ul>
                <Button />
              </div>
              <div className="flex items-center justify-end">
                <Image
                  src="/images/bg3.png"
                  alt="Imagem ilustrativa"
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </div>
        </Section>
        <Section className="px-4 pt-8 sm:pt-24">
          <div className="flex flex-col gap-4 max-w-5xl">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm uppercase text-[#1DB83D] font-semibold">Documentos Necessários</h4>
              <h2 className="text-2xl sm:text-4xl font-bold">Para a emissão do seu certificado digital, você precisará dos seguintes documentos:</h2>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex-col gap-2">
                <h5 className="font-semibold text-xl text-[#1DB83D]">CNH:</h5>
                <p className="text-zinc-600">Contrato Social para empresas LTDA.</p>
              </li>
              <li className="flex-col gap-2">
                <h5 className="font-semibold text-xl text-[#1DB83D]">Tipos de Certificados Disponíveis:</h5>
                <p className="text-zinc-600"><strong>e-CNPJ</strong>: Para empresas que necessitam realizar operações fiscais, contábeis e administrativas de forma segura.</p>
                <p className="text-zinc-600"><strong>e-CPF</strong>: Ideal para pessoas físicas que desejam assinar documentos, acessar serviços públicos, entre outras utilidades.</p>
              </li>
            </ul>
            <Button />
          </div>
        </Section>
      </main>
      <footer className="bg-[#303030] sm:mt-24 mt-12 py-6 flex items-center justify-center">
        <div className="flex justify-center w-32">
          <Image
            src="/images/logo.png"
            alt="Logo Solutio Gás"
            width={392}
            height={166}
          />
        </div>
      </footer>
    </div>
  )
}
