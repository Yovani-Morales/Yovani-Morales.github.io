import { Git } from "../Icon/Git";
import { GitHub } from "../Icon/GitHub";
import { NPM } from "../Icon/NPM";
import { Vscode } from "../Icon/Vscode";
import { Linux } from "../Icon/Linux";
import { Terminal } from "../Icon/Terminal";
import { Nextjs } from "../Icon/Nextjs";
import { Nodejs } from "../Icon/Nodejs";
import { Expressjs } from "../Icon/Expressjs";
import { MySql } from "../Icon/MySql";
import { HTML } from "../Icon/HTML";
import { CSS } from "../Icon/CSS";
import { JavaScript } from "../Icon/JavaScript";
import { React } from "../Icon/React";
import { Tailwind } from "../Icon/Tailwind";
import { TypeScript } from "../Icon/TypeScript";
import { Vite } from "../Icon/Vite";

const SVG = ({ name, className }) => {
  const svgName = name.toLowerCase();
  const svg = {
    'git': className => <Git className={className} />,
    'github': className => <GitHub className={className} />,
    'npm': className => <NPM className={className} />,
    'vscode': className => <Vscode className={className} />,
    'linux': className => <Linux className={className} />,
    'terminal': className => <Terminal className={className} />,
    'next.js': className => <Nextjs className={className} />,
    'node.js': className => <Nodejs className={className} />,
    'express.js': className => <Expressjs className={className} />,
    'mysql': className => <MySql className={className} />,
    'html': className => <HTML className={className} />,
    'css': className => <CSS className={className} />,
    'javascript': className => <JavaScript className={className} />,
    'react': className => <React className={className} />,
    'tailwind': className => <Tailwind className={className} />,
    'typescript': className => <TypeScript className={className} />,
    'vite': className => <Vite className={className} />,
  }
  return (svg[svgName](className));
}

export { SVG };
