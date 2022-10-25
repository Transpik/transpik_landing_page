import React from "react";

const DocDescription = (props) => {
        return (


            <div>
                <div className="p-5 bg-orange rounded-t-lg">{props.topic}</div>
                <div className="p-5 bg-orange/50 rounded-b-lg bg-opacity-50">{props.content}</div>
            </div>

        );
}

export default DocDescription;