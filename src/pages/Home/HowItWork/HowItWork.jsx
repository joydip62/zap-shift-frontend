import { TbTruckDelivery } from "react-icons/tb";


const HowItWork = () => {
    const datas = [
        {
            id: 1,
            icon: <TbTruckDelivery />,
            title: 'Booking Pick & Drop',
            description: 'From personal packages to business shipments — we deliver on time, every time.'
        },
        
        {
            id: 2,
            icon: <TbTruckDelivery />,
            title: 'Cash On Delivery',
            description: 'From personal packages to business shipments — we deliver on time, every time.'
        },
        {
            id: 3,
            icon: <TbTruckDelivery />,
            title: 'Delivery Hub',
            description: 'From personal packages to business shipments — we deliver on time, every time.'
        },
        {
            id: 4,
            icon: <TbTruckDelivery />,
            title: 'Booking SME & Corporate',
            description: 'From personal packages to business shipments — we deliver on time, every time.'
        },

    ]
    return (
        <div className="sectionStyle">
            <h2 className="sectionTitle my-5">How it Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {datas.map(data => (
                    <div key={data.id} className="p-4 rounded-lg space-y-2 bg-white">
                        <div className="text-4xl">{data.icon}</div>
                        <h3 className="text-xl font-bold">{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWork;