import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'

export function TopNav(){ 
    return (
      <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b border-rose-600">
        <div>Gallery</div>
  
        <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
        </div>
      </nav>
    )
  }
  