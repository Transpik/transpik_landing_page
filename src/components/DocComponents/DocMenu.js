import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

class DocMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (


            <div aria-label="Main Nav" class="table-cell h-full md:w-1/5 fixed top-[112px] overflow-x-hidden bg-[#ff9d5c]">
                <Link to="#link1" className="block rounded-r-lg bg-gray-100 px-4 py-2 mt-[40px] text-sm font-medium text-black w-4/5">Link1</Link>
                <Link to="#link2" className="block rounded-r-lg px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 hover:text-black w-4/5">Link2</Link>
                <Link to="#link3" className="block rounded-r-lg px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 hover:text-black w-4/5">Link3</Link>
                <Link to="#link4" className="block rounded-r-lg px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 hover:text-black w-4/5">Link4</Link>
                <Link to="#link5" className="block rounded-r-lg px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 hover:text-black w-4/5">Link5</Link>
            </div>

        );
    }
}

export default DocMenu;