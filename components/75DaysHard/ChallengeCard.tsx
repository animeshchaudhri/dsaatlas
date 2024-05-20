import { FC } from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/Cards/3DCard";
import Image from "next/image";
import Link from "next/link";

interface ChallengeCardProps {
  challengeUrl: string,
  emoji: string,
  dayNo: number,
}

const ChallengeCard: FC<ChallengeCardProps> = ({
  challengeUrl,
  emoji,
  dayNo,
}) => {
  return (
    <Link href={challengeUrl} target='_blank'>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 flex flex-col gap-7 sm:gap-0 items-center justify-around group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[15rem] h-[20rem] sm:h-[20rem] rounded-xl p-6 border  ">
          <CardItem className="flex justify-between items-center" translateZ="50">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Day {dayNo}
            </h2>
          </CardItem>
          <CardItem className="flex justify-center items-center flex-1" translateZ="150">
            <div className='text-9xl '>
              {emoji}
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  )
}

export default ChallengeCard
