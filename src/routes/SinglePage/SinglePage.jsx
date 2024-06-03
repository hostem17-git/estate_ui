import Slider from "../../components/slider/Slider";
import "./SinglePage.scss";
import { singlePostData, userData } from "../../lib/dummyData";

function SinglePage() {
  const postData = singlePostData;
  const user = userData;
  return (
    <div className="SinglePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={postData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{postData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{postData.address}</span>
                </div>
                <div className="price">{postData.price}</div>
              </div>
              <div className="user">
                <img src={user.img} alt="" />
                <span>{user.name}</span>
              </div>
            </div>
            <div className="bottom">{postData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default SinglePage;
