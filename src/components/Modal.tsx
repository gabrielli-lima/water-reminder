import glassImage from "../assets/glass.svg";

type Props = {
  isOpen: boolean;
};

export const Modal = (props: Props) => {
  const isOpen = props.isOpen;
  if (isOpen) {
    return (
      <div className="absolute inset-0 m-auto bg-[#1D1B26] w-[300px] h-[255px] bg-fixed rounded-3xl flex justify-center items-center gap-6">
        <div className="flex flex-col justify-center">
            <div className="absolute top-0 right-0 bg-[#322F40] m-3 rounded-full w-8 h-8 text-[16px] mx-3 text-white text-center flex justify-center items-center">X</div>
            <img src={glassImage} alt="" className="w-[40px] h-[62px]" />
          <h1 className="text-center text-[#7FC4ED] text-2xl font-semibold">
            Lembrete para beber água!
          </h1>
        </div>
      </div>
    );
  }
  return null;
};
