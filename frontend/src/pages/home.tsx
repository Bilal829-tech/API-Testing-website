import { useEffect, useState } from 'react'
import Loader from '../components/loader'


function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <Loader />
      </div>
    )
  }

  return (
    <div className="min-h-screen  text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-5">
              🚀 API Testing Platform
            </span>


            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Test Your APIs
              <span className="text-blue-500">
                {" "}Easily & Efficiently
              </span>
            </h1>


            <p className="mt-6 text-gray-400 text-lg leading-8">
              A powerful API testing tool for developers to send requests,
              analyze responses, test endpoints and debug APIs with a modern
              and simple interface.
            </p>


            <div className="flex gap-4 mt-8">

              <button className="
                bg-blue-600
                hover:bg-blue-700
                px-6
                py-3
                rounded-lg
                font-semibold
                transition
              ">
                Start Testing
              </button>


              <button className="
                border
                border-gray-600
                hover:border-blue-500
                px-6
                py-3
                rounded-lg
                transition
              ">
                Learn More
              </button>

            </div>

          </div>



          {/* API Preview Card */}
          <div className="
            bg-slate-900
            rounded-2xl
            border
            border-slate-800
            shadow-xl
            overflow-hidden
          ">


            <div className="bg-slate-800 px-5 py-3 flex gap-2">

              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>

            </div>


            <div className="p-6 font-mono">

              <div className="text-green-400">
                GET https://api.example.com/users
              </div>


              <div className="mt-5 bg-black rounded-lg p-5">

                <p className="text-green-500">
                  Status: 200 OK
                </p>


                <pre className="text-gray-300 mt-4 text-sm">
{`{
  "success": true,
  "message": "Data fetched",
  "users": [
    {
      "id": 1,
      "name": "John Doe"
    }
  ]
}`}
                </pre>


              </div>

            </div>

          </div>


        </div>

      </section>




      {/* Features Section */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Everything You Need For API Testing
        </h2>


        <div className="grid md:grid-cols-3 gap-6">


          <div className="
          bg-slate-900
          p-6
          rounded-xl
          border
          border-slate-800
          hover:border-blue-500
          transition
          ">
            <h3 className="text-xl font-semibold">
              ⚡ Fast Testing
            </h3>

            <p className="text-gray-400 mt-3">
              Quickly test API endpoints and get instant responses.
            </p>

          </div>



          <div className="
          bg-slate-900
          p-6
          rounded-xl
          border
          border-slate-800
          hover:border-blue-500
          transition
          ">
            <h3 className="text-xl font-semibold">
              🔒 Secure Requests
            </h3>

            <p className="text-gray-400 mt-3">
              Add headers, tokens and authentication easily.
            </p>

          </div>



          <div className="
          bg-slate-900
          p-6
          rounded-xl
          border
          border-slate-800
          hover:border-blue-500
          transition
          ">
            <h3 className="text-xl font-semibold">
              📊 Response Analysis
            </h3>

            <p className="text-gray-400 mt-3">
              View status codes, response data and API performance.
            </p>

          </div>


        </div>

      </section>


    </div>
  );
}

export default Home;