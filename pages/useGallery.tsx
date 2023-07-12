import { useState } from 'react';
import Image from 'next/image'
import { Card } from '../components/Compound';

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type Image = {
    id: number
    author: string
    width: number
    height: number
    url: string
    download_url: string
}

/**
 * Componente que renderiza un Card que contiene la imagen, el autor y el id de la imagen
 * @param props
 * @returns component props
 */
function CardImageProps({ image, author, id, description = 'bla bla bla' }: { image: string, author: string, id: number, description?: string }) {
    const [isLoading, setLoading] = useState(true)
    return (
        <>        
        <a href={image} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                    alt={author}
                    src={image}
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
            {id && <h3 className="mt-4 text-sm text-gray-700">{id}</h3>}           
            {author && <p className="mt-1 text-lg font-medium text-gray-900">{author}</p>}
            {description && <strong>{description}</strong>}
        </a>
        </>
    )
}

/**
 * hook que renderiza un componente que contiene los componentes por porps/ y los componentes por composicion por cachetos
 * @param images 
 * @returns componente compound Card
 */
export function useGallery(images: Image[]) {    
    return (
        <>       
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">    

        <h1 className='mt-1 text-xl font-medium text-blue-500'>Compound component</h1>        
            <br></br>  
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {images.map(({id, author, download_url, height, url, width}: Image) => (
                    <Card key={id} image={download_url}>
                        <Card.Image alt={author} src={download_url}></Card.Image>
                        <Card.Id>{id}</Card.Id>                     
                        <Card.Author onMouseEnter={() => console.log("hola on mouse enter")}>{author}</Card.Author>
                        <Card.Description>descripcion</Card.Description>
                        <div>height : {height} px</div>
                        <div>width : {width} px</div>
                    </Card>
                ))}
            </div>

        <br></br>
        <h1 className='mt-1 text-xl font-medium text-blue-500'>Props component</h1>              
        <br></br>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {images && images.map((image: Image) => (
                    <CardImageProps key={image.id} image={image.download_url} author={image.author} id={image.id} />
                ))}              
            </div>
            <br></br>                   
        </div>                               
        </>
    )
}

