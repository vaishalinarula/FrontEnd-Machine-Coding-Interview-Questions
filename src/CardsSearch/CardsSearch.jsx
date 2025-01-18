import React, { useState } from "react";

const CardSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [cards] = useState([
    { id: 1, title: "Card 1", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
    { id: 3, title: "Card 4", description: "This is the third card." },
    { id: 4, title: "Card 4", description: "This is the fourth card." },
  ]);

  // Filter the cards based on the search query
  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search cards..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div
              key={card.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "20px",
                margin: "10px",
                width: "200px",
              }}
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))
        ) : (
          <p>No cards found</p>
        )}
      </div>
    </div>
  );
};

export default CardSearch;
