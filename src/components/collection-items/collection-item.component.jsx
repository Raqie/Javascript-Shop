import React from "react";
import "../collection-items/collection-item.style.scss";

const CollectionItem = (
  { id, name, price, imageUrl } //shop.data.js
) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="name">{price}</span>
    </div>
  </div>
);
export default CollectionItem;
