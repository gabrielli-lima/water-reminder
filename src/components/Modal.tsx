import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import glassImage from "../assets/glass.svg";
import close from '../assets/close.svg';

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CustomModal({ open, onClose }: ModalProps) {

  const handleClose = () => {
    onClose(); // Chame a função onClose para fechar o modal
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="absolute inset-0 m-auto bg-[#1D1B26] w-[300px] h-[255px] bg-fixed rounded-3xl flex flex-col justify-center items-center gap-6 px-12">
            <button className="absolute top-0 right-0 bg-[#322F40] m-3 rounded-full w-8 h-8 text-[16px] mx-3 flex justify-center items-center" onClick={handleClose}>
              <img src={close} alt="" />
            </button>
            <img src={glassImage} alt="" className="w-[40px] h-[62px]" />
            <h1 className="text-center text-[#7FC4ED] text-2xl font-semibold">
              Lembrete para beber água!
            </h1>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
