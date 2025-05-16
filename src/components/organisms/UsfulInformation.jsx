import SectionText from "../molecules/SectionText";
import React, { useState, useRef, useEffect } from "react";

const UsfulInformation = () => {
  const events = [
    {
      id: 1,
      date: "Sunday, 25 September 2018",
      time: "12:00",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident corrupiton and givnes of freedom to live our dream bring lorden de mirdonum demos mosunmentom",
    },
    {
      id: 2,
      date: "Monday, 26 September 2018",
      time: "14:30",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident corrupiton and givnes of freedom to live our dream bring lorden de mirdonum demos mosunmentom",
    },
    {
      id: 3,
      date: "Tuesday, 27 September 2018",
      time: "10:15",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident corrupiton and givnes of freedom to live our dream bring lorden de mirdonum demos mosunmentom",
    },
    {
      id: 4,
      date: "Tuesday, 27 September 2018",
      time: "10:15",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident corrupiton and givnes of freedom to live our dream bring lorden de mirdonum demos mosunmentom",
    },
    {
      id: 5,
      date: "Tuesday, 27 September 2018",
      time: "10:15",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident corrupiton and givnes of freedom to live our dream bring lorden de mirdonum demos mosunmentom",
    },
    {
      id: 6,
      date: "Tuesday, 27 September 2018",
      time: "10:15",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident corrupiton and givnes of freedom to live our dream bring lorden de mirdonum demos mosunmentom",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.style.maxHeight =
          openIndex === idx ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  return (
    <div className="useful-info">
      <div className="useful-info-content section-content">
        <SectionText
          tag1="h3"
          tag2="h2"
          tag3="p"
          text1="useful information"
          text2="Upcoming Events"
          text3="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
        />

        <div className="accordion">
          {events.map((event, index) => (
            <div key={event.id} className="accordion-item">
              <div
                className="header"
                onClick={() => toggleAccordion(index)}
                style={{ cursor: "pointer" }}
              >
                <p>{openIndex === index ? "↑" : "↓"}</p>
                <p>{event.date}</p>
                <div className="time">
                  <p>{event.time}</p>
                </div>
              </div>

              <div
                className="content"
                ref={(el) => (contentRefs.current[index] = el)}
              >
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsfulInformation;
