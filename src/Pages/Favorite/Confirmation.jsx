import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AyatAction } from "../../Store/store";
import React, { useEffect, useState } from "react";

let Confirmation = React.memo(({ showConfirm, setshowConfirm, deleteAyat }) => {
  const handleClose = () => setshowConfirm(false);
  let getFavAyat = useSelector((store) => store.Ayats.FavAyat);
  let ToggleMode = useSelector((store) => store.ToggleMode.darkMode);

  let dispatch = useDispatch();

  let handledelete = (deleteAyat) => {
    dispatch(AyatAction.removeFavAyat(deleteAyat));
    handleClose();

  };

  return (
    <Modal
      show={showConfirm}
      onHide={handleClose}
      centered
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      // style={{ marginTop: "230px" }}
    >
      <Modal.Header
        closeButton
        className={`${ToggleMode ? "bg-white" : "bg-secondary"}   border-0`}
      >
        <Modal.Title
          className={`text-center ${
            !ToggleMode ? "text-black" : "text-black bg-white"
          } w-100`}
        >
          Options
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={`${ToggleMode ? "bg-white" : "bg-secondary"}   border-0`}
      >
        <p
          className={` ${
            !ToggleMode ? "text-black bg-secondary" : "text-black bg-white"
          } fw-bold fs-5 `}
        >
          Are you Sure to delete Ayat ?
        </p>
      </Modal.Body>
      <Modal.Footer
        className={`${ToggleMode ? "bg-white" : "bg-secondary"}   border-0`}
      >
        <Button
          variant="secondary"
          className=" bg-success text-white border-success"
          onClick={handleClose}
        >
          Close
        </Button>
        <Button
          variant="primary"
          className=" bg-danger text-white border-danger"
          onClick={() => handledelete(deleteAyat)}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
export default Confirmation;
