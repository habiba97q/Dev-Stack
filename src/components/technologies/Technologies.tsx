import { use } from "react";
import type { Itechnologies } from "../../types/technologiesType";
import TechnologiesCard from "./TechnologiesCard";

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnologies[]>
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise);

    return (
        <div className="container mx-auto">
            <div>
                <h2 className="text-4xl font-bold">
                    Explore the <span className="text-[#D91B7E]">Technologies</span>
                </h2>

                <p className="text-[#64748B] text-sm">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <TechnologiesCard technologies={technologies} />
        </div>
    );
};

export default Technologies;