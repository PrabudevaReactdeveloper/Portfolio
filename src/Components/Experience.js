import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arrow, burger } from "../Sources";
export default function Experience({ ScrollRef }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const array = [
    {
      id: 0,
      title: "Frontend Developer at Illusion Spotline",
      date: "May 2023 - Present",
      content: [
        `Led a team of frontend developers in the redesign of the company's flagship product, resulting in a 30% increase in user satisfaction.`,
        `Implemented advanced CSS animations and transitions to enhance the overall user experience.`,
        `Collaborated with UX/UI designers to translate wireframes and mockups into responsive and interactive web applications`,
        `Introduced and integrated Vue.js into the tech stack, improving code maintainability and development efficiency.`,
      ],
    },
    {
      id: 1,
      title: "Web Developer at Illusion Spotline",
      date: "May 2023 - Present",
      content: [
        `Developed and maintained client websites, ensuring high-quality standards and timely project delivery.`,
        `Implemented SEO best practices, leading to a 25% increase in organic search traffic for key clients.`,
        `Worked closely with the design tearn to create pixel-perfect, cross-browser- compatible web pages.`,
        `Conducted code reviews and mentored junior developers in adopting best coding practices.`,
      ],
    },
    // {
    //     id: 2,
    //     title: 'Anroid Developer at Illusion Spotline',
    //     date: 'May 2023 - Present',
    //     content: [`Assisted in the development of a new e-commerce platform, contributing to the implementation of frontend features using React.js.`,
    //         `Conducted performance optimization tasks, resulting in a 15% improvement in page load times.`, `Participated in daily stand-up meetings and collaborated with senior developers to troubleshoot and resolve coding issues.`,
    //         `Gained hands-on experience with version control systems, specifically Git, in a collaborative development environment.`
    //     ]
    // }
  ];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute top-[50%] cursor-pointer rotate-180 rounded-md border-dashed border border-ActiveColor 2xl:-right-[40px] -right-[30px] "
        onClick={onClick}
      >
        <img className="w-8 h-8" src={arrow} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute top-[50%] cursor-pointer rounded-md border-dashed border border-ActiveColor 2xl:-left-[40px]  -left-[30px] "
        onClick={onClick}
      >
        <img className="w-8 h-8" src={arrow} />
      </div>
    );
  }
  return (
    <div ref={ScrollRef} className="w-full  bg-PrimaryColor">
      <div className="lg:max-w-[1280px] m-auto w-full py-16 px-3">
        
        <h3>Work Experience</h3>
        <div className="w-full mt-10">
          <Slider {...settings}>
            {array.map((e, index) => (
              <div key={index}>
                <div className="border border-ActiveColor/80 bg-ActiveColor/5 h-[450px] mx-3 flex flex-col  rounded-lg p-5">
                  <h4>{e.title}</h4>
                  <div className="bg-ActiveColor rounded-md mt-4 w-max px-5 py-1">
                    <h6>{e.date}</h6>
                  </div>
                  <div className="lg:px-5 mt-5">
                    {e.content.map((e1, indx) => (
                      <div key={indx} className="flex flex-row mb-5 space-x-3">
                        <div className="p-1 w-max h-max mt-[5px] rounded-full bg-SecondaryColor" />
                        <h5>{e1}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
