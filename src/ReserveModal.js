import React from "react";
import styled from "styled-components";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

export const ReserveModal = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <>
      <BronButton onClick={handleClickOpen("body")}>
        Забронировать столик
      </BronButton>

      <div>
        <Dialog
          maxWidth={"md"}
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">
            Форма бронирования стола
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <iframe
              title="Форма"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdAO4SlGd4iCUa-6HC5JU9Ko4eQrT4qEbOkPIgajl245a9jUg/viewform?embedded=true"
              width="640"
              height="1100"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Загрузка…
            </iframe>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Закрыть окно
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
const BronButton = styled.text`
  font-size: 36px;
  color: white;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: 2000px) {
    font-size: 64px;
  }
`;
