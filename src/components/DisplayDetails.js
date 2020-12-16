import React from 'react';
import { coolLookingCssLoadingSpinner } from '../utils';
import { useUser } from '../query-hooks/QueryHooks';
/**
 * DisplayDetails component handles populating and displaying user details by ID
 * 
 * @param {props object being deconstructed to userid }
 */

export default function DisplayDetails({ userid }) {
    const { status, data: userDetail, error, isFetching } = useUser(userid);

    //Component will show a spinner during the time between the ajax request beginning and end.
    if (status === 'loading') return coolLookingCssLoadingSpinner;

    //Component will show an error message instead of the Details List if the ajax fails. Could be optional for it to reattempt.
    if (error) return (<p>An error has occured: {error.message}</p>)

    return (
        <>
            <h2 className="userNameHeader">{userDetail.name}</h2>
            <div className="twoColumnGrid">
                <div>
                    <p><b>ID:</b> {userDetail.id}</p>
                    <p><b>User Name:</b> {userDetail.username}</p>
                    <p><b>Website:</b> {userDetail.website}</p>
                </div>
                <div>
                    <p><b>Phone:</b> {userDetail.phone}</p>
                    <p><b>Email:</b> {userDetail.email}</p>
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
                    <p>
                        <b>Company:</b>
                        <br /> {userDetail.company.name}
                        <br /> {userDetail.company.catchPhrase}
                        <br /> {userDetail.company.bs}
                    </p>
                </div>
            </div>
        </>
    );
}