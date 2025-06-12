import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = (formData.get("file") || formData.get("")) as File | null;
  const targetFormat = (formData.get("format") as string) || "webp";

  console.log(file, "file");

  if (!file) {
    return NextResponse.json({ error: "Invalid image file" }, { status: 400 });
  }

  const buffer = await file.arrayBuffer();
  const inputBuffer = Buffer.from(buffer);

  try {
    let outputBuffer: Buffer;
    switch (targetFormat.toLowerCase()) {
      case "webp":
        outputBuffer = await sharp(inputBuffer).webp().toBuffer();
        break;
      case "png":
        outputBuffer = await sharp(inputBuffer).png().toBuffer();
        break;
      case "jpg":
      case "jpeg":
        outputBuffer = await sharp(inputBuffer).jpeg().toBuffer();
        break;
      default:
        return NextResponse.json({ error: "Unsupported format" }, { status: 400 });
    }

    return new NextResponse(new Uint8Array(outputBuffer), {
      headers: {
        "Content-Type": `image/${targetFormat.toLowerCase()}`,
        "Content-Disposition": `attachment; filename="converted.${targetFormat.toLowerCase()}"`,
      },
    });
  } catch (error) {
    console.error("Error converting image:", error);
    return NextResponse.json({ error: "Failed to convert image" }, { status: 500 });
  }
}
