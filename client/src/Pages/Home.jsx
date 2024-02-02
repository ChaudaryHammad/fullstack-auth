import { Link } from "react-router-dom"
import Footer from "../components/Footer"


function Home() {
  return (
    <div className="h-[80vh]">
      <section className="text-white bg-fixed w-full h-full bg-cover bg-center"   style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1543836707-85c7c91203f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
      <hr />
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-black via-blue-500 to-black bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl"
      >
        Understand User Authentication and Authorization Flow.

        <span className="sm:block"> Stay secure and stay connected. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          to="/sign-in"
        >
          Get Started
        </Link>

        <Link
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          to="/about"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>
<div>
  
</div>

<br />
<br />
<br />
<Footer/>
    </div>
  )
}

export default Home