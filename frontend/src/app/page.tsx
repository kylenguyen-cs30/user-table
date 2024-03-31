//import Image from "next/image";
"use client";
import Form from "./components/form/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form></Form>
    </main>
  );
}
