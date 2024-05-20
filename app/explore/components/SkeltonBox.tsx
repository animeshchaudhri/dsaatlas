import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonBox() {
  return(
    <SkeletonTheme
    baseColor="#444"
    highlightColor="#ffffff"
    borderRadius="1rem"
    duration={2}>
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
  </SkeletonTheme>)
}

function SkeletonCard() {
    return(<div className="text-card-foreground rounded-3xl border shadow-sm group/card bg-background hover:bg-card-hovered relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px] h-[240px]">
        <div className="mx-4 mt-4 mb-2 w-2/3"><Skeleton height={40}/></div>
        <div className="mx-4 mb-11 w-24"><Skeleton height={11}/></div>
        <div className="mx-4 mb-2 w-48"><Skeleton height={11}/></div>
        <div className="mx-4 mb-2 w-5/6"><Skeleton height={11}/></div>
        <div className="mx-4 mb-2 w-5/6"><Skeleton height={11}/></div>
        
    </div>);
}

function SkeletonCard2() {
    return(<div className="text-card-foreground rounded-3xl border shadow-sm group/card bg-background hover:bg-card-hovered relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px] hover:shadow-medium group-focus:shadow-medium dark:hover:shadow-medium-dark dark:group-focus:shadow-medium-dark dark:hover:border-difficulty-medium-dark hover:border-difficulty-medium dark:group-focus:border-difficulty-medium-dark group-focus:border-difficulty-medium h-[240px]">
    {/* Difficulty Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover/card:text-difficulty-medium dark:group-hover/card:text-difficulty-medium-dark absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] text-black/10 duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover/card:text-difficulty-medium dark:group-hover/card:text-difficulty-medium-dark absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] text-black/10 duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    </svg>
    {/* Challenge Title */}
    <div className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
      <h3 className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300 h-8">
        <Skeleton/>
      </h3>
      {/* Difficulty Level */}
      <div className="flex items-center gap-5 text-center duration-300">
        <div className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent px-2.5 py-0.5 text-xs duration-300 dark:bg-difficulty-medium-dark min-w-10 bg-difficulty-medium text-white dark:text-black">
            <Skeleton />
        </div>
        {/* Number of Comments */}
        <div className="flex items-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle"
          >
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
          </svg>
          <Skeleton />
        </div>
        {/* Number of Likes */}
        <div className="flex items-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-thumbs-up"
          >
            <path d="M7 10v12"></path>
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
          </svg>
          <Skeleton />
        </div>
      </div>
    </div>
    {/* Challenge Type and Timestamp */}
    <div className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
      <div className="flex items-center gap-2">
        <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20">
        <Skeleton />
        </div>
        <div className="text-muted-foreground whitespace-nowrap text-sm">
        <Skeleton />
        </div>
      </div>
      {/* <Skeleton /> */}
    </div>
  </div>);
}

export default SkeletonBox;