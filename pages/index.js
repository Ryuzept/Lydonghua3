import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main className="p-4">
        <h2 className="text-xl font-semibold mb-4">
          Daftar Anime Legal
        </h2>

        <p className="text-gray-400">
          Semua anime berasal dari channel resmi YouTube.
        </p>
      </main>
    </div>
  )
}
