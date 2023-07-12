import Image from "next/image"
import { useState, type ReactNode, HTMLAttributes } from 'react';

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function Card({ children, image }: { children: React.ReactNode, image: string }) {

    return (
        <a href={image} className="group">
            {children}
        </a>
    )
}

function CardImage({ alt, src }: { alt: string, src: string }) {
    const [isLoading, setLoading] = useState(true)
    return (
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image
                alt={alt}
                src={src}
                layout="fill"
                objectFit="cover"
                className={cn(
                    'duration-700 ease-in-out group-hover:opacity-75',
                    isLoading
                        ? 'scale-110 blur-2xl grayscale'
                        : 'scale-100 blur-0 grayscale-0'
                )}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>
    )
}

function CardId({ children }: { children: ReactNode }) {
    return (
        <h3 className="mt-4 text-sm text-gray-700">{children}</h3>
    )
}

function CardDescription({ children }: { children: ReactNode }) {
    return (
        <strong>{children}</strong>
    )
}

function CardAuthor({ children, ...rest }: { children: ReactNode } & Omit<HTMLAttributes<HTMLParagraphElement>, ''>) {
    return (
        <p className="mt-1 text-lg font-medium text-red-500" {...rest}>{children}</p>
    )
}


Card.Image = CardImage
Card.Id = CardId
Card.Author = CardAuthor
Card.Description = CardDescription

export { Card }
// export { Card, CardImage, CardId, CardDescription, CardAuthor }