"use client";
import React from "react";
import Banner from "./contents/banner-section";
import PropertListing from "./contents/property-listing";
import PlaceSection from "./contents/place-section";
import SubscribeSection from "./contents/subscribe-section";
import Testimonials from "./contents/testimonial-section/testimonials";
import BlogPost from "./contents/blog-seciton";
import CalculatorSection from "./contents/calculator-section/calculator-section";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PropertListing />
      <PlaceSection />
      <SubscribeSection />
      <Testimonials />
      <CalculatorSection />
      <BlogPost />
    </div>
  );
};

export default HomePage;
