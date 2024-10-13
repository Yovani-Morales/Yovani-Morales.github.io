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
import { User } from "../Icon/User";
import { Location } from "../Icon/Location";
import { Guatemala } from "../Icon/Guatemala";
import { LinkedIn } from "../Icon/LinkedIn";
import { Email } from "../Icon/Email";
import { X } from "../Icon/X";
import { Facebook } from "../Icon/Facebook";
import { EmailTwo } from "../Icon/EmailTwo";
import { Vue } from "../Icon/Vue";
import { Vuetify } from "../Icon/Vuetify";
import { Figma } from "../Icon/Figma";
import { Firebase } from "../Icon/Firebase";
import { Python } from "../Icon/Python";
import { Bash } from "../Icon/Bash";

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
    'user': className => <User className={className} />,
    'location': className => <Location className={className} />,
    'guatemala': className => <Guatemala className={className} />,
    'linkedin': className => <LinkedIn className={className} />,
    'email': className => <Email className={className} />,
    'x': className => <X className={className} />,
    'facebook': className => <Facebook className={className} />,
    'emailtwo': className => <EmailTwo className={className} />,
    'vue': className => <Vue className={className} />,
    'vuetify': className => <Vuetify className={className} />,
    'figma': className => <Figma className={className} />,
    'firebase': className => <Firebase className={className} />,
    'python': className => <Python className={className} />,
    'bash': className => <Bash className={className} />,
  }
  return (svg[svgName](className));
}

export { SVG };
