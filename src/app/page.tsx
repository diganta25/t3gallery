
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/86bcab69-1c0f-4af4-b883-99d041c40a27-hb45kw.png",
  "https://utfs.io/f/cb1badc1-e379-44a3-b2de-00a5ad5e5d70-m42r3.jpg",
  "https://utfs.io/f/1b051fd5-d98d-4ce1-b297-ec90f1d502b1-sterc4.png",
  "https://utfs.io/f/733c7a14-1d3d-44eb-a89c-1688bbd951c0-o0sxot.png"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts)

  return (
    <main className="">
      {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
   
    </main>
  );
}
