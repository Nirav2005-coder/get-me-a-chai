import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col justify-center items-center h-[34vh] ">
        <div className="text-5xl font-bold flex justify-center items-center gap-2">
          Buy Me a Chai
          <span>
            <img
              className="bg-white rounded-md "
              src="/chai.gif"
              width={37}
              alt="chai"
            />
          </span>
        </div>

        <div className="mt-2">
          <p>
            A crowdfunding platform for creators. Get funded by your fans and
            followers.
          </p>
        </div>

        <div className="mt-4">
          <Link href={"/login"}>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
          >
            Start now
          </button>
          </Link>
          <Link href={"/about"}>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
          >
            Read more
          </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10" />

      <div className="text-white container mb-14 ">
        <h2 className="text-2xl text-center font-bold my-2 mt-14  ">
          Your Fans can buy you a Chai
        </h2>

        <div className="flex gap-5 text-white justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black w-24"
              src="/man.gif"
              alt="group"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Fans are available to help you to help
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black w-24"
              src="/coin.gif"
              alt="group"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Fans are available to help you to help
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black w-24"
              src="/group.gif"
              alt="group"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Fans are available to help you to help
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10" />
      <div className="text-white container mt-14 pb-14 flex flex-col justify-center items-center ">
        <h2 className="text-2xl text-center font-bold my-2">
          Learn more about us
        </h2>

<iframe className="rounded-md" width="560" height="315" src="https://www.youtube.com/embed/yJEV_WdFYDA?si=fdniX1c2u_spa4wo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>      
</div>
    </>
  );
}
