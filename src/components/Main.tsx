import { useEffect, useState } from 'react'
import { Card } from './Card'
import { api } from '../services/api'

import '../styles/global.scss'
import '../styles/card.scss'
import '../styles/main.scss'

export interface PhotosProps {
    alt: string,
    id: string,
    src:{
      small?: string,
      medium?: string,
      original?: string, 
    }
  }

export function Main(){
  const [photos, setPhotos] = useState<PhotosProps[]>([])

  useEffect(() => {
    api.get('nature')
    .then(response => setPhotos(response.data.photos))
  }, [])
  return(
    <main>
      {photos.map(photo =>{
        return <Card key={photo.id} photos={photo} />
      })}
    </main>
  )
}