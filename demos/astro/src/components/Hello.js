import { tags } from "ziko/dom"

export default function Hello({msg = "Hello From Zikojs", color = "red"}={}){
    console.log({color})
    return tags.h1(msg).style({color}).onClick(()=>console.log("Hello From Client"))
}