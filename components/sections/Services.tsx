import Section from "../template/Section";
import services from "@/data/services";
import ServiceCard from "./services/ServiceCard";
import { service } from "@/data/services";

const Services = () => {
  return (
    <Section className="0" heading="My Services" id="services">
      <div className="flex flex-col lg:flex-row gap-5 my-14">
        {services.map((value: service, idx: number) => (
          <div key={idx} className={""}>
            <ServiceCard
              style={`${idx === 1 ? "scale-105" : ""}`}
              title={value.title}
              subTitle={value.subTitle}
              price={value.price}
              points={value.points}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
