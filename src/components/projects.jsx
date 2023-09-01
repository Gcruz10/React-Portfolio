import React from "react";
import Header from "./Header";

const projects = [
    {
        title: "Project 1: Anime Library Recommender",
        description: "This is an anime library recommender that I made for the bootcamp. It is a full stack application that uses React, Node, Express, and MongoDB. It allows users to search for anime and add them to their library. It also recommends anime based on the user's library.",
        link: "https://github.com/auswaller/anime-library-recommender"
    },
    {
        title: "Project 2: Regex Tutorial",
        description: "This is a redux tutorial that I made for the bootcamp. It is a simple tutorial that shows how to use redux in a react application.",
        link: "https://github.com/Gcruz10/Regex-tutorial"
    },
    {
        title: "Project 3: E-Commerce Site",
        description: "This was Porject 3 for the bootcamp. It was a full stack application that used React, Node, Express, and MongoDB. It was a simple e-commerce site that allowed users to add items to a cart and checkout.",
        link: "https://ddgo-ecommerce-40d71dee0685.herokuapp.com/"
    },
];

const Projects = () => {
    return (
        <div>
            <Header title="Projects" />
            <h1>Projects</h1>
            
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {projects.map((project, index) => (
                    <div key={index} style={{ width: "30%", border: "1px solid #ccc", padding: "20px", margin: "10px" }}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;


    