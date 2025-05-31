"use client";

import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to your desired default route
  redirect("/projects");
  
  // Or you can return a home page component instead
  // return <YourHomePageComponent />;
} 