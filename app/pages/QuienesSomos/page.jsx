import HistoriaIDEC from "./HomeQuienesSomos"
import Historia from "./Historia/page"
function Page() {

  return (
    <>
      <HistoriaIDEC />


      <div className="flex justify-center p-4">
        <Historia />
      </div>

    </>
  )
}

export default Page