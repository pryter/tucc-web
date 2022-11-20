import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { DocumentTextIcon, FireIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import type { FC } from "react"
import { useEffect, useState } from "react"

const CodeBlock: FC<{ children: any; fileName: string | null }> = ({
  children,
  fileName
}) => {
  return (
    <div className="w-full">
      {fileName && (
        <div className="mb-1 flex items-center space-x-1.5 text-gray-600">
          <DocumentTextIcon className="h-4 w-4" />
          <h1 className="font-medium">{fileName}</h1>
        </div>
      )}
      <pre className="w-full max-w-[90vw] overflow-x-auto rounded-2xl bg-gray-800 px-8 py-6 text-white">
        {children}
      </pre>
    </div>
  )
}
const ExternalResource: FC<{ children: any; to: string }> = ({
  children,
  to
}) => {
  return (
    <a
      href={to}
      target={"_blank"}
      className="flex w-max items-center space-x-1"
      rel="noreferrer"
    >
      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
      <span>{children}</span>
    </a>
  )
}

const IlluminateButton: FC<{
  children: any
  action: () => void
}> = ({ children, action }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      onClick={action}
      className="relative flex h-[34px] w-[200px] cursor-pointer items-center justify-center rounded-md border border-gray-400 font-medium text-gray-600"
    >
      <motion.div
        initial={{ clipPath: "inset(0 100% 100% 0)" }}
        animate={
          hover
            ? {
                clipPath: ["inset(0 0.01% 100% 0)", "inset(0 0.01% 0.01% 0)"]
              }
            : { clipPath: "inset(0 100% 100% 0)" }
        }
        className="absolute h-[34px] w-[200px] rounded-md border border-gray-600"
      />
      {children}
    </div>
  )
}

