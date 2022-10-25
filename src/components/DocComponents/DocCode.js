import React from "react";

const DocCode = (props) => {

        return (


            <div>
                    <div className="p-5 mt-3 bg-[#ff9d5c] rounded-t-lg">{props.topic}</div>
                    <div className="p-5 bg-[#ff9d5c]/50 rounded-b-lg bg-opacity-50">
                      <code>
                        {props.content}
                      </code>
                    </div>
            </div>

        );
}

export default DocCode;