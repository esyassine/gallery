import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchImages } from './redux/gallerySlice';
import { RootState, AppDispatch } from './redux/store';
import { useGallery } from './useGallery';

interface Image {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}


function Home()  {
  const dispatch: AppDispatch = useDispatch();
  const pictures = useSelector((state: RootState) => state.gallery.pictures);
  const status = useSelector((state: RootState) => state.gallery.status);
  const error = useSelector((state: RootState) => state.gallery.error);
  const [data, setData] = useState<Image[]>([]);
  
  const galleryHook = useGallery(data )
  useEffect(() => {
    dispatch(fetchImages());
    setData(pictures);
  }, [dispatch, pictures]);

  // Renderiza el contenido según el estado de la solicitud fetch
  if (status === 'loading') {
    return <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">            
        <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">                
          </div>
        </div>   
      </div>
    </div>
</>;
  }
  else if (status === 'failed') {
    return <div>Error al obtener las imágenes: {error}</div>;
  }
  
  return (
    <div>              
      {galleryHook}    
    </div>
  );  

}

export default Home;



// import Image from 'next/image'
// import { useState, useEffect } from 'react'
// import axios from 'axios';
// import { useGallery } from './useGallery';

// export async function getStaticProps() {
//   try {
//     const response = await axios.get('/api');
//     const images = response.data;
//     return {
//       props: {
//         images: images,
//       },
//     };
//   } catch (error) {
//     console.error('Error al obtener las imágenes:', error);
//     return {
//       props: {
//         images: [],
//       },
//     };
//   }
// }


// export default function MyComponent({ images }: { images: any[] }) {
//   return (
//     <div>
//       {useGallery(images)}
//     </div>
//   );
// }