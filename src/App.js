import React from "react";
import Table from "./components/Table";
import axios from "axios";
import Modal from "react-modal";
import { modalStyles, columns, coolLookingCssLoadingSpinner } from "./utils";
import { hot } from "react-hot-loader/root";
import { useUsersList } from "./query-hooks/QueryHooks";
import DisplayDetails from "./components/DisplayDetails";


// Tells Modal component what DOM element is the root of the app
Modal.setAppElement("#root");

//ok
/**
 * Main App Component that contains the main state(user data) and orchastrats the use of
 * the modal and table components.
 */
function App() {
  const [selectedUserID, setSelectedUserID] = React.useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  /**
   * Function to be used too manually close the modal. The "X" button has this
   * function attached so the user can close the modal.
   */
  function closeModal() {
    setIsOpen(false);
  }


  const { status, data: usersData, error, isFetching } = useUsersList();

  if (status === 'loading') return coolLookingCssLoadingSpinner;

  if (error) return (<p>An error has occured: {error.message}</p>)
  // our return (or render) value consists of the Table and Modal components.
  return (
    <div>
      <Table

        setIsOpen={setIsOpen}
        columns={columns}
        data={usersData}
        setSelectedUserID={setSelectedUserID}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <button style={{ position:"absolute",right:"20px" }} onClick={closeModal}>
          X
        </button>
        {<DisplayDetails userid={selectedUserID} />}
      </Modal>
    </div>
  );
}

export default hot(App);
