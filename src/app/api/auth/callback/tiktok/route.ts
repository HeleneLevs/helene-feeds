import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Relay TikTok OAuth callback to local lensistant
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const error = req.nextUrl.searchParams.get("error");

  const params = new URLSearchParams();
  if (code) params.set("code", code);
  if (state) params.set("state", state);
  if (error) params.set("error", error);

  // Redirect to local lensistant callback
  return NextResponse.redirect(
    `http://localhost:3000/api/tiktok/callback?${params.toString()}`
  );
}
