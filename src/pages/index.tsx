import {
  CommandLineIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  FaceSmileIcon,
  GiftTopIcon,
  LanguageIcon,
  PaintBrushIcon,
  SparklesIcon
} from "@heroicons/react/24/outline"
import { FireIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import type { FC } from "react"

const ReactSVGIcon = () => {
  return (
    <svg viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
        <circle cx="420.9" cy="296.5" r="45.7" />
      </g>
    </svg>
  )
}
const Index = () => {
  const Lesson: FC<{
    index: number
    title: string
    description: string
    icon: JSX.Element
    last?: boolean
    target?: string
    current?: boolean
    completed?: boolean
    progress?: number
    event?: boolean
  }> = ({
    index,
    title,
    description,
    icon,
    target = "",
    last = false,
    completed = false,
    current = false,
    progress = 10,
    event = false
  }) => {
    const animateDur = 0.4
    const dotDur = 0.3
    const prevDelay = index * (animateDur + dotDur)

    return (
      <div className="flex">
        <div className="mr-3 flex h-full w-[80px] flex-col items-center">
          <div className="relative h-6 w-6 rounded-full bg-gray-400">
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={
                (completed || current) && {
                  clipPath: ["inset(0 0 100% 0)", "inset(0 0 0.01% 0)"]
                }
              }
              transition={{ delay: prevDelay, duration: dotDur }}
              className={"absolute h-6 w-6 rounded-full bg-gray-600"}
            />
            {current && (
              <div
                className={
                  "absolute z-20 h-6 w-6 animate-ping rounded-full bg-gray-600"
                }
              />
            )}
          </div>
          {!last && (
            <div className="relative h-[110px] w-2 bg-gray-300">
              <motion.div
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={
                  completed && {
                    clipPath: ["inset(0 0 100% 0)", "inset(0 0 0.01% 0)"]
                  }
                }
                transition={{ delay: prevDelay + dotDur, duration: animateDur }}
                className="h-[110px] w-2 bg-gray-500"
              />
            </div>
          )}
        </div>
        <motion.div
          onClick={() => {
            if (target) {
              window.location.assign(target)
            }
          }}
          animate={{ rotate: 0 }}
          whileHover={{
            x: [-2, 2, -2, 2, 0],
            rotate: [-0.4, 0.4, -0.8, 0.4, 0],
            y: [-1, 1, -1, 1, 0]
          }}
          className="mb-6 flex max-w-[470px] cursor-pointer rounded-xl border border-gray-500 px-5"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="h-10 w-10 text-gray-700 sm:h-14 sm:w-14">
              {icon}
            </div>
            <div className="relative mt-1 h-2 w-10 rounded-md bg-gray-400 sm:w-14">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                className="absolute h-full rounded-full bg-gray-600"
              />
            </div>
          </div>
          <div className="ml-5 py-3">
            <div className="mb-1 flex items-center space-x-1">
              <h1 className="max-h-[24px] overflow-hidden font-medium">
                {title}
              </h1>
              {event && (
                <FireIcon className="h-4 w-4 animate-pulse text-orange-600" />
              )}
            </div>
            <p className="h-[55px] max-w-[400px] text-sm leading-[19px] text-gray-600 line-clamp-3 sm:text-base">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-16 py-14 px-6 text-gray-800 sm:py-20 sm:px-10 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-16">
      <div className="">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Web Development</h1>
          <p className="text-gray-700">
            Triam Udom Computer Club&apos;s web development course
          </p>
        </div>
        <div className="flex flex-col items-start">
          <Lesson
            index={0}
            icon={<CommandLineIcon />}
            completed={true}
            title={"Setup Node.JS"}
            target={"https://learn.betich.me/articles/etc/how-to-setup-nodejs"}
            description="How to install Node.js and NPM on your computer

What is Node.js

Node.js คือ runtime ที่สามารถ execute โค้ด JavaScript นอก web browser ได้ (พูดง่าย ๆ คือทำให้เราสามารถรันโค้ด JavaScript ใน terminal ได้)"
            progress={100}
          />
          <Lesson
            index={1}
            icon={<LanguageIcon />}
            completed={true}
            target={"https://app.tucmc.dev/tucc/resources"}
            title={"Basic Typescript"}
            description="Typescript มีความคล้ายกับ Javascript มาก โดยในส่วนนี้จะกล่าวถึงพื้นฐานการเขียนโปรแกรมคร่าว ๆ เพื่อให้ผู้ใช้เข้าใจ Concept ของการเขียนโปรแกรม"
            progress={100}
          />
          <Lesson
            index={2}
            icon={<ComputerDesktopIcon />}
            current={true}
            target={"lesson/basicHTMLCSS"}
            progress={70}
            event={true}
            title={"Basic HTML & CSS"}
            description="Basic HTML และ CSS เนื่องจากการเขียนเว็บไซต์ผู้เขียนจะต้องรู้จักกับ
            HTML และ CSS ก่อน
            โดยทั้งสองสิ่งนี้เป็นพื้นฐานที่สุดในการเขียนเว็บไซต์
            หลังจากทบทวนเนื้อหาทั้งหมด
            ที่ท้ายหน้ามีแบบฝึกหัดให้ผู้ใช้สามารถลองทำได้"
          />
          <Lesson
            index={3}
            icon={<ReactSVGIcon />}
            title={"Basic React"}
            description="หลังจากที่ได้ลองเขียน HTML และ CSS กันมาแล้ว ในส่วนนี้จะเป็นการใช้ Javascript Framework ที่ชื่อว่า React ในการสร้างหน้าเว็บไซต์ (Front-end) สำหรับแสดงผล"
          />
          <Lesson
            index={4}
            icon={<PaintBrushIcon />}
            title={"Basic Tailwind CSS"}
            event={true}
            description="Tailwind CSS เป็น CSS Utility Framework สำหรับช่วยให้นักพัฒนาเว็บไซต์สามารถสร้างสรรค์หน้าเว็บไซต์ได้อย่างรวดเร็ว โดยในส่วนนี้จะใช้ความรู้จากบทก่อนหน้า HTML & CSS ในการ"
          />
          <Lesson
            index={5}
            icon={<CpuChipIcon />}
            title={"Basic NextJS"}
            description="NextJS เป็น Javascript Framework อีก Framework หนึ่งที่ช่วยผู้พัฒนาบริหารจัดการในส่วนของ Back-end และ Front-end โดยเน้นไปในทางการสร้าง Web Application"
          />
          <Lesson
            index={6}
            icon={<GiftTopIcon />}
            last={true}
            event={true}
            title={"My First Project"}
            description="หลังจากที่ได้เรียนรู้ครบทุกบทแล้วก็ถึงเวลาลงมือทำ Project ของเราโดยใช้ความรู้ทั้งหมดตั้งแต่ในส่วนแรกจนถึงส่วนสุดท้าย ในการสร้างสรรค์ Web Application ขี้นมา"
          />
        </div>
      </div>
      <div className={"relative"}>
        <div className="absolute z-30 flex h-full w-full items-center justify-center rounded-2xl border border-gray-400 backdrop-blur">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-medium text-gray-800">Coming Soon</h1>{" "}
            <SparklesIcon className={"h-6 w-6"} />
          </div>
        </div>
        <div className="p-4">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Web Design</h1>
            <p className="text-gray-700">
              Triam Udom Computer Club&apos;s web design course
            </p>
          </div>
          <div className="flex flex-col items-start">
            <Lesson
              index={0}
              completed={true}
              icon={<FaceSmileIcon />}
              title={"Coming Soon"}
              description="Course descriptions Course descriptions Course descriptions Course
          descriptionsCourse descriptions Course descriptionsCourse descriptions
          Course descriptionsCourse descriptions"
              progress={100}
            />
            <Lesson
              index={1}
              icon={<FaceSmileIcon />}
              current={true}
              title={"Coming Soon"}
              description="Course descriptions Course descriptions Course descriptions Course
          descriptionsCourse descriptions Course descriptionsCourse descriptions
          Course descriptionsCourse descriptions"
              progress={50}
            />
            <Lesson
              index={2}
              icon={<FaceSmileIcon />}
              title={"Coming Soon"}
              last={true}
              description="Course descriptions Course descriptions Course descriptions Course
          descriptionsCourse descriptions Course descriptionsCourse descriptions
          Course descriptionsCourse descriptions"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
