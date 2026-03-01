import { AnalysisChart } from "./AnalysisChart";
import Card from "./Card";

const CardList: React.FC = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="w-full h-auto bg-[url('/img.webp')] bg-cover bg-center flex flex-col justify-start p-6 rounded-2xl gap-6">
                <div>
                    <h2 className="text-2xl font-medium text-gray-800">
                        Sales Distribution
                    </h2>
                    <p className="text-sm font-normal text-gray-500 mb-5">
                        This is all over platform Sales Generated
                    </p>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                    <Card amount={34343} title="Total Sales" percentage={0} lak="" />
                    <Card amount={4.5} title="By Website" percentage={40} lak="k" />
                    <Card amount={2.8} title="By Mobile" percentage={45} lak="k" />
                    <Card amount={2.2} title="By Market" percentage={42} lak="k" />
                    <Card amount={1.7} title="By Agent" percentage={60} lak="k" />
                </div>
            </div>

            {/* chart */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                <AnalysisChart/>
            </div>
        </div>

    );
};

export default CardList;