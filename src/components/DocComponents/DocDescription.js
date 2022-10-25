import React from "react";

const DocDescription = (props) => {
        return (


            <div>
                <div className="p-5 bg-[#ff9d5c] rounded-t-lg">{props.topic}</div>
                <div className="p-5 bg-[#ff9d5c]/50 rounded-b-lg bg-opacity-50">{props.content}</div>
            </div>

        );
}

export default DocDescription;