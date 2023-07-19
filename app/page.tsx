import { HeaderSimple } from "./HeaderSimple";

export default function Home() {
  return (
    <>
      <HeaderSimple links={[{label: 'test1', link: '/'}]}/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        TEST
      </main>
    </>
  )
}
