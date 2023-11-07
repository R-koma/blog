import { supabase } from "@/utils/supabaseClient";
// import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

//next.js13以前の書き方
// index.tsx
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { data, error } = await supabase.from("posts").select("*");
//   console.log(data);

//   if (error) {
//     return res.status(500).json({ error: error.message });
//   }

//   return res.status(200).json(data);
// }

// next.js13以降の書き方
export async function GET(req: Request, res: Response) {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

//投稿API
export async function POST(req: Request, res: Response) {
  const { id, title, content } = await req.json();

  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 201 });
}
