import React from "react";
import { useState } from "react";
import "./Services.css";
import Clientpop from "./Clientpop";

const clients = [
  {
    id: 1,
    logo: "src/assets/workplace_8170939.png",
    description: "Motion Graphics",
  },
  {
    id: 2,
    logo: "src/assets/visual-effect_3879988.png",
    description: "VFX",
  },
  {
    id: 3,
    logo: "src/assets/virtual-reality_1377790.png",
    description: "AR/VR/MR/XR",
  },
  { id: 4,
    logo: "src/assets/3d-model_14189680.png" ,
    description:"3D Modeling/Rendering"
  },
  {
    id: 5,
    logo: "src/assets/ux-design_7889802.png",
    description: "UI/UX",
  },
  {
    id: 6,
    logo: "src/assets/team_2083290.png",
    description: "Academic Alliances",
  },
  {
    id: 7,
    logo: "src/assets/studio_9200070 (1).png",
    description: "Generatives AI",
  },
  {
    id: 8,
    logo: "src/assets/cpu_888995.png",
    description: "CG",
  },
  {
    id: 9,
    logo: "src/assets/production_13136249.png",
    description: "Virutual Production",
  },
  {
    id: 10,
    logo: "src/assets/game-development_2029515.png",
    description: "Game Development",
  },
  {
    id: 11,
    logo: "src/assets/film-editing_4035077.png",
    description: "Video Editing",
  },
  {
    id: 12,
    logo: "src/assets/computer_10940047.png",
    description: "2D/3D Animation",
  },
];

function Services() {
  const [selectedClient, setSelectedClient] = useState();

  const handleCardClick = (client) => {
    setSelectedClient(client);
  };

  const closePopup = () => {
    setSelectedClient();
  };
  return (
    <div className="services-section">
      <h1>Our Services</h1>
      <div className="cards-container">
        {clients.map((client) => (
          <div
            key={client.id}
            className="card"
            onClick={() => handleCardClick(client)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={client.logo} alt={client.name} className="logo" />
              </div>
              <div className="card-back">
                <p>{client.name}</p>
              </div>
            </div>
          </div>
        ))}
            <div className="process">
              <h5>Our Working Process</h5>
              <p>A well-structured workflow with great design execution</p>
              <div className="grid">
                <ul>
                  <li>
                    <div className="box">
                      <img src="src/assets/business-brain-storming.png" alt="no image" height="50px" ></img>
                      <h4>Discussion</h4>
                      <p className="boxp">Under the client's business,goals and challenges for building relationship</p>
                    </div>
                  </li>
                  <li>
                  <div className="box">
                      <img src="src/assets/depiction-human-brain-intellect-as-lightbulb.png" alt="no image" height="30px" ></img>
                      <h4>Ideate</h4>
                      <p className="boxp">Under the client's business,goals and challenges for building relationship</p>
                    </div>
                  </li>
                  <li>
                  <div className="box">
                      <img src="src/assets/processing-concept-illustration.png" alt="no image" height="30px" ></img>
                      <h4>Execution</h4>
                      <p className="boxp">Under the client's business,goals and challenges for building relationship</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
      </div>
      {selectedClient && (
        <Clientpop client={selectedClient} closePopup={closePopup} />
      )}
    </div>
  );
}

export default Services;
