//components\EditProductForm.jsx
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
// import Image from "next/image";
import * as React from "react";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function ProductsList() {
  const { products } = await getProducts();

  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <div className="overflow-x-auto">
        <div className="flex justify-center items-center">
          <h1 className="font-bold py-10 text-2xl">
            การติดตามและประเมินผลยุทธศาสตร์ชาติ 20 ปี
          </h1>
        </div>
        <div className="text-left ml-16 ">
          <Link href={"/addProduct"}>
            <Button
              variant="contained"
              color="success"
              className="font-bold"
              size="large"
            >
              Add Product
            </Button>
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>ยุทธศาสต์ชาติ</th>
              <th>โครงการ</th>
              <th>หน่อยงานทีนำนโยบายไปปฏิบัติ</th>
              <th>อีเมล</th>
              <th>โทรศัพท์</th>
              <th>งบประมาณ (ล้านบาท)</th>
              <th>ปีงบประมาณ</th>
              <th>ผลประเมิณ</th>
              <th>จุดอ่อน</th>
              <th>จุดแข็ง</th>
              <th>แนวทางเสริมจุดแข็ง</th>
              <th>ข้อเสนอเเนะ</th>
              <th>Edit & Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((element, index) => (
              <tr className="hover" key={element._id}>
                <th>{index + 1}</th>

                <td>{element.name}</td>
                <td>{element.project}</td>
                <td>{element.implementation}</td>
                <td>{element.email}</td>
                <td>{element.mobile}</td>
                <td>{element.budget}</td>
                <td>{element.year}</td>
                <td>{element.evaluation}</td>
                <td>{element.weak}</td>
                <td>{element.strength}</td>
                <td>{element.development}</td>
                <td>{element.suggestion}</td>
                <th>
                  <div className="flex justify-center items-center">
                    <Link href={`/editProduct/${element._id}`}>
                      <Button
                        variant="contained"
                        color="success"
                        className="m-2"
                        size="large"
                      >
                        <EditIcon />
                      </Button>
                    </Link>
                    <RemoveBtn id={element._id} />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
