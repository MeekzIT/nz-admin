import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalProps } from "./ types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#08412E",
  },

  description: {
    mt: 1,
    fontSize: 15,
    fontWeight: "bold",
    color: "#08412E",
  },

  content: {
    mt: 5,
  },
};

export default function BaseModal({
  children,
  isOpen,
  handleClose,
  title,
  description,
}: ModalProps) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {title && (
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={style.title}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography id="modal-modal-description" sx={style.description}>
              {description}
            </Typography>
          )}

          <Box sx={style.content}>{children}</Box>
        </Box>
      </Modal>
    </div>
  );
}
