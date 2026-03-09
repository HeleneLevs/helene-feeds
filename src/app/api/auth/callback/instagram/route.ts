import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Relay Instagram OAuth callback to local lensistant
  const code = req.nextUrl.searchParams.get("code");
  const error = req.nextUrl.searchParams.get("error");

  const params = new URLSearchParams();
  if (code) params.set("code", code);
  if (error) params.set("error", error);

  return NextResponse.redirect(
    `http://localhost:3000/api/instagram/callback?${params.toString()}`
  );
}
