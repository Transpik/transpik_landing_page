import React from "react";
import DocMenu from "../components/DocComponents/DocMenu";
import DocContent from "../components/DocComponents/DocContent";
import DocDesc from "../components/DocComponents/DocDescription";
import DocCode from "../components/DocComponents/DocCode";


class Docs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="table-row bg-[#ff9d5c] text-[#333333]">
        <DocMenu />
        
        <div className="table-cell h-full md:w-4/5 top-0 bg-light-orange">
          {/* begin topic */}
          <div id="link1" className="border-b border-[#333333]/60">
            <h2 className="text-2xl font-bold p-5">API Reference</h2>
            <div className="p-5">
              <DocContent content="The Stripe API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Stripe API in test mode, which doesn't affect your live data or interact with the banking networks. The API key you use to authenticate the request determines whether the request is live mode or test mode.

The Stripe API doesn't support bulk updates. You can work on only one object per request.

The Stripe API doesn't support bulk updates. You can work on only one object per request."/>
              <div className="w-1/2 m-5 table-cell ">
                <DocDesc topic="CURRENT LIBRABRIES" content="By default, the Stripe API Docs demonstrate using curl to interact with the API over HTTP. Select one of our official client libraries to see examples in code." />
                < DocCode topic="CODE" content="$ curl https://api.stripe.com/v1/charges \<br/>
                        -u sk_test_4eC39HqLyjWDarjtT1zdp7dc:<br/>
                        # The colon prevents curl from asking for a password."/>
              </div>
            </div>
          </div>
          {/* end topic */}

          {/* begin topic */}
          <div id="link2" className="border-b border-[#333333]/60">
            <h2 className="text-2xl font-bold p-5">Link 2</h2>
            <div className="p-5">
              <DocContent content="The Stripe API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Stripe API in test mode, which doesn't affect your live data or interact with the banking networks. The API key you use to authenticate the request determines whether the request is live mode or test mode.

The Stripe API doesn't support bulk updates. You can work on only one object per request.

The Stripe API doesn't support bulk updates. You can work on only one object per request."/>
              <div className="w-1/2 m-5 table-cell ">
                <DocDesc topic="CURRENT LIBRABRIES" content="By default, the Stripe API Docs demonstrate using curl to interact with the API over HTTP. Select one of our official client libraries to see examples in code." />
                < DocCode topic="CODE" content="$ curl https://api.stripe.com/v1/charges \<br/>
                        -u sk_test_4eC39HqLyjWDarjtT1zdp7dc:<br/>
                        # The colon prevents curl from asking for a password."/>
              </div>
            </div>
          </div>
          {/* end topic */}

          {/* begin topic */}
          <div id="link3" className="border-b border-[#333333]/60">
            <h2 className="text-2xl font-bold p-5">Link 3</h2>
            <div className="p-5">
              <DocContent content="The Stripe API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Stripe API in test mode, which doesn't affect your live data or interact with the banking networks. The API key you use to authenticate the request determines whether the request is live mode or test mode.

The Stripe API doesn't support bulk updates. You can work on only one object per request.

The Stripe API doesn't support bulk updates. You can work on only one object per request."/>
              <div className="w-1/2 m-5 table-cell ">
                <DocDesc topic="CURRENT LIBRABRIES" content="By default, the Stripe API Docs demonstrate using curl to interact with the API over HTTP. Select one of our official client libraries to see examples in code." />
                < DocCode topic="CODE" content="$ curl https://api.stripe.com/v1/charges \<br/>
                        -u sk_test_4eC39HqLyjWDarjtT1zdp7dc:<br/>
                        # The colon prevents curl from asking for a password."/>
              </div>
            </div>
          </div>
          {/* end topic */}

          {/* begin topic */}
          <div id="link4" className="border-b border-[#333333]/60">
            <h2 className="text-2xl font-bold p-5">Link 4</h2>
            <div className="p-5">
              <DocContent content="The Stripe API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Stripe API in test mode, which doesn't affect your live data or interact with the banking networks. The API key you use to authenticate the request determines whether the request is live mode or test mode.

The Stripe API doesn't support bulk updates. You can work on only one object per request.

The Stripe API doesn't support bulk updates. You can work on only one object per request."/>
              <div className="w-1/2 m-5 table-cell ">
                <DocDesc topic="CURRENT LIBRABRIES" content="By default, the Stripe API Docs demonstrate using curl to interact with the API over HTTP. Select one of our official client libraries to see examples in code." />
                < DocCode topic="CODE" content="$ curl https://api.stripe.com/v1/charges \<br/>
                        -u sk_test_4eC39HqLyjWDarjtT1zdp7dc:<br/>
                        # The colon prevents curl from asking for a password."/>
              </div>
            </div>
          </div>
          {/* end topic */}

          {/* begin topic */}
          <div id="link5" className="border-b border-[#333333]/60">
            <h2 className="text-2xl font-bold p-5">Link 5</h2>
            <div className="p-5">
              <DocContent content="The Stripe API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Stripe API in test mode, which doesn't affect your live data or interact with the banking networks. The API key you use to authenticate the request determines whether the request is live mode or test mode.

The Stripe API doesn't support bulk updates. You can work on only one object per request.

The Stripe API doesn't support bulk updates. You can work on only one object per request."/>
              <div className="w-1/2 m-5 table-cell ">
                <DocDesc topic="CURRENT LIBRABRIES" content="By default, the Stripe API Docs demonstrate using curl to interact with the API over HTTP. Select one of our official client libraries to see examples in code." />
                < DocCode topic="CODE" content="$ curl https://api.stripe.com/v1/charges \<br/>
                        -u sk_test_4eC39HqLyjWDarjtT1zdp7dc:<br/>
                        # The colon prevents curl from asking for a password."/>
              </div>
            </div>
          </div>
          {/* end topic */}
        </div>
        
      </div>

    );
  }
}

export default Docs;