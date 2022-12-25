import Link from "next/link"

const Footer = () => {
    return (
      <div className="grid place-items-center py-10 bg-base-300">
          <p className="text-center text-base lg:text-xl px-4 lg:px-20">
            Killed by Fekra is the Graveyard of a list of a great projects that started in Fekra and was not continued or published.<br></br><br></br>
          We aim to record history of unfinished projects and keep them as a reminder to keep in mind while doing future projects.<br></br><br></br>
          You can join the discussion on <Link href="https://github.com/laitooo/Killed-By-Fekra" className="text-blue-500">Github</Link>.<br></br><br></br>
          This project was developed by by <Link href="https://laitooo.vercel.app"  className="text-blue-500">Alzobair Mohammed (laitooo)</Link>.</p>
      </div>
    )
  }
  
  export default Footer
  