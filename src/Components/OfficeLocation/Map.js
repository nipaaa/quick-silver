import React from "react";

const Map = () => {
  return (
    <div className="mb-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12591.330969590024!2d-122.48931173015919!3d37.91097198068033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859b318bb56f43%3A0x944030c6761081f8!2sParadise%20Cay%2C%20CA%2094920%2C%20USA!5e0!3m2!1sen!2sbd!4v1701497974315!5m2!1sen!2sbd"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
