const Header = () => {
  return (
    <div className="grid place-items-center py-10 text-white font-semibold">
      <a href="/">
        <div className="flex flex-row">
          <p className="mt-10 md:mt-12 text-2xl md:text-5xl">Killed by </p>
          <img src="/images/fekra.png" alt="Fekra" className="w-40 md:w-60" />
        </div>
      </a>

    </div>
  )
}

export default Header
