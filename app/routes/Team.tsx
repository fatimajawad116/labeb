import React from 'react'
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team Page" },
    { name: "description", content: "team Page Welcome !" },
  ];
}
function Team() {
  return (
    <div>Team</div>
  )
}

export default Team