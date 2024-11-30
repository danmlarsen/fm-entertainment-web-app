import data from "@/assets/data.json";

export async function GET() {
  return Response.json(data);
}
