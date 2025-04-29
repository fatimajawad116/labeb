import React from 'react'
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services Page" },
    { name: "description", content: "Services Page Welcome !" },
  ];
}
function Services() {
  return (
    <div>Services</div>
  )
}

export default Services