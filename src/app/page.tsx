import About from "./components/about/about"
import Header from "./components/about/header"

const Helloworld = () => {
  return (
    <div>
      <div>
      <h1 className="bg-slate-400 text-yellow-400 text-center text-5xl">Hello World</h1>
      <Header/>
      <About/>
      </div>
    </div>
  )
}

export default Helloworld