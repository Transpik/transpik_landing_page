import React from "react";

const DocContent = (props) => {

        return (


            <div className="w-1/2 table-cell p-4 text-left">
                <p className="mt-4">{props.content}</p>
            </div>

        );
}

export default DocContent;