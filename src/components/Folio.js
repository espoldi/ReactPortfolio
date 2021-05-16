import React from "react";

import Project from "./Project.js";

export default function Folio() {
    const projectData = [
        // { key: 0, image: '', title: '', description: '', github: '', live: '' },
        { key: 0,
            image: 'example',
            title: 'example',
            description: 'example',
            github: 'example',
            live: 'example' },
    ];
    return (
        <>
            {projectData.map((data) => {
                return (
                    <Project data={data} />
                );
            })}
        </>
    );
}
