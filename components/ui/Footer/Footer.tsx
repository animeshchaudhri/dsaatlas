import Link from "next/link";
import { Binary, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 px-8 pb-12 text-sm font-light sm:px-16 sm:pb-20 sm:pt-6 md:px-0 md:py-12">
      <div className="container  mx-auto px-24 flex flex-col-reverse justify-between gap-2 md:flex-row md:items-end">
        <span>Built with ❤️ by animesh</span>
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            rel="noreferrer"
            className="group rounded-lg p-2"
            href="https://github.com/animeshchaudhri/dsaatlas"
          >
            <span className="sr-only">onGithub</span>
            <Github className="h-5 w-5 duration-150 group-hover:scale-110 group-hover:fill-black dark:group-hover:fill-white" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="group rounded-lg p-2"
            href="https://twitter.com/animesh_xd"
          >
            <span className="sr-only">onTwitter</span>
            <Twitter className="h-5 w-5 duration-150 group-hover:scale-110 group-hover:fill-black dark:group-hover:fill-white" />
          </a>
        </div>
      </div>
      <div className="container mx-auto	px-24 flex flex-col justify-between gap-2 text-neutral-500 dark:text-neutral-400  md:flex-row md:items-end">
        <span>
          <Link
            href="/privacy"
            className="dark:hover:text-primary-foreground transition-colors duration-300 hover:text-neutral-900 hover:underline"
          >
            PrivacyPolicy
          </Link>{" "}
          |{" "}
          <Link
            href="/tos"
            className="dark:hover:text-primary-foreground transition-colors duration-300 hover:text-neutral-900 hover:underline"
          >
            TermsOfService
          </Link>
        </span>
        <span>
          <div className="inline-block rotate-180">©</div>
          {new Date().getFullYear()} DSA ATLAS
        </span>
      </div>
    </footer>
  );
}
