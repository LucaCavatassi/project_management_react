import classes from "./DetailSection.module.css"

export default function DetailSection ({projectDetail}) {
    console.log(projectDetail);
    

    return (
        <div>
            <h1>{projectDetail.title}</h1>
            <p>{projectDetail.description}</p>
            <p>{projectDetail.date}</p>
        </div>
    )
}