import { readFileSync } from "node:fs";
import path from "node:path";
export function LegalDocument({file}:{file:string}){const raw=readFileSync(path.join(process.cwd(),"content",file),"utf8");const blocks=raw.split(/\r?\n\r?\n+/).filter(Boolean);return <main className="nini-legal nini-shell">{blocks.map((block,i)=>{const lines=block.split(/\r?\n/);if(i===0)return <h1 key={i}>{lines[0]}</h1>;if(/^\d+\./.test(block))return <section key={i}><h2>{lines[0]}</h2>{lines.slice(1).length>0&&<p>{lines.slice(1).join("\n")}</p>}</section>;return <p key={i}>{block}</p>})}</main>}
