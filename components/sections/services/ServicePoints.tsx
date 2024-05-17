const ServicePoints = ({ points }: { points: string[] }) => (
  <div>
    {points.map((point: string, idx: number) => (
      <li key={idx} className="">
        {point}
      </li>
    ))}
  </div>
);

export default ServicePoints;