const Page = () => {
  const maxFrame = 3
  const [frame, setFrame] = useState(0)
  const [style1, setStyle1] = useState("bac")
  const [style2, setStyle2] = useState("colo")
  const [style3, setStyle3] = useState("")

  useEffect(() => {
    document.getElementById("output-st1")?.setAttribute("style", style1)
  }, [style1])

  useEffect(() => {
    document.getElementById("output-st2")?.setAttribute("style", style2)
  }, [style2])

  useEffect(() => {
    document.getElementById("output-st3")?.setAttribute("style", style3)
  }, [style3])

  const HighLight: FC<{ children: any; activeFrame: number }> = ({
    children,
    activeFrame
  }) => {
    return (
      <span
        className={frame === activeFrame ? "animate-pulse text-orange-400" : ""}
      >
        {children}
      </span>
    )
  }

  const description = [
    <p key={`des-1`} className="my-5 text-gray-700">
      เราสามารถเริ่มเขียน HTML ได้โดยใช้ Tag{" "}
      <HighLight activeFrame={0}>{`<html>`}</HighLight> โดยที่ Tag
      จำมีโครงสร้างดังตัวอย่าง มี{" "}
      <HighLight activeFrame={0}>{`<html>`}</HighLight> เป็นตัวเปิดและมี{" "}
      <HighLight activeFrame={0}>{`</html>`}</HighLight> เป็นตัวปิด
      และโครงสร้างนี้ก็ใช้กับ Tag อื่น ๆ ด้วยเช่นกัน
    </p>,
    <p key={`des-2`} className="my-5 text-gray-700">
      Tag <HighLight activeFrame={1}>{`<head>`}</HighLight> ใช้สำหรับเก็บข้อมูล
      meta ของหน้าเว็บนั้น ๆ (ข้อมูลที่ไม่ได้แสดงผลบนหน้าเว็บ) ในตัวอย่างเช่น{" "}
      {"<title></title>"} ที่ใช้ระบุชื่อ Tab ของหน้าเว็บนั้น ๆ
      นอกจากนี้เรายังนิยมใส่ Tag อื่น ๆ เช่น <br />
      <br />
      <ul>
        <li>1. {"<style></style>"} Tag Style นิยมใช้ระบุ CSS</li>
        <li>
          2. {"<script></script>"} Tag Script ใช้สำหรับแทรก Javascript
          เข้าไปในส่วนต่าง ๆ ของเว็บไซต์
        </li>
      </ul>
    </p>,
    <p key={`des-3`} className="my-5 text-gray-700">
      Tag <HighLight activeFrame={2}>{`<body>`}</HighLight>{" "}
      ใช้สำหรับแสดงผลหน้าตาเว็บไซต์นั้น ๆ ในตัวอย่างจะมี Tag {"<div></div>"}{" "}
      ที่ทำหน้าที่เป็น Container ให้ Tag {"<h1></h1>"} และ Tag {"<p></p>"} โดย
      Tag แต่ละตัวก็จะมีการใช้งานที่แตกต่างกัน เช่น <br />
      <br />
      <ul>
        <li>1. {"<h1></h1>"} Tag h1 ใช้สำหรับแสดงผลหัวข้อ</li>
        <li>2. {"<p></p>"} Tag p ใช้สำหรับแสดงผลตัวหนังสือเป็น Paragraph</li>
        <li>
          3. {"<a></a>"} Tag a ใช้สำหรับแสดงผลตัวหนังสือที่จะมีการเชื่อม link
        </li>
      </ul>
      <br />
      นอกจากนี้ยังมี Tag อีกมากมายให้เลือกใช้ โดยสามารถศึกษาเพิ่มเติมได้ที่นี่
      <ExternalResource to="https://www.w3schools.com/tags/">
        HTML tags
      </ExternalResource>
    </p>
  ]

  return (
    <div className="flex items-center justify-center py-20 text-gray-800">
      <div className="flex max-w-2xl flex-col items-start px-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Basic HTML and CSS</h1>
          <p className="break-all text-gray-700">
            Basic HTML และ CSS เนื่องจากการเขียนเว็บไซต์ผู้เขียนจะต้องรู้จักกับ
            HTML และ CSS ก่อน
            โดยทั้งสองสิ่งนี้เป็นพื้นฐานที่สุดในการเขียนเว็บไซต์
            หลังจากทบทวนเนื้อหาทั้งหมด
            ที่ท้ายหน้ามีแบบฝึกหัดให้ผู้ใช้สามารถลองทำได้
          </p>
        </div>
        <CodeBlock fileName="index.html">
          <HighLight activeFrame={0}>{`<html>`}</HighLight>
          <br />
          <HighLight activeFrame={1}>{`<head>`}</HighLight>
          {`
<title>Index Page</title>
`}
          <HighLight activeFrame={1}>{`</head>`}</HighLight>
          {`
`}
          <HighLight activeFrame={2}>{`<body>`}</HighLight>
          {`
  <div>
    <h1>Heading 1</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.</p>
  </div>
`}
          <HighLight activeFrame={2}>{`</body>`}</HighLight>
          <br />
          <HighLight activeFrame={0}>{`</html>`}</HighLight>
        </CodeBlock>
        {description[frame]}
        <div className="mb-8 flex w-full flex-col-reverse items-center justify-between sm:flex-row">
          <div
            className={frame === 0 ? "invisible mt-2 sm:mt-0" : "mt-2 sm:mt-0"}
          >
            <IlluminateButton
              action={() => {
                setFrame((prevState) => prevState - 1)
              }}
            >
              <div className="flex items-center space-x-1">
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Previous Slide</span>
              </div>
            </IlluminateButton>
          </div>
          <div className={frame >= maxFrame - 1 ? "invisible" : ""}>
            <IlluminateButton
              action={() => {
                setFrame((prevState) => prevState + 1)
              }}
            >
              <div className="flex items-center space-x-1">
                <span>Next Slide</span>
                <ArrowRightIcon className="h-5 w-5" />
              </div>
            </IlluminateButton>
          </div>
        </div>
        <CodeBlock fileName="withCss.html">
          {`...
    <h1 style="color: red">Styled Heading !</h1>
    
    <p style="color: white;background-color: slategrey">
      Styled not very long paragraph :)
    </p>
...`}
        </CodeBlock>
        <p className="my-5 text-gray-700">
          เราสามารถตกแต่ง Element นั้น ๆ ได้ด้วยการใช้ CSS โดย CSS จะเป็น String
          ที่อยู่ใน Property style ของ Tag นั้น ๆ โดยถ้าหากต้องการใส่ Style
          มากกว่า 1 รายการ เราจะใช้ ; ในการแบ่ง Style ออกจากกัน
        </p>
        <ExternalResource to={"https://www.w3schools.com/css/css_colors.asp"}>
          Styling with CSS
        </ExternalResource>
        <div className="mt-10 mb-4 flex items-center space-x-1">
          <h1 className="text-xl font-semibold">Exercise</h1>
          <FireIcon className="h-6 w-6 text-orange-400" />
        </div>
        <div className="mx-auto mb-8 w-full max-w-lg">
          <div className="flex w-full flex-col justify-between sm:flex-row sm:space-x-4">
            <div className="mb-4 flex flex-col items-center sm:mb-0">
              <h1 className="mb-1 text-center font-medium">Output </h1>
              <div className="relative w-[200px] rounded-md border border-gray-400 py-2 px-4 shadow-md">
                <div className="absolute top-1.5 left-1.5 flex items-center space-x-1">
                  <div
                    id="output-st1"
                    className="h-2 w-2 rounded-full bg-gray-300"
                  ></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <h1 id="output-st3" className="my-1 text-sm font-semibold">
                  Alert Box
                </h1>
                <p
                  id="output-st2"
                  className="text-center text-xs font-medium leading-4"
                >
                  Just an example alert box. Nothing to worry
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="mb-1 text-center font-medium">Reference</h1>
              <div className="relative w-[200px] rounded-md border border-gray-400 py-2 px-4 shadow-md">
                <div className="absolute top-1.5 left-1.5 flex items-center space-x-1">
                  <div className="h-2 w-2 rounded-full bg-red-400"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <h1 className="my-1 text-center text-sm font-semibold">
                  Alert Box
                </h1>
                <p className="text-center text-xs font-medium leading-4 text-gray-500">
                  Just an example alert box. Nothing to worry
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-medium text-gray-600">Color codes</h1>
        <div className="space-y-1">
          <div className="flex items-center space-x-1">
            <div className="h-5 w-5 rounded-md bg-red-400" />
            <span className="flex space-x-1">
              <pre className="rounded-md bg-gray-700 px-4 text-white">
                rgb(248, 133, 133)
              </pre>
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-5 w-5 rounded-md bg-gray-500" />
            <span className="flex space-x-1">
              <pre className="rounded-md bg-gray-700 px-4 text-white">
                #a0aec0
              </pre>
            </span>
          </div>
        </div>
        <p className="mb-3 mt-5 font-medium">
          Complete CSS style in{" "}
          <span className="h-4 rounded-md border border-red-400">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </p>
        <CodeBlock fileName={null}>
          {`<div className="...">
  <div className="...">
    <div style="...height: 0.5rem;`}
          <span
            contentEditable={true}
            className="rounded-md border border-red-400 px-1"
            onKeyUp={(e) => {
              // @ts-ignore
              setStyle1(e.target.innerText)
            }}
          >
            bac
          </span>
          {`"/>
    <div style="...height: 0.5rem;background-color: rgb(250, 204, 21)"/>
    <div style="...height: 0.5rem;background-color: rgb(34, 197, 94)"/>
  </div>
  <h1 style="`}
          <span
            contentEditable={true}
            className="rounded-md border border-red-400 px-1"
            onKeyUp={(e) => {
              // @ts-ignore
              setStyle3(e.target.innerText)
            }}
          >
            text
          </span>
          {`">
    Alert Box
  </h1>
  <p style="...font-size: 10px;`}
          <span
            contentEditable={true}
            className="rounded-md border border-red-400 px-1"
            onKeyUp={(e) => {
              // @ts-ignore
              setStyle2(e.target.innerText)
            }}
          >
            colo
          </span>
          {`">
    Just an example alert box. Nothing to worry
  </p>
</div>`}
        </CodeBlock>
      </div>
    </div>
  )
}

export default Page
