import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgb(255, 166, 0)",
  borderRadius: "30px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ episodeUrl }) {
  const [episode, setEpisode] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    fetch(episodeUrl)
      .then((res) => res.json())
      .then((data) => setEpisode(data));
  }, []);
  return (
    <div>
      <Button onClick={handleOpen}>
        <p className="episode-links">{episodeUrl}</p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {episode?.episode}, {episode?.air_date}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {episode?.characters?.map((e) => {
              return <p key={e.name + crypto.randomUUID()}>{e}</p>;
            })}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
