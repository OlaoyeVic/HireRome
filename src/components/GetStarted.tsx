import ellipses from "../assets/ellipses.svg"

const GetStarted = () => {
  return (
    <section className="bg-[#F68923] py-16 px-6 text-center flex flex-col items-center justify-center relative">
      <h2 className="text-3xl font-bold text-white mb-2">Let's get you Started</h2>
      <p className="my-6 font-normal text-sm md:text-lg text-white">Ready to 10X Your Sales!</p>
      <button className="bg-[#0A5594] py-4 px-8 rounded-[32px] text-white font-bold text-base md:text-lg">Talk to us Now</button>
      <img src={ellipses} alt="ellipses" className="h-24 md:h-3/4 absolute left-0 bottom-0" />
    </section>
  )
}
export default GetStarted