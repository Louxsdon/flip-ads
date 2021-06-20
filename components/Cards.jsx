import { CgShapeCircle } from "react-icons/cg";
import { MdLocationOn, MdRefresh, MdFavorite } from "react-icons/md";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function ProductCard({ name, image, category, location }) {
  return (
    <>
      <div className="card hover:shadow-lg cursor-pointer">
        <div className="relative overflow-hidden w-full card-header h-32 bg-white">
          <img className="w-auto m-auto object-fit h-full" src={image} alt="" />
          {/* <h3 className="w-9/12 text-center absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 font-extrabold font-serif uppercase text-2xl text-gray-300">
            Item Image
          </h3> */}
        </div>
        <div className="card-body space-y-2 text-sm">
          <div className="flex justify-between text-gray-400">
            <div className="flex items-center">
              <CgShapeCircle className="" />
              <h4>{category}</h4>
            </div>
            <div className="flex items-center">
              <MdLocationOn className="" />
              <h4>{location}</h4>
            </div>
          </div>
          <h4 className="font-semibold">{name}</h4>
          <div className="flex items-center justify-between text-gray-400">
            <button className="btn primary-alt px-2">Call for price</button>
            <div className="flex items-center space-x-2">
              <MdRefresh />
              <MdFavorite className="text-red-200" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function TeamCard({ avatar, name, post }) {
  return (
    <div className="card py-10 px-5 shadow-md space-y-6 text-center rounded border-b-4 border-indigo-500 transform hover:scale-110 transition ease-in duration-500">
      <div className="img w-24 m-auto rounded-full overflow-hidden border-white border-4 shadow-md">
        <img src={avatar} alt="" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-400 uppercase">{post}</p>
        <div className="mt-5 flex space-x-6 items-center justify-center text-gray-400">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}
