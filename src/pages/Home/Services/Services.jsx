import serviceIcon from '../../../assets/service.png'
const Services = () => {

    const services = [
        {
            id: 1,
            icon: serviceIcon,
            title: 'Express  & Standard Delivery',
            description: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.'
        },
        
        {
            id: 2,
            icon: serviceIcon,
            title: 'Nationwide Delivery',
            description: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.'
        },
        {
            id: 3,
            icon: serviceIcon,
            title: 'Fulfillment Solution',
            description: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.'
        },
        {
            id: 4,
            icon: serviceIcon,
            title: 'Cash on Home Delivery',
            description: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.'
        },
        {
            id: 5,
            icon: serviceIcon,
            title: 'Corporate Service / Contract In Logistics',
            description: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.'
        },
        {
            id: 6,
            icon: serviceIcon,
            title: 'Parcel Return',
            description: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.'
        },

    ]
    return (
        <div className="bg-[#03373D] rounded-xl text-center">
            <div className='sectionStyle'>
                <h2 className="sectionTitle my-5 text-white">Our Services</h2>
            <p className="w-2xl text-white mx-auto">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 p-2'>
                {services.map(service => (
                    <div key={service.id} className="bg-[#ffffff] text-black p-5 rounded-lg my-5 duration-300 hover:bg-[#CAEB66] hover:text-black">
                        <img src={service.icon} alt={service.title} className='mx-auto'/>
                        <h3 className="text-xl font-bold my-3 ">{service.title}</h3>
                        <p className="">{service.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Services;