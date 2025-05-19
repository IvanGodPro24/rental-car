import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isModalOpen, onClose, img, brand, model }) => {
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onClose}
        closeTimeoutMS={400}
        overlayClassName={{
          base: css.overlay,
          afterOpen: css.overlayAfterOpen,
          beforeClose: css.overlayBeforeClose,
        }}
        className={css.modalContent}
      >
        <img src={img} alt={`${brand} ${model}`} className={css.img} />
      </Modal>
    </div>
  );
};

export default ImageModal;
