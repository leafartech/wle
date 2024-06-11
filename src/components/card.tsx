import { ReactNode } from "react";

interface CardProps {
    children: ReactNode
    title: string
}

export function Card({ children, title }: CardProps) {
    return (
        <div className="bg-emerald-100 border border-zinc-400 rounded-xl px-4 sm:px-8 py-8 sm:py-12 flex flex-col gap-2 sm:gap-4">
            <h3 className="text-2xl font-bold text-[#1DB83D]">{title}</h3>
            {children}
        </div>
    )
}