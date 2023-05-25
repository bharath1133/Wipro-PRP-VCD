import React from "react";

export default function Loading() {
    return (
        <div className="text-center"> 
            <div className="spinner-border" role="status" style={{ height: "80px", width: "100px", marginTop: "100px" }}>
                {/* <span class="sr-only">Loading...</span> */}
            </div>
        </div>
    )
}