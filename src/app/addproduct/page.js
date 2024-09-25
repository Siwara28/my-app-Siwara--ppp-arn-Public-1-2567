//app\addProduct\page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

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
      <div className="flex justify-center items-center">
        <Button
          variant="contained"
          color="success"
          className="font-bold px-20 py-3 mt-5"
          size="large"
        >
          Add New Product
        </Button>
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
              <select
                className="input input-bordered input-accent w-full max-w-xs"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="ยุทธศาสตร์ชาติ"
              >
                <option disabled selected>
                  ดัชนีแผนแม่บทด้านความมั่นคง
                </option>
                <option>ดัชนีสันติภาพโลก</option>
                <option>ดัชนีความสุขโลก</option>
                <option>ดัชนีสิทธิมนุษยชนและหลักนิติธรรม</option>
                <option>ดัชนีสถาบันหลัก</option>
                <option>ดัชนีเสถียรภาพทางการเมือง</option>
                <option>ดัชนีการมีสิทธิ์เสียงของประชาชนและการรับผิดชอบ</option>
                <option>ดัชนีปลอดภัยจากภัยคุกคาม</option>
                <option>ดัชนีความสงบสุขภาคใต้</option>
                <option>
                  ดัชนีประสิทธิภาพของหน่อยงานด้านการข่าวและประชาคมข่าวกรอง
                </option>
                <option>ดัชนีความแข็งแกรงทางกำลังทหาร</option>
                <option>ดัชนีรัฐเปาะบาง</option>
                <option>
                  ดัชนีจำนวนเป้าหมายย่อยของเป้าหมายการพัฒนาที่ยังยืนในเป้าหมายที่
                  17 บรรลุตามที่กำหนด
                </option>
                <option>
                  ดัชนีระดับประสิทธิ์ภาพการดำเนินงานของด้านการจัดการความมั่นคง
                </option>
              </select>
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
                placeholder="โครงการ"
                // defaultValue="/images/1.jpg"
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
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              อีเมล
            </label>
            <div className="mt-2"></div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input input-bordered input-accent w-full max-w-xs"
              type="text"
              placeholder="อีเมล"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              โทรศัพท์
            </label>
            <div className="mt-2"></div>
            <input
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
              className="input input-bordered input-accent w-full max-w-xs"
              type="number"
              placeholder="โทรศัพท์"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              งบประมาณ(ล้านบาท)
            </label>
            <div className="mt-2"></div>
            <input
              onChange={(e) => setBudget(e.target.value)}
              value={budget}
              className="input input-bordered input-accent w-full max-w-xs"
              type="number"
              placeholder="งบประมาณ(ล้านบาท)"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ปีงบประมาณ
            </label>
            <div className="mt-2"></div>
            <input
              onChange={(e) => setYear(e.target.value)}
              value={year}
              className="input input-bordered input-accent w-full max-w-xs"
              type="number"
              placeholder="ปีงบประมาณ"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ผลประเมิณ
            </label>
            <div className="mt-2"></div>
            <input
              onChange={(e) => setEvaluation(e.target.value)}
              value={evaluation}
              className="input input-bordered input-accent w-full max-w-xs"
              type="number"
              placeholder="ผลประเมิณ"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              จุดอ่อน
            </label>
            <div className="mt-2"></div>
            <textarea
              onChange={(e) => setWeak(e.target.value)}
              value={weak}
              className="input input-bordered input-accent w-full max-w-xs"
              type="text"
              placeholder="จุดอ่อน"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              จุดแข็ง
            </label>
            <div className="mt-2"></div>
            <textarea
              onChange={(e) => setStrength(e.target.value)}
              value={strength}
              className="input input-bordered input-accent w-full max-w-xs"
              type="text"
              placeholder="จุดแข็ง"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              แนวทางเสริม(จุดแข็ง)
            </label>
            <div className="mt-2"></div>
            <textarea
              onChange={(e) => setDevelopment(e.target.value)}
              value={development}
              className="input input-bordered input-accent w-full max-w-xs"
              type="text"
              placeholder="แนวทางเสริม(จุดแข็ง)"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ข้อเสนอแนะ
            </label>
            <div className="mt-2"></div>
            <textarea
              onChange={(e) => setSuggestion(e.target.value)}
              value={suggestion}
              className="input input-bordered input-accent w-full max-w-xs"
              type="text"
              placeholder="ข้อเสอแนะ"
            />
          </div>
        </div>

        {/* <button type="submit" className="btn btn-primary w-full max-w-xs">
          Add Product
        </button> */}
        <Button
          type="submit"
          variant="contained"
          color="success"
          className="font-bold px-20 py-3"
          size="large"
        >
          Add Product
        </Button>
        <div />
      </form>
    </>
  );
}
