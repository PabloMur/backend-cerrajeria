import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export function GET(){
  return NextResponse.json({
    message: "Hello World"
  })
}