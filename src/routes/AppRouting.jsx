import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Home, Portfolio, Blog, Careers, Contactus, Salesforce, CloudSolutions, PrivacyPolicy, TermsOfUse, SiteMap, IOTDevelopment, Top4Restaurant, BusinessesPartnerWithPragetx, StaffAugmentation, DigitalMarketingAndBranding, MacbookAirpodNewcomer, OnlineStockTradingApp, WebsiteOnLimitedBudget, FourSeoTools, } from '../Pages';
import { About, HowWeWork, BecomePartner, ReferralPrograms, InternshipTraining, } from '../Pages';
import { WebAppDevelopment, SoftwareDevelopment, MobileAppDevelopment, UiUxDesigning, QaTesting, EnterPriseItSolution, Devops, AiMlDevelopment, BusinessDevelopment, DigitalMarketing } from '../Pages';
import { HireIOSAppDevelopers, HireAndroidAppDevelopers, HireNodeJsDeveloper, HireReactJsDeveloper, HireReactNativeDeveloper, HireFlutterDeveloper, HireAngularDeveloper, HireDotNetDeveloper, HireUIUXDeveloper } from '../Pages';
import { HungryVeels, FoloApp, ElcTutorial, Neogrowth, Schoolowl, ZenCoastUniversity, NepalGovernment, Ayuvani, NftMarketplace, Scrapbook, FamilyHives, Urnest, Keepcoolrecs } from '../Pages';
import NotFound from '../Pages/NotFound/NotFound';

const AppRouting = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/how-we-work' element={<HowWeWork />} />
        <Route path='/referral-programs' element={<ReferralPrograms />} />
        <Route path='/become-partner' element={<BecomePartner />} />
        <Route path='/internship-and-training' element={<InternshipTraining />} />
        <Route path='/web-app-development' element={<WebAppDevelopment />} />
        <Route path='/software-development' element={<SoftwareDevelopment />} />
        <Route path='/hire-ios-app-developers' element={<HireIOSAppDevelopers />} />
        <Route path='/mobile-app-development' element={<MobileAppDevelopment />} />
        <Route path='/ui-ux-designing' element={<UiUxDesigning />} />
        <Route path='/qa-and-testing' element={<QaTesting />} />
        <Route path='/enterprise-it-solutions' element={<EnterPriseItSolution />} />
        <Route path='/cloud-Solutions' element={<CloudSolutions />} />
        <Route path='/devops' element={<Devops />} />
        <Route path='/ai-ml-development' element={<AiMlDevelopment />} />
        <Route path='/business-intelligence-and-analytics-services' element={<BusinessDevelopment />} />
        <Route path='/digital-marketing' element={<DigitalMarketing />} />
        <Route path='/hire-android-app-developers' element={<HireAndroidAppDevelopers />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact-us' element={<Contactus />} />


        <Route path='/hire-nodejs-developers' element={<HireNodeJsDeveloper />} />
        <Route path='/hire-reactjs-developers' element={<HireReactJsDeveloper />} />
        <Route path='/hire-react-native-developers' element={<HireReactNativeDeveloper />} />
        <Route path='/hire-flutter-developers' element={<HireFlutterDeveloper />} />
        <Route path='/hire-angular-developers' element={<HireAngularDeveloper />} />
        <Route path='/hire-dot-net-developers' element={<HireDotNetDeveloper />} />
        <Route path='/hire-ui-ux-designers' element={<HireUIUXDeveloper />} />
        <Route path='/salesforce' element={<Salesforce />} />
        <Route path='/hungry-veels' element={<HungryVeels />} />
        <Route path='/folo-app' element={<FoloApp />} />
        <Route path='/elc-tutorial' element={<ElcTutorial />} />
        <Route path='/neogrowth' element={<Neogrowth />} />
        <Route path='/schoolowls' element={<Schoolowl />} />
        <Route path='/zen-coast-university' element={<ZenCoastUniversity />} />
        <Route path='/nepal-government' element={<NepalGovernment />} />
        <Route path='/ayuvani' element={<Ayuvani />} />
        <Route path='/nft-marketplace' element={<NftMarketplace />} />
        <Route path='/scrapbook' element={<Scrapbook />} />
        <Route path='/family-hives' element={<FamilyHives />} />
        <Route path='/urnest' element={<Urnest />} />
        <Route path='/keepcoolrecs' element={<Keepcoolrecs />} />

        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-use' element={<TermsOfUse />} />
        <Route path='/sitemap' element={<SiteMap />} />
        <Route path='/iot-development' element={<IOTDevelopment />} />
        <Route path='/top-4-restaurant-website-development-ui-ux-ideas' element={<Top4Restaurant />} />
        <Route path='/why-should-businesses-partner-with-pragetx-for-agile-it-collaborations' element={<BusinessesPartnerWithPragetx />} />
        <Route path='/how-does-it-staff-augmentation-help-businesses-make-profits' element={<StaffAugmentation />} />
        <Route path='/how-digital-marketing-and-branding-play-a-vital-role-in-growing-your-business' element={<DigitalMarketingAndBranding />} />
        <Route path='/macbook-airpod-newcomer-homepad-mini' element={<MacbookAirpodNewcomer />} />
        <Route path='/how-to-build-an-online-stock-trading-app' element={<OnlineStockTradingApp />} />
        <Route path='/how-to-make-a-website-on-a-limited-budget' element={<WebsiteOnLimitedBudget />} />
        <Route path='/4-seo-tools-that-make-your-life-easier' element={<FourSeoTools />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default AppRouting

