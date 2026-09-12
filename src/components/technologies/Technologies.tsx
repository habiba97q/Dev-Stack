import { use } from "react";
import type { Itechnologies } from "../../types/technologiesType";

     interface TechnologiesProps{
        tecnologiesPromise: Promise<Itechnologies[]>
     }

    const Technologies = ({ technologiesPromise }:TechnologiesProps) => {
    console.log(technologiesPromise);
    const technologies = use(technologiesPromise);
    console.log(technologies,"technologies")
    return (
        <div>
            
        </div>
    );
};

export default Technologies;