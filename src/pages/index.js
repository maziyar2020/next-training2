import axios from "axios"
import Navbar from "components/common/Navbar"
import {CheckIcon , TrashIcon , PencilAltIcon} from '@heroicons/react/outline'
import useSWR from 'swr'

export default function Home() {

  const fetcher = async () => {
    const { data } = await axios.get('/api/todos')
    const { todos } = data
    return todos
  }

  const { data, error } = useSWR('getProfileData', fetcher)

  if (error) return <div>{error}</div>
  if (!data) return <div>wait</div>

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* main Navbar */}
      <Navbar />
      {/* Main content container */}
      <div className="container p-2 xl:max-w-screen-xl mx-auto">
        <section className="flex justify-center items-center">
          <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
            {/* loop over Array of data */}
            {data.map(item =>
              <div key={item.id} className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-md" >
                {/* Todo name */}
                <span>{item.title} </span>
                <div className="flex gap-x-3 items-center">
                  <button className="">
                    <CheckIcon className="w-6 h-6 stroke-green-400" />
                  </button>
                  <button className="">
                    <TrashIcon className="w-6 h-6 stroke-red-400" />
                  </button>
                  <button className="">
                    <PencilAltIcon className="w-6 h-6 stroke-blue-400" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

    </main>
  )
}

