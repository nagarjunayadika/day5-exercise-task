import React, { useState } from "react";
import { Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Home() {
  const profileList = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHeHY3ChZzAggMuABbPsmOP4Lu2nWDdT2NhZSK-zMTNfWF4Zq",
      type: "Mahesh Profile",
      title: "Mahesh Babu",
      status: "Active",
      gender: "Male",
      born: "09/08/1975",
      level: "90%",
      socialMedia: {
        facebook: "https://www.facebook.com/urstrulyMahesh/",
        twitter:
          "https://x.com/urstrulyMahesh?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        instagram: "https://www.linkedin.com/pub/dir/Mahesh/Babu",
        linkedin: "https://www.instagram.com/urstrulymahesh/?hl=en",
      },
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQYSPVFvgSA4gkZwdNu8NffFQfSSFILxcxsCQeArWuBkM8bqJj",
      type: "Prabhas Profile",
      title: "Prabhas",
      status: "Active",
      gender: "Male",
      born: "23/10/1979",
      level: "95%",
      socialMedia: {
        facebook: "https://www.facebook.com/ActorPrabhas/",
        twitter: "https://x.com/actorprabha",
        instagram: "https://www.instagram.com/actorprabhas/?hl=en",
        linkedin:
          "https://in.linkedin.com/in/prabhasrebalstar7?original_referer=https%3A%2F%2Fwww.google.com%2F",
      },
    },
    {
      image:
        "data:image/jpeg;base64,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",
      type: "Pawan Kalyan Profile",
      title: "Pawan Kalyan",
      status: "Active",
      gender: "Male",
      born: "02/09/1971",
      level: "85%",
      socialMedia: {
        facebook: "https://www.facebook.com/PawanKalyan/",
        twitter:
          "https://x.com/PawanKalyan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        instagram: "https://www.instagram.com/pawankalyan/?hl=en",
        linkedin: "https://in.linkedin.com/in/pawan-kalyan-3ba756169",
      },
    },
  ];

  const [profiles, setProfiles] = useState(profileList);

  return (
    <div className="profile-list-container">
      <Row>
        {profiles.map((profile, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card>
              <h2>{profile.type}</h2>
              <Card.Img src={profile.image} />
              <Card.Body>
                <Card.Title>Name: {profile.title}</Card.Title>
                <Card.Text>
                  <ListGroup horizontal>
                    <ListGroup.Item>{profile.status}</ListGroup.Item>
                    <ListGroup.Item>{profile.gender}</ListGroup.Item>
                    <ListGroup.Item>Born: {profile.born}</ListGroup.Item>
                  </ListGroup>
                  <p>Activity Level: {profile.level}</p>
                </Card.Text>
                <SocialMediaIcons socialMedia={profile.socialMedia} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
