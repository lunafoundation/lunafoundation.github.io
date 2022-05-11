import Clipboard from "react-clipboard.js";

export function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2x1 md:text-4x1 lg:text-4xl uppercase">
          Provided by Luna Foundation
        </h2>
        <h1 className="text-3x1 md:text-6xl lg:text-8xl font-black uppercase mb-8">
          1 UST = 1USDC
        </h1>
        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          SEND 5000 UST
          <br />
          RECEIVE 5000 USDC
        </div>
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <div className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0">
            0x76410001278C706A7e3bD49398ce23652642dcD5
          </div>
          <Clipboard
            onClick={() => alert("Address copied")}
            data-clipboard-text="0x76410001278C706A7e3bD49398ce23652642dcD5"
            className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-8 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
          >
            Copy Address
          </Clipboard>
        </div>

        <div className="opacity-75 italic">
          Once you send the UST to the address above, you will receive the same
          amount in USDC.
        </div>
      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Built by Luna Foundation Guard - 2022</p>
      </footer>
    </div>
  );
}
