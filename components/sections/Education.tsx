import Section from "../template/Section";
import ScrollDiv from "../ui/scrollDiv";

const Education = () => {
  return (
    <Section heading="My Education" className="min-h-[30rem]" id="education">
      <div className=" w-[800px] mt-10 flex flex-col gap-10">
        <ScrollDiv animation="animate-fadeUp">
          <div className="border-b-2 flex p-3 justify-between">
            <div className="capitalize">
              <h3 className="font-semibold text-xl">b.tech CSE</h3>
              <p>st. andrew&apos;s institute of Technology & management</p>
            </div>
            <div>
              <p>2024-2028</p>
            </div>
          </div>
        </ScrollDiv>
        <ScrollDiv animation="animate-fadeUp ">
          <div className="border-b-2 flex p-3 justify-between">
            <div className="capitalize">
              <h3 className="font-semibold text-xl">
                Higher Secondary School 12<sup className="lowercase">th</sup>
              </h3>
              <p>National institute of open schooling (N.I.O.S)</p>
            </div>
            <div>
              <p>2021-2023</p>
            </div>
          </div>
        </ScrollDiv>
      </div>
    </Section>
  );
};

export default Education;
