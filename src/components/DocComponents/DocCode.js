import React from "react";

const DocCode = (props) => {

        return (


            <div>
                    <div className="p-5 mt-3 bg-orange rounded-t-lg">{props.topic}</div>
                    <div className="p-5 bg-orange/50 rounded-b-lg bg-opacity-50">
                      <code>
                        {props.content}
                      </code>
                    </div>
            </div>

        );
}

export default DocCode;