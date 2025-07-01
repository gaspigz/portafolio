// src/data/portfolioData.js

export const portfolioData = {
    en: {
        about: {
            title: "About Me",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        experience: {
            title: "Experience",
            items: [
                {
                    company: "Company Name",
                    jobTitle: "Job Title",
                    location: "City, Country",
                    fromDate: "MM YYYY",
                    toDate: "Current",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    company: "Previous Company",
                    jobTitle: "Previous Role",
                    location: "City, Country",
                    fromDate: "MM YYYY",
                    toDate: "MM YYYY",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ]
        },
        education: {
            title: "Education & Languages",
            items: [
                {
                    place: "University Name",
                    description: "Degree Name",
                    location: "City, Country",
                    fromDate: "YYYY",
                    toDate: "Current",
                    data: ["GPA: X.X/10", "Specialization", "Additional Info"]
                },
                {
                    place: "Institution Name",
                    description: "Certificate Name",
                    location: "City, Country",
                    fromDate: "YYYY",
                    toDate: "YYYY",
                    data: ["Score: XXX", "Certified by Organization", "Level Description"]
                }
            ]
        },
        skills: {
            title: "Skills & Technologies",
            items: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            ]
        },
        references: {
            title: "References",
            items: [
                {
                    name: "Reference Name",
                    title: "Job Title",
                    email: "email@company.com",
                    company: "Company Name"
                },
                {
                    name: "Another Reference",
                    title: "Another Title",
                    email: "another@company.com",
                    company: "Another Company"
                }
            ]
        }
    },
    es: {
        about: {
            title: "Sobre Mí",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        experience: {
            title: "Experiencia",
            items: [
                {
                    company: "Nombre de Empresa",
                    jobTitle: "Título del Trabajo",
                    location: "Ciudad, País",
                    fromDate: "MM YYYY",
                    toDate: "Actual",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    company: "Empresa Anterior",
                    jobTitle: "Rol Anterior",
                    location: "Ciudad, País",
                    fromDate: "MM YYYY",
                    toDate: "MM YYYY",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ]
        },
        education: {
            title: "Educación e Idiomas",
            items: [
                {
                    place: "Nombre de Universidad",
                    description: "Nombre del Título",
                    location: "Ciudad, País",
                    fromDate: "YYYY",
                    toDate: "Actual",
                    data: ["Promedio: X.X/10", "Especialización", "Información Adicional"]
                },
                {
                    place: "Nombre de Institución",
                    description: "Nombre del Certificado",
                    location: "Ciudad, País",
                    fromDate: "YYYY",
                    toDate: "YYYY",
                    data: ["Puntuación: XXX", "Certificado por Organización", "Descripción del Nivel"]
                }
            ]
        },
        skills: {
            title: "Habilidades y Tecnologías",
            items: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            ]
        },
        references: {
            title: "Referencias",
            items: [
                {
                    name: "Nombre de Referencia",
                    title: "Título del Trabajo",
                    email: "email@empresa.com",
                    company: "Nombre de Empresa"
                },
                {
                    name: "Otra Referencia",
                    title: "Otro Título",
                    email: "otro@empresa.com",
                    company: "Otra Empresa"
                }
            ]
        }
    }
};