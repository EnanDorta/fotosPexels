import '../styles/global.scss'
import '../styles/card.scss'

interface PhotosCardprops{
  photos: {
    alt: string,
    id: string,
    src:{
      small?: string,
      original?: string, 
  }
 }
}
export function Card(props: PhotosCardprops){

  return(
    <div className="container" key={props.photos.id}>
      <div className="wrapper">
        <img src={props.photos.src.small} alt={props.photos.alt} className="img" />
        </div>
      <p>{props.photos.alt}</p>
    </div>
  )
}