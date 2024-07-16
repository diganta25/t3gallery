import { clerkClient } from "@clerk/nextjs/server";
import { getImages } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  if (Number.isNaN(props.id)) throw new Error("Invalid photo id");

  const image = await getImages(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className="flex-shrink object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-lg border-b text-center p-2">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded by:</span>
          <span>{uploaderInfo.firstName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
