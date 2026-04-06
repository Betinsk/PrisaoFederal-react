import React from "react";

const MugshotsViewer = ({ person }) => {
  return (
    <div>
      <h2>{person.name} - Mugshots</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        {person.mugshots?.map((mugshot) => (
          <img
            key={mugshot.id}
            src={mugshot.imageUrl}
            alt="mugshot"
            width={150}
            height={150}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default MugshotsViewer;