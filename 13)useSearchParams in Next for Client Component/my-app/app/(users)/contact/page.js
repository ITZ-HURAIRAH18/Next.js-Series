import React from 'react'
import style from "./contact.module.css"

export const metadata = {
  title: "This is Contact page",
  description: "THis is Description of COntact us page ",
  authors:[{name :'M ABu Hurairah'}, {name :'Next ja Author'}],
  keywords:["Full Stack", "Next.js"],
    icons: {
    icon: "/Pictures/1.png", // path to your icon in public folder
  },
};
function Page() {
  return (
    <h1 className={style.title}>This is Contact us page</h1>
  )
}

export default Page
 