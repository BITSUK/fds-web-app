import React from "react";
import Offers_records from './JsonData/Offers.json';

function Offers() {
    const offerElements = Offers_records.slice(0, 4);

    return (
        <>
            {offerElements.map(record => {

                return (
                    <>
                     <div class="col-sm-3">
                            <div class="well">
                                <img src={record.image_link} alt="offers" />
                                <p>{record.offer_name}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}
export default Offers;