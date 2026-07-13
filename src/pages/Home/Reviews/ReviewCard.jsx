
import reviewQuote from "../../../assets/reviewQuote.png";

const ReviewCard = ({review}) => {
    return (
        <div className="w-90 bg-white p-8 rounded-xl space-y-3 mx-auto mt-10">
              <img src={reviewQuote} alt="Review Quote" />
              <p>{review.review}</p>
              <div className="flex items-center gap-5 border-t-2 border-dotted pt-3">
                <div className="w-10 h-10">
                  <img
                    src={review.user_photoURL}
                    alt="Review profile"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h5>{review.userName}</h5>
                  <p>{review.user_email}</p>
                </div>
              </div>
            </div>
    );
};

export default ReviewCard;