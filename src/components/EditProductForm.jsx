//components\EditProductForm.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({
  id,
  name,
  project,
  implementation,
  email,
  modiie,
  budget,
  year,
  eveluation,
  weak,
  strength,
  development,
  suggestion,
       }) {
  const [newName, setNewTitle] = useState(name);
  const [newProject, setNewProject] = useState(project);
  const [newImplementation, setNewImplementation] = useState(implementation);
  const [constEmail, setNewEmail] = useState(email);
  const [constModiie, setNewModiie] = useState(modiie);
  const [constBudget, setNewBudget] = useState(budget);
  const [constYear, setNewYear] = useState(year);
  const [constEveluation, setNewEveluation] = useState(eveluation);
  const [constWeak, setNewWeak] = useState(weak);
  const [constStrength, setNewStrength] = useState(strength);
  const [constDevelopment, setNewDevelopment] = useState(defaulevelopment);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newProject, newImplementation, newEmail , newMobilele , newBudget , newYear , newEvaluation , newWeak , newStrength , newDevalopment , newSuggestion }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Product");
      }

      router.refresh();
      router.push("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold py-10 text-2xl">Update Product</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newName}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewProject(e.target.value)}
          value={newImage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewImplementation(e.target.value)}
          value={newPrice}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewEmail(e.target.value)}
          value={newCategory}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewMobget(e.target.value)}
          value={newCategory}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewYear(e.target.value)}
          value={newCategory}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewEvaluation(e.target.value)}
          value={newCategory}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewWeak(e.target.value)}
          value={newCategory}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewStrength(e.target.value)}
          value={newCategory}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewDevalopment(e.target.value)}
          value={newCategory}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewSuggestion(e.target.value)}
          value={newCategory}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
       
       

        <button className="btn btn-primary w-full max-w-xs">
          Update Product
        </button>
      </form>
    </>
  );
}
