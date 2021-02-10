import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={img.id}
                                {...img} 
                            />
                        )
                        )
                    }
            </div>
        </>
    )
}
