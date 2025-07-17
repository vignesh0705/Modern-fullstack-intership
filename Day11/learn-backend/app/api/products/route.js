import { connectDB } from "@/lib/db";
import { ProductModel } from "@/model/productmodel";

export let GET = async (req) => {
  try {
    await connectDB();
    const product=await ProductModel.find();
    return Response.json(
      {
        status: "sucess",
        data: {
          product,
        },
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return Response.json(
      {
        status: "Failed",
        message: err,
      },
      {
        status: 500,
      }
    );
  }
};

export let POST = async (req) => {
  try {

    // if (products.find((item) => item.name === data.name) || !data.price) {
    //   return Response.json(
    //     {
    //       status: "Wrong data",
    //       message: "Please enter name and price",
    //     },
    //     {
    //       status: 400,
    //     }
    //   );
    // }
    // const newProduct = {
    //   id: products.length + 1,
    //   ...data,
    // };
    // products.push(newProduct);
    
    await connectDB();
    const data = await req.json();
    await ProductModel.create(data);
    
    return Response.json(
      {
        status: "sucess",
        data:ProductModel,
      },
      {
        status: 201,
      }
    );

  } catch (err) {
    return Response.json(
      {
        status: "Failed",
        message: err,
      },
      {
        status: 500,
      }
    );
  }
};