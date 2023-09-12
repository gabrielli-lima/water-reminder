import waterImage from "./assets/water.png";
import glassImage from "./assets/glass.svg";
import { useState } from "react";
import CustomModal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div className="container mx-auto w-4/5 mt-5">
      <header className="flex gap-2.5 mb-12">
        <div className="bg-[#322F40] rounded-full w-[60px] h-[60px]">
          <img src={waterImage} alt="" />
        </div>
        <div className="text-white text-2xl">
          <h3 className="font-light">Boa tarde,</h3>
          <h3 className="font-semibold">Bem-vindo(a) 👋</h3>
        </div>
      </header>
      <div className="md:grid md:grid-cols-3 md:gap-12">
        <aside className="md:grid w-52 h-[350px] m-auto bg-[#7FC4ED] rounded-[20px] text-center grid content-center">
          <span className="text-xs font-bold">80%</span>
          <img src={glassImage} alt="" className="mx-auto mt-8 mb-10" />
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Beber água</span>
            <span className="text-base font-medium">Meta: 3L</span>
          </div>
        </aside>

        <section className="col-span-2 text-[#7FC4ED] mt-7 md:mt-0">
          <label className="grid text-[#7FC4ED]">
            <span className="flex justify-between items-center text-base font-medium">
              Meta diária <span className="text-xs text-[#4E4964]">300ml</span>
            </span>
            <input className="mt-2 in-range:border-green-500" type="range" name="metaDiaria" id="metaDiaria" min="0" max="300"  />
          </label>
          <label className="grid text-[#7FC4ED] mt-7">
            <span className="flex justify-between items-center text-base font-medium">
              Quantidade por timer
              <span className="text-xs text-[#4E4964]">300ml</span>
            </span>
            <input className="mt-2" type="range" name="qntdPorTimer" id="qntdPorTimer" min="0" max="300" />
          </label>
          <div className="my-7 flex justify-center items-center ">
            <div className="w-16 h-16 bg-[#322F40] text-white text-[32px] text-center font-normal flex justify-center items-center rounded-lg leading-none" x-text="hours">00</div>
            <div className="text-xs text-[#4E4964] mx-1">h</div>
            <div className="text-[32px] mx-3 text-white">:</div>
            <div className="w-16 h-16 bg-[#322F40] text-white text-[32px] text-center font-normal flex justify-center items-center rounded-lg leading-none" x-text="minutes">00</div>
            <div className="text-xs text-[#4E4964] mx-1">m</div>
          </div>
          <CustomModal open={modalOpen} onClose={handleClose} />
          <button type="button" className="bg-[#7FC4ED] text-base text-black font-medium w-full p-4 rounded-md" onClick={handleModalOpen}>Começar</button>

        </section>
      </div>
    </div>
  );
}

export default App;
