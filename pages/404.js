import Head from 'next/head'
import { InlineIcon } from "@iconify/react"
import HomeIcon from "@iconify/icons-bx/bxs-home"

export default function $404() {
  const goHome = () => {
    if (process.browser) {
      window.location.assign("/")
    }
  }

  return (
    <>
      <Head>
        <title>SP46</title>
      </Head>
      <div className="contents">
        <h1 className="pagetitle">You landed on PNF-404, but<br />something goes horribly wrong.</h1>
        <h3 className="pagesubtitle">Where's your cosmic drive key?</h3>
        <div className="socialgrid">
          <div className="socialitem" onClick={goHome}>
            <InlineIcon icon={HomeIcon} /> Rescue Olimar and go back
          </div>
        </div>
      </div>
    </>
  )
}
