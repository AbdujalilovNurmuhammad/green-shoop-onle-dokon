import gardenCare from "../../../assets/gardenCare.png";
import plant from "../../../assets/plant.png";
import watering from "../../../assets/watering.png";

type FooterService = {
  img?: string;
  title: string;
  desc?: string;
  type?: string;
};

const services: FooterService[] = [
  {
    img: gardenCare,
    title: "Garden Care",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: plant,
    title: "Plant Renovation",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: watering,
    title: "Watering Garden",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    // newsletter placeholder — rendered differently in the UI
    type: "newsletter",
    title: "Would you like to join newsletters?",
    desc: "We usually post offers and challenges in newsletter. We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!",
  },
];

function FooterCard() {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, idx) => {
          if (item.type === "newsletter") {
            return (
              <div
                key={idx}
                className="flex flex-col items-start gap-4 p-5 bg-transparent"
              >
                <h3 className="font-semibold text-lg text-[#130d0d]">
                  {item.title}
                </h3>

                <div className="w-full">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="enter your email address..."
                      className="flex-1 border border-green-300 rounded-l-md px-3 py-2 text-sm focus:outline-none"
                    />
                    <button className="bg-green-600 text-white px-4 rounded-r-md">Join</button>
                  </div>

                  <p className="text-xs text-[#727272] mt-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          }

          return (
            <div
              key={idx}
              className="flex flex-col items-start gap-4 border border-gray-200 rounded-xl p-5 sm:border-0 sm:p-0 sm:rounded-none"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[60px] h-[60px] object-contain"
              />

              <h3 className="font-semibold text-lg text-[#130d0d]">{item.title}</h3>

              <p className="text-sm text-[#727272] leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FooterCard;
