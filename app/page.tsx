import { MainHeader } from '../components/MainHeader'

export default function Home() {
    return (
        <>
            <MainHeader links={[{ label: 'test1', link: '/' }]}/>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                綺麗なウェブサイトですね
            </main>
        </>
    )
}
