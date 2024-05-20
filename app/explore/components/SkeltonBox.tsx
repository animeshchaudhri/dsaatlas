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


export default SkeletonBox;