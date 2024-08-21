//app\addProduct\page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [implementation, setImplementation] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [budget, setBudget] = useState("");
  const [year, setYear] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const [weak, setWeak] = useState("");
  const [strength, setStrength] = useState("");
  const [development, setDevelopment] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !project) {
      alert("Name and image are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          project,
          implementation,
          email,
          mobile,
          budget,
          price,
          year,
          evaluation,
          weak,
          strength,
          development,
          suggestion,
        }),
      });

      if (res.ok) {
        router.push("/products");
        // router.push("/");
      } else {
        throw new Error("Failed to create a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center ml-24">
        <h1 className="font-bold py-10 text-2xl">Add New Product</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-10 ml-24">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ยุทธศาสตร์ชาติ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="ยุทธศาสตร์ชาติ"
              />
              {/* <input
        type="text"
        name="first-name"
        id="first-name"
        autoComplete="given-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              โครงการ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setProject(e.target.value)}
                value={project}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="/images/1.jpg"
                defaultValue="/images/1.jpg"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              หน่วยงานที่นำนโยบายไปปฏิบัติ
            </label>
            <div className="mt-2"></div>
            <input
              onChange={(e) => setImplementation(e.target.value)}
              value={implementation}
              className="input input-bordered input-accent w-full max-w-xs"
              type="text"
              placeholder="หน่วยงานที่นำนโยบายไปฏิบัติ"
            />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              อีเมล
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="อีเมล"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              โทรศัพท์
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="โทรศัพท์"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              งบประมาณ(ล้านบาท)
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setBudget(e.target.value)}
                value={budget}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="งบประมาณ"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ปีงบประมาณ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setYear(e.target.value)}
                value={year}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="ปีงบประมาณ"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ผลประเมิณ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEvaluation(e.target.value)}
                value={evaluation}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="ผลประเมิณ"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              จุดอ่อน
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setWeak(e.target.value)}
                value={weak}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="จุดอ่อน"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              จุดแข็ง
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setStreangth(e.target.value)}
                value={streangth}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="จดแข็ง"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              แนวทางเสริมจุดแข็ง
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setDevelopment(e.target.value)}
                value={development}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="แนวทางเสริมจุดแข็ง"
              />
            </div>
          </div>
          {/* <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      ข้อที่ควรปรับปรุงจุดอ่อน
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />
    
    </div>
 
  </div> */}
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ข้อเสนอแนะ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setSuggestion(e.target.value)}
                value={suggestion}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="ข้อเสนอแนะ"
              />
            </div>
          </div>
        </div>
        
       <div className="flex justify-center items-center mt-10"
        <button 
        type="submit" 
        className="btn btn-primary w-full max-w-xs ml-24"
        >
          Add Product
        </button>
      </form>
    </>
  );
}
