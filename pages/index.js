import Head from 'next/head'
import { InlineIcon } from "@iconify/react"
import GitHubIcon from "@iconify/icons-bx/bxl-github"
import DiscordIcon from "@iconify/icons-bx/bxl-discord"
import ArrowIcon from "@iconify/icons-bx/bxs-tag"
import CopyIcon from "@iconify/icons-bx/bxs-copy"
import { useEffect, useState } from 'react'
import fetch from "isomorphic-unfetch"

export default function Home() {
  const [isShowingDiscordData, setIsShowingDiscordData] = useState(false)
  const [discordData, setDiscordData] = useState({ tag: "Loading#0000" })

  const toggleDiscordData = () => {
    setIsShowingDiscordData(!isShowingDiscordData)
  }

  const copyDiscordData = () => {
    if (process.browser) {
      navigator.clipboard.writeText(discordData.tag)
    }
  }

  const goToGitHub = () => {
    if (process.browser) {
      window.location.assign("https://github.com/infi")
    }
  }

  useEffect(() => {
    fetch("/api/self").then(r => r.json()).then(json => {
      setDiscordData(json)
    })
  }, [])

  return (
    <>
      <Head>
        <title>SP46</title>
      </Head>
      <div className="contents">
        <h1 className="name">SP46</h1>
        <div className="socialgrid">
          {isShowingDiscordData ?
            <>
              <div className="socialitem" onClick={toggleDiscordData}>
                <InlineIcon icon={ArrowIcon} /> {discordData.tag}
              </div>
              <div className="socialitem" onClick={copyDiscordData}>
                <InlineIcon icon={CopyIcon} /> Copy Discord Tag
              </div>
            </> : <>
              <div className="socialitem" onClick={toggleDiscordData}>
                <InlineIcon icon={DiscordIcon} /> Discord
              </div>
            </>
          }
          <div className="socialitem" onClick={goToGitHub}>
            <InlineIcon icon={GitHubIcon} /> GitHub
          </div>
        </div>
      </div>
    </>
  )
}
