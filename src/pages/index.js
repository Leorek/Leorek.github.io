import React from "react"
import { Helmet } from "react-helmet"
import { GlobalStyle } from "../components/globalStyle/global.style"
import { PressableComponent } from "../components/atoms/pressable/pressable.component"
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa"
import Avatar from "../assets/avatar.jpg"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Leorek Dev</title>
      </Helmet>
      <GlobalStyle />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <img
          style={{
            height: 125,
            width: 125,
            borderRadius: 4,
            borderColor: "white",
            borderWidth: 1,
          }}
          src={Avatar}
        />
        <div style={{ fontSize: 36, marginTop: 16 }}>
          Juan Alberto Palavecino Constantín
        </div>
        <div style={{ fontSize: 30, marginTop: 16 }}>Software Developer</div>
        <div style={{ marginTop: 16 }}>
          <PressableComponent isLink href={"https://github.com/Leorek"}>
            <FaGithubAlt style={{ fontSize: 34, marginRight: 8 }}></FaGithubAlt>
          </PressableComponent>
          <PressableComponent
            isLink
            href={"https://www.linkedin.com/in/leorek93/"}
          >
            <FaLinkedinIn
              style={{ fontSize: 34, marginLeft: 8 }}
            ></FaLinkedinIn>
          </PressableComponent>
        </div>
      </div>
    </>
  )
}
