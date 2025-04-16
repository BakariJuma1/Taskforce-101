import React, { useState } from "react";

function AddTask({ onAdd }) {
  const [formData, setFormData] = useState({ category: "", activity: "" });

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      category: "",
      activity: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="new task"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <br />
      <input
        type="text"
        require
        value={formData.activity}
        onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
      />
      <br />
      <input type="submit" />
    </form>
  );
}

export default AddTask;
