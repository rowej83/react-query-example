import React from "react";
import Table from "./components/Table";
import axios from "axios";
import Modal from "react-modal";
import { modalStyles, columns } from "./utils";
import { hot } from "react-hot-loader/root";

// Tells Modal component what DOM element is the root of the app
Modal.setAppElement("#root");

//ok
/**
 * Main App Component that contains the main state(user data) and orchastrats the use of
 * the modal and table components.
 */
function App() {
  const [users, setUsers] = React.useState([]);
  const [userDetail, setUserDetail] = React.useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  /**
   * Function to be used too manually close the modal. The "X" button has this
   * function attached so the user can close the modal.
   */
  function closeModal() {
    setIsOpen(false);
  }

  /**
   * React.useEffect is used to populate initial list of users on page load.
   */
  React.useEffect(() => {
    // axios recieves the users list then we filter the
    // response to create an array of the info about the users
    // we want in our table. (userID,userName and userUserName)
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const filteredData = [];
        response.data.forEach((person) => {
          filteredData.push({
            userID: person.id,
            userName: person.name,
            userUserName: person.username,
          });
        });
        setUsers(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /**
   *  displayDetails formats the user details info in to the modal if the userDetail array isn't empty.
   *  Otherwise it returns nothing
   */
  function displayDetails() {
    if (userDetail.length === 0) return;
    return (
      <>
        <h2>{userDetail.name}</h2>
        <div className="twoColumnGrid">
          <div>
            <p>ID: {userDetail.id}</p>
            <p>User Name: {userDetail.username}</p>
            <p>Website: {userDetail.website}</p>
          </div>
          <div>
            <p>Phone: {userDetail.phone}</p>
            <p>Email: {userDetail.email}</p>
          </div>
        </div>
        <div className="twoColumnGrid">
          <div>
            <p>
              <b>Address:</b>
              <br /> {userDetail.address.street}
              <br /> {userDetail.address.suite}
              <br /> {userDetail.address.city}
              <br /> {userDetail.address.zipcode}
            </p>
          </div>
          <div>
            {" "}
            <p>
              Company:
              <br /> {userDetail.company.name}
              <br /> {userDetail.company.catchPhrase}
              <br /> {userDetail.company.bs}
            </p>
          </div>
        </div>
      </>
    );
  }
  // our return (or render) value consists of the Table and Modal components.
  return (
    <div>
      <Table
        setUserDetail={setUserDetail}
        setIsOpen={setIsOpen}
        columns={columns}
        data={users}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <button style={{ float: "right" }} onClick={closeModal}>
          X
        </button>
        {displayDetails()}
      </Modal>
    </div>
  );
}

export default hot(App);
