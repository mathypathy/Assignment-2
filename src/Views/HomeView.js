import React from "react";
import BannerTwoSection from "../Sections/BannerTwo/BannerTwoSection";
import CompanyInfoSection from "../Sections/CompanyInfo/CompanyInfoSection";
import ProductGridSection from "../Sections/ProductGridToHomeView/ProductGridSection";
import FooterSection from "../Sections/Footer/FooterSection";
import MainMenuSection from "../Sections/MainMenu/MainMenuSection";
import ShowCaseSection from "../Sections/ShowCase/ShowCaseSection";
import StartBannerSection from "../Sections/StartBanner/StartBannerSection";
import FlashSaleSection from "../Sections/FlashSale/FlashSaleSection";
import OffSalesSection from "../Sections/OffSales/OffSalesSection";
import SpecialitySection from "../Sections/Specialitys/SpecialitySection";

const HomeView = () => {
  return (
    <div>
      <MainMenuSection />
      <ShowCaseSection />
      <StartBannerSection />
      <ProductGridSection title="Featured Products" />
      <BannerTwoSection />
      <SpecialitySection />
      <FlashSaleSection title="Flash Sales"  />
      <OffSalesSection  />
      <CompanyInfoSection />
      <FooterSection />
    </div>
  );
};

export default HomeView;
