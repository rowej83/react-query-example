import React from 'react';

/**
 * An Object that contains some styling for our Modal component.
 */

 export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    minWidth: "320px",
    maxWidth: "700px"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.8)"
  }
};

/**
 * An array with our predefined Table Column Headers
 */
export const columns = [
  {
    Header: "User ID",
    accessor: "id" // accessor is the "key" in the data
  },
  {
    Header: "User Full Name",
    accessor: "name"
  },
  {
    Header: "User Name",
    accessor: "username" // accessor is the "key" in the data
  }
];


export const coolLookingCssLoadingSpinner=(<div class="cool-loading-loop"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>);