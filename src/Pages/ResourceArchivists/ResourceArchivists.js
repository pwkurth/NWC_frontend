import React, { useEffect, useState } from 'react';
import VARIABLES from '../../config/.env';
import './ResourceArchivists.css';
import researcher_button from "./res/researcher_button.png"
import oralIcon from "./res/oralIcon.png"
import colorCorner from "./res/colorCorner.png"
import techIcon from "./res/techIcon.png"
import permissionIcon from "./res/permissionIcon.png"
import contributeIcon from "./res/contributeIcon.png"
import ideaIcon from "./res/ideaIcon.png"

import ReactPlayer from 'react-player';

const getWhere = (data, key, value) => {
    return data.filter(e => e[key] === value);
}

function ResourceArchivists() {

    const [resourcesArchivistsText, setResorcesArchivistsText] = useState("");
    const [imgCredit, setBannerImageCredit] = useState("");
    const [imgCredit_more, setBannerImageCredit_more] = useState("");
    const [researchersText, setResearchersText] = useState("");


    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, "content-toolkits"].join('/'))
            .then(res => res.json())
            .then(data => {

                setResorcesArchivistsText(
                    data.Resources_for_Archivists_Text
                );
                setBannerImageCredit(
                    data.BannerImageCredit
                );
                setBannerImageCredit_more(
                    data.BannerImageCredit_more
                );
                setResearchersText(
                    data.ResearchersText
                );
            })
    }, []);

    return (
        <div className="resourceResearchers">

            {/* COLOR CORNER TOP RIGHT */}
            <div className="colorRibbonTR">
                <img src={colorCorner} alt="Color banner top right"></img>
            </div>

            {/* BANNER */}
            <div className="researchersBanner">
                <div className="researchersBanner_button">
                    <img src={researcher_button} alt="Researcher Button" />
                </div>
                <div className="researchersBanner_header">
                    <h1>RESOURCES FOR ARCHIVISTS</h1>
                <div className="researchersBanner_border"></div>
                    <p>{resourcesArchivistsText}</p>
                </div>
                {/* <LCard text={banner_card} /> */}
            </div>

            {/* VIDEO PLAYER */}
            <div className="resourceVideoPlayer">
                <h2>VIDEO PLAYER</h2>
                <ReactPlayer
                    url={'https://www.youtube.com/watch?v=mV0bUQpz468'}
                    controls={true}
                />
            
            </div>

            {/* RESEARCHER ICONS */}
            <div className="resourceResearchersIcons">
                <div className="iconContainer">
                    <img src={oralIcon} alt="_"></img>
                    <p>How to Contribute Oral Histories</p>  
                </div>
                <div className="iconContainer">
                    <img src={contributeIcon} alt="_"></img>
                    <p>How to Contribute Biographies</p>  
                </div>
                <div className="iconContainer">
                    <img src={techIcon} alt="_"></img>  
                    <p>Technical Guidelines</p>
                </div>
                <div className="iconContainer">
                    <img src={permissionIcon} alt="_"></img>
                    <p>Permissions Documents</p>  
                </div>
            </div>


            {/* MORE IDEAS CONTAINER */}
            <div className="ideaContainer">
                    <img src={ideaIcon} alt="_"></img>
                    <h1>HAVE MORE IDEAS? TELL US HERE</h1>
            </div>

            {/* COLOR CORNER TOP RIGHT */}
            <div className="colorRibbonBL">
                <img src={colorCorner} alt="Color banner bottom left"></img>
            </div>

        </div>
    )
}
export default ResourceArchivists