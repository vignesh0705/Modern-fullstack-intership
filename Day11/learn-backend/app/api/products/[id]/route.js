import { connectDB } from "@/lib/db";
import { products } from "@/lib/products";
import { ProductModel } from "@/model/productmodel";

export let GET = async (req, { params }) => {
    try {
      await connectDB();
        const id = params.id;
        const data=await ProductModel.findById(id);
        return Response.json(
            {
                status: "success",
                data: {
                    data,
                }
            }, {
            status: 200,
        }
        )
    }
    catch (err) {
        return Response.json(
            {
                status: "Fails",
                Error: err,
            }, {
            status: 400,
        }
        )
    }
}
export let DELETE = async (req, { params }) => {
    try {
      await connectDB();
        const ids = params.id;
        await ProductModel.findByIdAndDelete({ids})
        return Response.json(
            {
                status: "Deleted Successdully",
                message: "Valid Id",
            }, {
            status: 200,
        }
        )
    }
    catch (err) {
        return Response.json(
            {
                status: "Deleted UnSuccessdully",
                message: err,
            },
            {
                status: 400,
            }
        )
    }
}

export let PATCH = async (req, { params }) => {
  try {
      await connectDB();
    const id = params.id;
    const data = await req.json();
    // if(!data){
    //   return Response.json({
    //   status:"please provide the data",
    //       meassage:"Error occurred",
    //   },{status:400})
    // }
    await ProductModel.findByIdAndUpdate(id,data);
    
   return Response.json(
      {
        status: "Update sucessfully",
        data: {
          products,
        },
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