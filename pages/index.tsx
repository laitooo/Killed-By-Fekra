import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import { projectsList } from '../data/projectsList'
import ProjectCard from '../components/project'
import Header from '../components/header'
import Metadata from '../components/metadata'
import Footer from '../components/footer'

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
    <div>
      <Metadata/>
      <div data-theme="synthwave" className="min-h-screen">
        <Header/>
        <div className="grid place-items-center items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-20 px-4 pt-5 pb-20">
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
        <Footer/>
      </div>
    </div>
  )
}
