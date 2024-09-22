// errorHandling.js
import React from "react";
import { Spinner } from "@nextui-org/react";

export function renderErrorState() {
    return (
        <div className="flex relative bg-white h-screen items-center justify-center dark:bg-blue dark:text-white">
            <div className="flex items-center justify-center text-md text-white bg-red-500 rounded-md p-3 absolute bottom-4 right-6">
                Something went wrong. Please try again later.
            </div>
        </div>
    );
}

export function renderLoadingState() {
    return (
        <div className="flex bg-white h-screen items-center justify-center dark:bg-blue dark:text-white">
            <Spinner size="lg" color="secondary"/>
        </div>
    );
}

