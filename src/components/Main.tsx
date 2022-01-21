import '../styles/global.scss'
import '../styles/card.scss'
import '../styles/main.scss'
import { Card } from './Card'
import { api } from '../services/api'
import { useEffect, useState } from 'react'

export interface PhotosProps {
    alt: string,
    id: string,
    src:{
      small?: string,
      original?: string, 
    }
  }

export function Main(){
  const [photos, setPhotos] = useState<PhotosProps[]>([])

  useEffect(() => {
    api.get('people')
    .then(response => setPhotos(response.data.photos))
  }, [])
console.log(photos)
  return(
    <main>
      {photos.map(photo =>{
        return <Card key={photo.id} photos={photo} />
      })}
    </main>
  )
}