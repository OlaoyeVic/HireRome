import circle1 from "../assets/circle1.svg"
// import circle2 from "../assets/circle2.svg"
import circle3 from "../assets/circle3.svg"

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-[#F1F5F9]-[.90] via-[#FFFFFF]-[.0] to-[#37B34A] py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-2">Features</h2>
      <p>What You Get with the 10X Sales System</p>

      <div className="flex flex-row justify-between items-center gap-10 relative mt-20 md:px-16 px-6 overflow-x-auto scrollbar-hide h-[178px]">
        <div className="flex flex-col items-center max-w-xs md:min-w-[300px] min-w-[150px] relative gap-4">
          <div className="flex justify-center items-center">
            <img src={circle1} alt="Feature icon" className="w-full h-full" />
          </div>
          <p className="font-normal md:font-semibold text-[16px] md:text-lg text-center mt-2">50 – 800 Quality Leads Daily</p>
        </div>
        <div className="flex flex-col items-center max-w-xs md:min-w-[300px] min-w-[150px] relative gap-4">
          <div className="flex justify-center items-center">
            <img src={circle3} alt="Feature icon" className="w-full h-full" />
          </div>
          <p className="font-normal md:font-semibold text-[16px] md:text-lg text-center mt-2">50 – 800 Quality Leads Daily</p>
        </div>
        <div className="flex flex-col items-center max-w-xs md:min-w-[300px] min-w-[150px] relative gap-4">
          <div className="flex justify-center items-center">
            <img src={circle1} alt="Feature icon" className="w-full h-full" />
          </div>
          <p className="font-normal md:font-semibold text-[16px] md:text-lg text-center mt-2">50 – 800 Quality Leads Daily</p>
        </div>
        <div className="flex flex-col items-center max-w-xs md:min-w-[300px] min-w-[150px] relative gap-4">
          <div className="flex justify-center items-center">
            <img src={circle3} alt="Feature icon" className="w-full h-full" />
          </div>
          <p className="font-normal md:font-semibold text-[16px] md:text-lg text-center mt-2">50 – 800 Quality Leads Daily</p>
        </div>
        <div className="flex flex-col items-center max-w-xs md:min-w-[300px] min-w-[150px] relative gap-4">
          <div className="flex justify-center items-center">
            <img src={circle1} alt="Feature icon" className="w-full h-full" />
          </div>
          <p className="font-normal md:font-semibold text-[16px] md:text-lg text-center mt-2">50 – 800 Quality Leads Daily</p>
        </div>
        <div className="flex flex-col items-center max-w-xs md:min-w-[300px] min-w-[150px] relative gap-4">
          <div className="flex justify-center items-center">
            <img src={circle1} alt="Feature icon" className="w-full h-full" />
          </div>
          <p className="font-normal md:font-semibold text-[16px] md:text-lg text-center mt-2">50 – 800 Quality Leads Daily</p>
        </div>
        <div className="flex flex-col items-center max-w-xs md:min-w-[300px] min-w-[150px] relative gap-4">
          <div className="flex justify-center items-center">
            <img src={circle3} alt="Feature icon" className="w-full h-full" />
          </div>
          <p className="font-normal md:font-semibold text-[16px] md:text-lg text-center mt-2">50 – 800 Quality Leads Daily</p>
        </div>
      </div>
    </section>
  )
}
export default Features