import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Products() {
  const [filter, setFilter] = useState("All");
  const [filteredData, setFilteredData] = useState([]);
  const Data = [
    {
      id: 1,
      gender: "Female",
      title: "Avatar name “Avatown” -nice original avatar of Avatown",
      img: "/images/ava1.png",
      description:
        "Auto upload service ready, you can use this avatar within 24 hours.",
      price: "$50.00",
    },
    {
      id: 2,
      gender: "Female",
      title: "Avatar name “Avatown” -nice original avatar of Avatown",
      img: "/images/ava2.png",
      description:
        "Auto upload service ready, you can use this avatar within 24 hours.",
      price: "$50.00",
    },
    {
      id: 3,
      gender: "male",
      title: "Avatar name “Avatown” -nice original avatar of Avatown",
      img: "/images/ava3.png",
      description:
        "Auto upload service ready, you can use this avatar within 24 hours.",
      price: "$50.00",
    },
    {
      id: 4,
      gender: "Male",
      title: "Avatar name “Avatown” -nice original avatar of Avatown",
      img: "/images/ava4.png",
      description:
        "Auto upload service ready, you can use this avatar within 24 hours.",
      price: "$50.00",
    },
  ];

  useEffect(() => {
    const filtered =
      filter === "All"
        ? Data
        : Data.filter(
            (item) => item.gender.toLowerCase() === filter.toLowerCase()
          );
    setFilteredData(filtered);
  }, [filter, Data]);
  return (
    <div>
      
      <div className="d-flex justify-content-center mb-4">
        <Button
          variant="secondary"
          onClick={() => setFilter("All")}
          className={filter === "All" ? "active" : ""}
        >
          All
        </Button>
        <Button
          variant="secondary"
          onClick={() => setFilter("Male")}
          className={filter === "Male" || "male" ? "active" : ""}
        >
          Male
        </Button>
        <Button
          variant="secondary"
          onClick={() => setFilter("Female")}
          className={filter === "Female" || "female" ? "active" : ""}
        >
          Female
        </Button>
      </div>
      {/* <div className="d-flex justify-content-around">
        {Data.map((item) => (
          <>
            <div>
              <Card key={item.id} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + item.img}
                  alt={item.title}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </>
        ))}
      </div> */}
      <div className="d-flex justify-content-around">
        {filteredData.map((item) => (
          <div key={item.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + item.img}
                alt={item.title}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
