import React, { useState } from "react";

function TestComponent() {
    const [value, setValue] = useState(new Date());

    return (
        <div>
            <h2>Test</h2>
            <p>Current Date: {value.toDateString()}</p>
        </div>
    );
}

export default TestComponent;
