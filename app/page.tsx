import Popup, { Props as PopupProps } from "@/components/popup";

interface PopupData extends PopupProps {
  pos?: [number, number]
}

export default function Home() {

  const popups: PopupData[] = [
    {
      pos: [30, 51],
      title: "PSD Petrosetco Warehouse (Wholesaler)",
      points: ['Distance from Hi-Tech Park: 1,673 km',
        'Located within 10km radius of consumer electronic stores, reducing km/delivery',
        <p>Located within 10km radius of consumer electronic stores, <span className="font-bold">reducing km/delivery</span></p>,
        <p><span className="font-bold">Distribution 1:</span> Ships product to retailers</p>,
        <p><span className="font-bold">Distribution 2:</span> Ships products to end-consumers via E-Commerce platforms</p>]
    },
    {
      pos: [10, 43],
      title: "E-Commerce Websites Distribution",
      points: [
        'Customers order online via platforms like Shopee, TikTokShop, Lazada...',
        'PSD Petrosetco will distribute these products to end-consumers.',
        'Delivery done through Electric Bikes – reducing CO2 emissions'
      ]
    },
    {
      pos: [76, 62],
      title: "Electric Bikes for Last-Mile Delivery",
      points: [
        'Through XanhSM Electric Bikes Transportation provider.',
        <p>Electric Bikes release 2.2 – 3 grams of CO2 per passenger kilometer. <span className="font-bold">94% less emissions than fuel-based motorcycles.</span></p>,
      ]
    }

  ]

  return (
    <main className="flex flex-col w-full h-fit justify-center items-center p-32">
      <div className="relative w-[1024px] z-[100]">
        <img
          className="w-full"
          src="/RevisedAnimation.gif"
          alt="Revised Logistic Animation"
        />

        {popups.map((p, idx) => (
          <div key={idx} className="absolute size-fit" style={{
            // left: '50%',
            // top: '0%',
            left: `${p.pos?.[0] ?? 0}%`,
            top: `${p.pos?.[1] ?? 0}%`,
            transform: 'translate(-50%, -100%)', // center above pin
          }}>
            <Popup direction="D" {...p} />
          </div>
        ))}
      </div>
    </main>
  );
}
