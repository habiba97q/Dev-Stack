import type { Itechnologies } from '../../types/technologiesType';

const TechnologiesCard = ({ technologies }) => {
    console.log(technologies, "technologies from card");

    return (
        <div className="grid grid-cols-3 gap-4 mt-8">
            {
                technologies.map((technologiesType: Itechnologies) => {
                    return (
                        <div key={technologiesType.id} className="border rounded-xl p-4 shadow-sm">

                            <div className="flex justify-between items-center">

                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                    {technologiesType.category}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold mt-4">
                                {technologiesType.name}
                            </h2>

                            <p className="text-sm text-gray-500 mt-2">
                                {technologiesType.description}
                            </p>

                            <div className="flex justify-between items-center mt-4">

                                <div className="flex gap-2">
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                        {technologiesType.language}
                                    </span>

                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                        {technologiesType.type}
                                    </span>
                                </div>

                                <span className="text-sm">
                                    ⭐ {technologiesType.rating}
                                </span>

                            </div>

                            <button className="w-full bg-[#0B1220] text-white py-2 rounded-md mt-4">
                                Add to Stack
                            </button>

                        </div>
                    );
                })
            }
        </div>
    );
};

export default TechnologiesCard;