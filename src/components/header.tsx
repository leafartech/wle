import Image from "next/image";
import { Button } from "./button";

export function Header() {
    return (
        <header className="relative h-screen w-full flex items-center justify-center px-4">
            <div className="w-full max-w-6xl sm:grid sm:grid-cols-2 items-center sm:gap-0">
                <div className="flex flex-col gap-2 items-start sm:text-left text-center">
                    <p className="uppercase font-semibold tracking-wider text-sm text-[#1DB83D]">Emita seu certificado via vídeo conferência!</p>
                    <h1 className="text-3xl sm:text-5xl font-bold">Proteja seu negócio com os <span className="text-[#1DB83D]">Certificados Digitais</span> da WLE!</h1>
                    <Button />
                </div>
                <div className="hidden sm:block">
                    <Image
                        src="/images/bg.png"
                        alt="Imagem de entregador feliz"
                        width={644}
                        height={524}
                    />
                </div>
                <div className="sm:hidden block mt-4">
                    <Image
                        src="/images/bg1.png"
                        alt="Imagem de entregador feliz"
                        width={860}
                        height={809}
                    />
                </div>
            </div>
            <div className="hidden sm:block absolute left-12 top-12 rotate-45">
                <Image
                    src="/images/dots.png"
                    alt="Imagem de entregador feliz"
                    width={48}
                    height={48}
                />
            </div>
            <div className="hidden sm:block absolute right-12 bottom-12 rotate-45">
                <Image
                    src="/images/dots.png"
                    alt="Imagem de entregador feliz"
                    width={64}
                    height={64}
                />
            </div>
            <div className="hidden sm:block absolute right-36 top-36 rotate-0">
                <Image
                    src="/images/bars.png"
                    alt="Imagem de entregador feliz"
                    width={64}
                    height={17}
                />
            </div>
            <div className="hidden sm:block absolute right-[50%] bottom-36 rotate-0">
                <Image
                    src="/images/bars.png"
                    alt="Imagem de entregador feliz"
                    width={64}
                    height={17}
                />
            </div>
            <svg className="absolute bottom-0 h-20 w-20 fill-[#1DB83D] rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M328-400q-9 0-14.5-6t-5.5-14q0-2 6-14l145-145q5-5 10-7t11-2q6 0 11 2t10 7l145 145q3 3 4.5 6.5t1.5 7.5q0 8-5.5 14t-14.5 6H328Z" />
            </svg>
        </header>
    )
}