import waterImage from "./assets/water.png";
import glassImage from "./assets/glass.svg";
import chevronRight from "./assets/chevronRight.svg";
import { useState } from "react";
import CustomModal from "./components/Modal";
import RangeInput from "./components/RangeInput";
import Timer from "./components/Timer";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div className="container mx-auto w-4/5 md:w-[630px] mt-5 mb-5">

      <header className="flex gap-2.5 mb-12 md:mb-[76px]">
        <div className="bg-[#322F40] rounded-full w-[60px] h-[60px]">
          <img src={waterImage} alt="" />
        </div>
        <div className="text-white text-2xl">
          <h3 className="font-light">Boa tarde,</h3>
          <h3 className="font-semibold">Bem-vindo(a) 👋</h3>
        </div>
      </header>

      <div className="md:grid md:grid-cols-2 md:grid-flow-col">

        <aside className="w-52 h-[350px] m-auto md:m-0 bg-[#7FC4ED] rounded-[20px] text-center grid content-center">
          <span className="text-xs font-bold">80%</span>
          <img src={glassImage} alt="" className="mx-auto mt-8 mb-10" />
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Beber água</span>
            <span className="text-base font-medium">Meta: 3L</span>
          </div>
        </aside>

        <section className="flex flex-col justify-between space-y-7 text-[#7FC4ED] mt-7 md:mt-0">

          <RangeInput text="Meta diária" />
          <RangeInput text="Quantidade por timer" />

          <Timer />

          <button type="button" className="bg-[#7FC4ED] text-base text-black font-medium w-full p-4 rounded-md flex justify-center" onClick={handleModalOpen}>Começar <img src={chevronRight} alt="" className="ml-2" /> </button>

        </section>
          <CustomModal open={modalOpen} onClose={handleClose} />

      </div >
    </div >
  );
}

export default App;
