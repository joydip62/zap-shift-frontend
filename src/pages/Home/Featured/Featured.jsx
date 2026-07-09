import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";

const Featured = () => {
  return (
    <div className="sectionStyle space-y-6 border-y-3 border-dotted pt-6 rounded-0">
      <div className="bg-white p-5 rounded-xl flex justify-around items-center gap-6 ">
        <img src={liveTracking} alt="live-tracking" />
        <div className="border-l-4 border-dotted pl-5">
          <h4>Live Parcel Tracking</h4>
          <p>
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl flex justify-around items-center gap-6 ">
        <img src={safeDelivery} alt="safe-delivery" />
        <div className="border-l-4 border-dotted pl-5">
          <h4>Safe Delivery</h4>
          <p>
            Experience secure and reliable parcel delivery with our robust
            safety measures. Your packages are handled with care from pick-up to
            final destination.
          </p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl flex justify-around items-center gap-6 ">
        <img src={safeDelivery} alt="safe-delivery" />
        <div className="border-l-4 border-dotted pl-5">
          <h4>24/7 Call Center Support</h4>
          <p>
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
