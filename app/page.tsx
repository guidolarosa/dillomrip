import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="opening fixed w-[100vw] h-[100dvh] z-10">
        <Image src="/opening.gif" fill alt="Opening" />
      </div>
      <div className="background absolute w-[100vw] h-[100dvh] z-0">
        <Image src="/bkg.jpg" fill alt="Opening" className="object-cover object-top"/>
      </div>

      <div>

      </div>
    </main>
  )
}
