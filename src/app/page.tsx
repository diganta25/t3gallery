
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

// const mockUrls = [
//   "https://utfs.io/f/86bcab69-1c0f-4af4-b883-99d041c40a27-hb45kw.png",
//   "https://utfs.io/f/cb1badc1-e379-44a3-b2de-00a5ad5e5d70-m42r3.jpg",
//   "https://utfs.io/f/1b051fd5-d98d-4ce1-b297-ec90f1d502b1-sterc4.png",
//   "https://utfs.io/f/733c7a14-1d3d-44eb-a89c-1688bbd951c0-o0sxot.png"
// ]

// const mockImages = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url,
// }))

async function Images (){
  const images = await getMyImages();


  return (
  <div className="flex flex-wrap justify-center gap-4 p-4">
  
     
  {images.map((image) => (
    <div key={image.id} className="w-48 h-48 flex flex-col">
      <Link href={`/img/${image.id}`}>
        <Image 
          src={image.url} 
          style={{objectFit: "contain"}}
          width={192}
          height={192}
          alt={image.name}
        />
      </Link>
      <div>{image.name}</div>
    </div>
  ))}
</div>
  )
}

export default async function HomePage() {

 
  return (
    <main className="">
     
     <SignedOut>
      <div className="w-full h-full text-2xl text-center">
        Please sign in above
      </div>
     </SignedOut>
     <SignedIn>
      <Images/>
     </SignedIn>

    
   
    </main>
  );
}
