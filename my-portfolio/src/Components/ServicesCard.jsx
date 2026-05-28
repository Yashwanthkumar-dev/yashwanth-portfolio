import { servicesData } from "../ServicesData";
import { Cards } from "./Cards";

function ServicesCard() {
  return (
    <section className="w-full mt-10 mb-10">

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >
        {servicesData.map((service, index) => (
          <Cards
            key={index}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>

    </section>
  );
}

export default ServicesCard;