import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import { projectsList } from '../data/projectsList'
import ProjectCard from '../components/project'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  const openProjectDetails = (id: number) => {
    router.push({
      pathname: '/details',
      query: { "id": id },
    });
  }

  return (
    <html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="Mech, Mobile, Flutter, Projects, Killed, nextjs"></meta>
        <meta name="description" content="Lists of projects killed by Fekra"></meta>
        <meta property="og:title" content="Killed by Fekra" />
        <meta property="og:image" content="http://localhost:3000/images/fekra.jpg" />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="http://localhost:3000/images/fekra.jpg"></link>
        <title>Killed by Fekra</title>
      </Head>

      <div data-theme="synthwave" className="min-h-screen">
        <div className="grid place-items-center py-10 text-white font-semibold">
          <div className="flex flex-row">
            <p className="mt-10 md:mt-12 text-2xl md:text-5xl">Killed by </p>
            <img src="/images/fekra.png" alt="Fekra" className="w-40 md:w-60" />
          </div>
        </div>
        <div className="grid place-items-center items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 px-4 pt-5 pb-20">
          {
            projectsList.sort((a, b) => (a.date < b.date ? -1 : 1)).map((item, index) => {
              return (
                <div key={index} onClick={(e) => openProjectDetails(item.id)}>
                  <ProjectCard project={item} />
                </div>
              )
            })
          }
        </div>
      </div>
    </html>
  )
}
