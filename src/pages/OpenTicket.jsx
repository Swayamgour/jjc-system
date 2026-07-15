// import React from 'react'

// function OpenTicket() {
//     return (
//         <div>OpenTicket</div>
//     )
// }

// export default OpenTicket

import BasePage from "../components/BasePage";
import { openTicketData } from "../utils/footerPagesData";

export default function OpenTicket() {
    return <BasePage data={openTicketData} pageType="onboarding" key={'slug'} />;
}
