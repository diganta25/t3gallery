import { getImages } from "~/server/queries";


export default async function FullPageImageView(props: {id: number}) {


  if (Number.isNaN(props.id)) throw new Error("Invalid photo id")

  const image = await getImages(props.id)
  return (
    <img src={image.url} className="w-96" />
  )
}