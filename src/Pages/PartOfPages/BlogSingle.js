import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { varent } from "../../transition";
import TitleOfPages from "../../components/TitleOfPages";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faX } from "@fortawesome/free-solid-svg-icons";
import SeeWhatIsGoingOn from "../Home/components/SeeWhatIsGoingOn";

const variants = {
  focus: {
    border: "2px solid red",
  },
};

function BlogSingle() {

  useEffect(() => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  }, []);


  let data = [
    {
      img_url: "./images/blog1.jpg",
      title: "Best free Web templates",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img_url: "./images/blog2.jpg",
      title: "Skills to become a Designer",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img_url: "./images/blog3.jpg",
      title: "How to make 404 error page?",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
  ];


  const dataComments = [
    {
      imgOfPerson: "./images/team1.png",
      name: "ahmed youssef",
      date: "apr 3, 2024 at 11:00 am",
      commentText:
        "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus ipsum bibendum eu nec purus quis tempor dolor set. Sed , quis.",
      imgOfPersonReplyComment: "",
      nameOfReplyComment: "",
      dateOfReplyComment: "",
      commentTextOfReplyComment: "",
    },
    {
      imgOfPerson: "./images/team3.png",
      name: "mohamed ahmed",
      date: "apr 3, 2024 at 12:34 pm",
      commentText:
        "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus ipsum bibendum eu nec purus quis tempor dolor set. Sed , quis.",
      imgOfPersonReplyComment: "./images/team2.png",
      nameOfReplyComment: "omar adel",
      dateOfReplyComment: "apr 3, 2024 at 1:51 am",
      commentTextOfReplyComment:
        "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus ipsum bibendum eu nec purus quis tempor dolor set. Sed , quis.",
    },
  ];

  return (
    <motion.div className="dark:bg-[#31363F]" variants={varent} initial="hidden" animate="show" exit="exit">
      <TitleOfPages>
        <p className="history text-white ">Apr 3, 2024</p>
        <p className="author capitalize font-semibold text-red-500">omar adel</p>
        <p className="text-white">
          <FontAwesomeIcon className="" icon={faHeart} /> 3 likes
        </p>
        <p className="text-white">
          <FontAwesomeIcon icon={faComment} /> 3 comments
        </p>
      </TitleOfPages>
      <div className="container mx-auto smT0:px-5 px-3">
        <div className="post py-[50px]">
          <div className="partOne">
            <img className=" block max-h-[500px] mx-auto rounded" src="./images/blogsingle.jpg" alt="" />
            <div className="first title mt-5 max-w-[800px] mx-auto">
              <h2 className="text-xl font-bold dark:text-[#eee]">
                It is a unified mulipurpose theme with tons of options, features, innovative tools, high-quality images, top-notch plugins and many
                other elemets.
              </h2>
              <p className="mt-5 text-[#777] ">
                Fusce faucibus ante vitae justo efficitur elementum. Donec et ipsum faucibus arcu ipsum elementum, luctus justo. ac purus semper.
                Fusce faucibus ante vitae justo efficitur sed et elementum. Donec ipsum faucibus arcu elementum, luctus justo. ac purus semper. Fusce
                faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus arcu. The first step is clearly identifying which goals you want
                to achieve. sapien mauris vestibulum diam, a iaculis magna urna in dolor.
              </p>
              <p className="mt-5 text-[#777] ">
                The first step is clearly identifying which goals you want to achieve. Fusce faucibus ante vitae justo efficitur elementum. Donec
                ipsum faucibus arcu elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum
                faucibus arcu elementum, luctus justo. ac purus semper."
              </p>
            </div>
          </div>
          <div className="partTwo">
            <div className="first title mt-5 max-w-[800px] mx-auto">
              <div className="title bg-[#eee] dark:bg-[#222831] p-3 rounded-xl border-l-2 border-red-500">
                <h2 className="text-xl font-bold dark:text-[#eee]">
                  Great reflection of your brand be achieved by top designers. Each of our projects is developed and implemented to life according to
                  all your requirements and exclusive wishes.
                </h2>
                <span className="block mt-3 font-semibold capitalize text-[#777]">- omar adel</span>
              </div>
              <p className="my-5 text-[#777] ">
                Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus arcu elementum, luctus justo. ac purus semper. Fusce
                faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum. Donec ipsum faucibus arcu
                elementum. sapien mauris vestibulum diam, a iaculis magna urna in dolor.
              </p>
              <div className="text-with-image flex gap-3 xsm:flex-col">
                <img className="w-[400px] mx-auto rounded-xl" src="./images/blog3.jpg" alt="blog-3" />
                <p className=" text-[#777]">
                  Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus arcu elementum, luctus justo. ac purus semper. Fusce
                  faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum. Donec ipsum faucibus arcu
                  elementum. sapien mauris vestibulum diam, a iaculis magna urna in dolor.
                </p>
              </div>
            </div>
          </div>

          <div className="partThree">
            <div className="title mt-5 max-w-[800px] mx-auto">
              <div className="title bg-[#eee] dark:bg-[#222831] p-3 rounded-xl border-l-2 border-red-500">
                <h2 className="text-xl font-bold dark:text-[#eee]">Practice Safe Design. Always Use a Strategy.</h2>
              </div>
              <p className="my-5 text-[#777] ">
                Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus arcu elementum, luctus justo. ac purus semper. Fusce
                faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum. Quisque sagittis lacus eu
                lorem sodalesd enean adipiscing. sapien mauris diam, a iaculis magna urna in dolor.
              </p>
              <ul className="ul-text list-disc list-inside pl-4 text-[#777] space-y-[10px] text-sm">
                <li>Quisque sagittis lacus eu lorem sodalesd enean adipiscing.</li>
                <li>Donec ipsum faucibus arcu elementum, luctus justo.</li>
                <li>Lorem ipsum dolor sit, amet consectetur elit. Expedita qui fugit quod.</li>
              </ul>
            </div>
          </div>

          <div className="partFour mt-5">
            <div className="title mt-5 max-w-[800px] mx-auto">
              <div className="title bg-[#eee] dark:bg-[#222831] my-5 p-3 rounded-xl border-l-2 border-red-500">
                <h2 className="text-xl font-bold dark:text-[#eee]">
                  There are No Limits to define your Style. It will adapt your site automatically
                </h2>
              </div>
              <img className=" block max-h-[500px] mx-auto rounded" src="./images/image.jpg" alt="" />
              <div className="first title mt-5 max-w-[800px] mx-auto">
                <p className="mt-5 text-[#777] ">
                  Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus arcu elementum, luctus justo. ac purus semper. Fusce
                  faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum. Quisque sagittis lacus eu
                  lorem sodalesd enean adipiscing. sapien mauris diam, a iaculis magna urna in dolor.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="partFour mt-5">
            <div className="title mt-5 max-w-[800px] mx-auto">
              <div className="title bg-[#eee] dark:bg-[#222831] my-5 p-3 rounded-xl border-l-2 border-red-500">
                <h2 className="text-xl font-bold dark:text-[#eee]">Visitors will be able to enter the site from mobile phone or stationery PC.</h2>
              </div>
              <p className="mt-5 text-[#777] ">
                Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus arcu elementum, luctus justo. ac purus semper. Fusce
                faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus. Donec ipsum faucibus arcu elementum. Quisque sagittis lacus eu
                lorem sodalesd enean adipiscing. sapien mauris diam, a iaculis magna urna in dolor.
              </p>
            </div>
          </div>
        </div>
        <div className="infoOfPost py-[50px] flex smT0:flex-col smT0:gap-y-4 justify-between items-center mt-5 max-w-[800px] mx-auto">
          <div className="tags flex xsm:flex-col dark:text-[#eee] gap-2 capitalize items-center">
            <h3 className="text-xl font-bold">tags:</h3>
            <div className="nameOfTags flex gap-3 text-center">
              <span className="block p-[3px] dark:hover:bg-[#222831]  rounded-lg border border-[#eee] hover:bg-[#eee] transition cursor-pointer">design</span>
              <span className="block p-[3px] dark:hover:bg-[#222831]  rounded-lg border border-[#eee] hover:bg-[#eee] transition cursor-pointer">web development</span>
              <span className="block p-[3px] dark:hover:bg-[#222831]  rounded-lg border border-[#eee] hover:bg-[#eee] transition cursor-pointer">web studio</span>
            </div>
          </div>
          <div className="soical-media-share dark:text-[#eee] flex xsm:flex-col gap-2 capitalize items-center">
            <h3 className="text-xl font-bold">share:</h3>
            <div className="icons flex gap-3">
              <div className="flex justify-center dark:hover:bg-[#222831]  items-center w-[20px] h-[20px] rounded-full border border-[#eee] hover:bg-[#eee] transition cursor-pointer p-4 ">
                <FontAwesomeIcon className="block" icon={faFacebookF} />
              </div>
              <div className="flex justify-center dark:hover:bg-[#222831]  items-center w-[20px] h-[20px] rounded-full border border-[#eee] hover:bg-[#eee] transition cursor-pointer p-4 ">
                <FontAwesomeIcon className="block" icon={faX} />
              </div>
              <div className="flex justify-center dark:hover:bg-[#222831]  items-center w-[20px] h-[20px] rounded-full border border-[#eee] hover:bg-[#eee] transition cursor-pointer p-4 ">
                <FontAwesomeIcon className="block" icon={faGooglePlusG} />
              </div>
              <div className="flex justify-center dark:hover:bg-[#222831]  items-center w-[20px] h-[20px] rounded-full border border-[#eee] hover:bg-[#eee] transition cursor-pointer p-4 ">
                <FontAwesomeIcon className="block" icon={faPinterestP} />
              </div>
            </div>
          </div>
        </div>

        <div className="button-previous-post max-w-[800px] mx-auto dark:text-[#eee] py-[50px]">
          <a href="#" className="flex items-center border-y-2 py-3">
            <FontAwesomeIcon className="block" icon={faArrowLeft} />
            <p className="text-lg font-bold capitalize ml-5">previous post</p>
          </a>
        </div>

        <div className="author max-w-[800px] mx-auto py-[50px]">
          <div className="flex xsm:flex-col xsm:items-center gap-5 bg-[#26243C] rounded-xl p-3">
            <div className=" bg-white p-3 overflow-hidden rounded-full w-[200px] h-[200px]">
              <img className="w-full h-full translate-y-3 object-contain " src="./images/team2.png" alt="" />
            </div>
            <div className="text w-[calc(100%-200px)] xsm:w-full xsm:text-center">
              <h2 className="text-xl text-[#eee] font-bold capitalize">omar adel</h2>
              <p className="mt-3 text-[#eee] leading-[1.9] text-sm tracking-[1px]">
                I am an Architect, Designer, Engineer, Artist, Playwright, and Blog writer. Sed ultricies nec purus quis tempor. Phasellus ipsum
                bibendum eu nec purus quis tempor dolor set.
              </p>
              <button className="btn bg-transparent xsm:mx-auto border border-red-500">follow</button>
            </div>
          </div>
        </div>

        <div className="comments max-w-[800px] mx-auto dark:text-[#eee]">
          <h2 className="capitalize text-2xl font-bold ">recent comments {"(2)"}</h2>
          {dataComments.map((comment, index) => {
            return (
              <div key={index} className={`comment  border border-red-500 rounded p-5 mt-5 mx-3 `}>
                <div className="flex xsm:flex-col  gap-5">
                  <div className="w-[60px] bg-white h-[60px] overflow-hidden rounded-full">
                    <img className="w-full h-full object-cover rounded-full" src={comment.imgOfPerson} alt="" />
                  </div>
                  <div className="text relative w-[calc(100%-100px)] xsm:w-full">
                    <h3 className="text-lg font-bold capitalize">{comment.name}</h3>
                    <p className="text-[#777] italic">{comment.date}</p>
                    <p className="text-sm leading-[1.5]">{comment.commentText}</p>
                    <a className="absolute top-[0px] right-[10px] capitalize text-red-500 font-bold" href="#form">
                      reply
                    </a>
                  </div>
                </div>
                {comment.commentTextOfReplyComment.length > 1 ? (
                  <div className="comment-reply  flex pl-10 rounded p-5 mt-5 mx-3 ">
                    <div className="flex gap-5 xsm:flex-col ">
                      <div className="w-[60px] bg-white h-[60px] overflow-hidden rounded-full">
                        <img className="w-full h-full object-cover rounded-full" src={comment.imgOfPersonReplyComment} alt="" />
                      </div>
                      <div className="text  relative w-[calc(100%-100px)] xsm:w-full">
                        <h3 className="text-lg font-bold capitalize">{comment.nameOfReplyComment}</h3>
                        <p className="text-[#777] italic">{comment.dateOfReplyComment}</p>
                        <p className="text-sm leading-[1.5]">{comment.commentTextOfReplyComment}</p>
                        <a className="absolute top-[0px] right-[10px] capitalize text-red-500 font-bold" href="#form">
                          reply
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>

        <div id="form" className="form max-w-[800px] mt-5 mx-auto">
          <h2 className=" capitalize text-2xl dark:text-[#eee] font-bold">leave a reply</h2>

          <form className=" mt-5 grid grid-cols-4 xsm:grid-rows-5 grid-rows-4 gap-3">
            <motion.input
              variants={variants}
              whileFocus="focus"
              className="bg-gray-50 dark:bg-[#222831] dark:text-white transition duration-300 border-2 col-span-2 xsm:col-span-4 rounded placeholder:capitalize placeholder:font-semibold p-2 focus:outline-none"
              type="text"
              required
              placeholder="your name"
            />
            <motion.input
              className="bg-gray-50 dark:bg-[#222831] dark:text-white transition duration-300 border-2 col-span-2 xsm:col-span-4 rounded placeholder:capitalize placeholder:font-semibold p-2 focus:outline-none"
              type="email"
              variants={variants}
              whileFocus="focus"
              required
              placeholder="your email"
            />
            <motion.textarea
              className="bg-gray-50 dark:bg-[#222831] dark:text-white  transition duration-300 border-2 col-span-4 row-span-2 rounded     placeholder:capitalize placeholder:font-semibold p-2 resize-none focus:outline-none"
              variants={variants}
              whileFocus="focus"
              placeholder="your comment"
            />
            <input className="btn col-start-4 cursor-pointer xsm:col-span-4 col-end-4" type="submit" value="send" />
          </form>
        </div>
        <div className="max-w-[800px] mx-auto ">
          
<SeeWhatIsGoingOn data={data}/>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogSingle;
