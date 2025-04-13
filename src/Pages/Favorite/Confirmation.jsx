import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AyatAction } from "../../Store/store";


let Confirmation = ({ showConfirm, setshowConfirm, deleteAyat }) => {
  console.log(deleteAyat);

  const handleClose = () => setshowConfirm(false);
  let getFavAyat = useSelector((store) => store.Ayats.FavAyat);
  let dispatch = useDispatch();

  let delFAvAyat = (ayat) => {
    dispatch(AyatAction.removeFavAyat(ayat.id));
  };
  let handledelete = () => {
    delFAvAyat(deleteAyat);
    handleClose();
  };
  return (
    <Modal
      show={showConfirm}
      onHide={handleClose}
      centered
      aria-labelledby="contained-modal-title-vcenter"
      // style={{ marginTop: "230px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className=" fw-bold fs-5">Are you Sure to delete Ayat ?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className=" bg-success text-white border-success" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary"  className=" bg-danger text-white border-danger" onClick={() => handledelete()}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Confirmation;
