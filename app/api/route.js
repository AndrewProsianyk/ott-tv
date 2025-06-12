// import { NextResponse } from "next/server";
// import { BASE_API_URL } from "../constants/apiRoutes";

// export async function GET() {
//   const accessToken = process.env.TMDB_API_READ_ACCESS_TOKEN;

//   try {
//     const response = await fetch(`${BASE_API_URL}/movie/popular`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(
//         `TMDb API Error: ${response.status} - ${
//           errorData.status_message || "Unknown error"
//         }`
//       );
//     }

//     const data = await response.json();
//     return NextResponse.json({
//       data,
//     });
//   } catch (error) {
//     console.error("Error fetching popular movies:", error);
//   }
// }
