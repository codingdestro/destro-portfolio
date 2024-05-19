import { Button } from "@/components/ui/button";
import { playfair } from "@/app/fonts";
import ServicePoints from "./ServicePoints";
import { service } from "@/data/services";
interface Props extends service {
  style?: string;
}

const ServiceCard = ({ style, title, subTitle, price, points }: Props) => (
  <div
    className={`flex bg-white flex-col items-center gap-y-4 justify-between h-[500px] w-[350px] border shadow-lg px-5 py-6 rounded-lg ${style || ""}`}
  >
    <div className="text-center">
      <h2 className={`${playfair.className} text-[44px] font-semibold`}>
        {title}
      </h2>
      <h4 className="text-[12px] text-gray-600 ">{subTitle}</h4>
    </div>
    <div>
      <h1 className={`${playfair.className} text-[40px] font-bold`}>
        ${price}/hour
      </h1>
    </div>

    <ServicePoints points={points} />

    <Button className="w-[14rem]  rounded-xl">hire me</Button>
  </div>
);

export default ServiceCard;
