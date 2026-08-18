import { useState } from 'react';
import imgEllipse2 from './assets/46d58b5ba833796db7cd0e75bb6c001d72e283f5.png';
import imgVector from './assets/ac4af83302662b72744ad16598f032d7d297627e.svg';
import imgRectangle from './assets/01dd6679f1814bd0178bdf6516ee916704584950.jpg';
import imgRectangle1 from './assets/f8f0ac87c885546a22c3dc74530878225d3908e7.jpg';
import imgRectangle2 from './assets/64e52de6c96cbd02eaae8127425e1a9c1fef74eb.jpg';
import imgRectangle3 from './assets/cde7dfe826c62b448464dc963685e41c1bc07807.jpg';
import imgImage70 from './assets/3c8469986af4ebdc4d2d6aafe9e2621972c1a1b8.jpg';
import imgImage17 from './assets/eb0ed478985492b13eea377b3e0290f3e5ac680d.jpg';
import imgConvertIntoCircleShape1 from './assets/dcbf3b04955bf49c6d8f971ab5d2337a36fccc5a.jpg';
import imgImage84 from './assets/efc8b7faf078f2cc2c34bef394db296d5f71aa36.jpg';
import imgSparkles from './assets/ae9c595dc85156ca1313a9fc48ccc92d02d482fc.svg';
import imgSparkles1 from './assets/4f4f9ec9edb33cdfcdf230bc7c7932dc131cf86d.svg';
import imgCamera from './assets/1efa29eb714dc8505a71626dbe6ed36a485ce434.svg';
import imgEye from './assets/df36f243d29dc35ac24f19de90e392af7cda7e79.svg';
import imgChevronRight from './assets/a5f7f719d1e17aee3e9e58ee169ea4e0bc663a6f.svg';
import imgSparkles2 from './assets/ee18811f15f38aa8948c13b65b33c8e3d3851791.svg';
import imgGroup633548 from './assets/e20c6f14d1c4b0b6c8f63709ff2f825bc1deff15.svg';
import imgVector1 from './assets/a3e3cfb41b9ae6999acb331a3908756ae61ce7dc.svg';
import imgVector2 from './assets/64298d107f9ad0c77596e085a35fdc7d5a07b1ce.svg';
import imgVector3 from './assets/a5e72fdd0572d34a7c8d559da4aa2b360324b742.svg';
import imgVector4 from './assets/13e9de46777d2867f79de7718ad2d1619e7955e7.svg';
import imgVector5 from './assets/80e34ae834034b64777086831bd80ad964a51981.svg';
import imgVector6 from './assets/dfbc81dc2585d5ede804df9c16126dd0d6e8efbf.svg';
import imgChevronLeft from './assets/f4824100614dd1b6cf84eae9c8da6f8a48ab2c3d.svg';
import imgChevronDownIcon from './assets/e04e3a5524f9f0f65c0c561a0173734f702bfa93.svg';
import imgIcon from './assets/f696eab0ad1295cd8607cf1520528b983c0e768f.svg';
import imgIcon1 from './assets/82c30325d589b50db8e70b6bf233af8456fe0be1.svg';
import imgSparkles3 from './assets/f59f6fe8f5805270aa6b016e89be0fd514fcab66.svg';
import imgItemIcon from './assets/a8973aa3af7cd90c3ccafd424fef60271d0f2b4d.svg';
import imgMaterialSymbolsNewsOutline from './assets/baf1b199be31ab2c507d4e5cbe7463fa709367bb.svg';
import imgMaterialSymbolsEventOutline from './assets/8af9e2ee04259a242d7f0626c743c52393be0f66.svg';
import imgMaterialSymbolsModelTraining from './assets/f9662163e88895ebed30475af1022a035b7da295.svg';
import imgGroup from './assets/dfa7ce697b978eec165789244e6c33414a1c35f6.svg';
import imgMaterialSymbolsPolicyOutline from './assets/6d2e4805f93d67da81e5f50598e766acc21a36bc.svg';
import imgActionIcon from './assets/9620fcb82649ceeb3286e548381e824005d4d764.svg';
import imgActionIcon1 from './assets/9e856fbbd728c88d22ec5739202817a38ed9f713.svg';
import imgActionIcon2 from './assets/2f7b84d41310607ca61c2d85d7722768f47467fd.svg';
import imgActionIcon3 from './assets/f5b7becf79c1367ca0dc4bbbc7ee333cd18368df.svg';
import imgActionIcon4 from './assets/f818ba8fa751d58a861b1e7b4ca85d53f3ab3c05.svg';
import imgLogosMicrosoftTeams from './assets/e1943f33ef98b5d788fa55053f80a57c2fb1ce73.svg';
import imgDeviconJira from './assets/7fea2e7ad3678e9ba2ff35be76011a1dd49b5657.svg';
import imgDeviconSalesforce from './assets/52f61c42b0c53b9cd65e417baa073dcc9483bf9b.svg';
import imgGroup634421 from './assets/9a1a6cc10b213445b2da1da44bbc540f02a7b1be.svg';
import imgGroup634422 from './assets/36b9a9b1eddadb9d9164763879104b0761f905ff.svg';
import imgGroup634423 from './assets/697f403676ffa3a88351902be19ac955a9c7d4dd.svg';
import imgGroup634424 from './assets/5339dd71d1169d4d861d35a354b413fa91d70c50.svg';

function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-40 flex h-16 sm:h-20 w-full items-center justify-between gap-3 border-b border-black/5 bg-white/80 px-4 sm:px-6 lg:px-8 shadow-[0px_2px_3px_0px_rgba(0,0,0,0.1)] backdrop-blur">
      <div className="flex items-center gap-3 sm:gap-5 min-w-0">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Toggle menu"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg hover:bg-black/5 active:bg-black/10 transition-colors"
        >
          <img alt="Menu" className="h-[18px] w-6" src={imgVector} />
        </button>
        <p className="font-logo font-bold text-[0px] leading-none whitespace-nowrap shrink-0">
          <span className="text-[#124b84] text-2xl sm:text-3xl lg:text-[35px] leading-none">W</span>
          <span className="text-[#c74627] text-2xl sm:text-3xl lg:text-[35px] leading-none">intranet</span>
        </p>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <p className="hidden sm:block text-[#0c0c12] text-base lg:text-[20px] whitespace-nowrap">Sara Jacob</p>
        <img alt="Sara Jacob" className="size-9 sm:size-10 rounded-full object-cover" height="40" src={imgEllipse2} width="40" />
      </div>
    </header>
  );
}

function NavIcon({ src, alt = '' }: { src: string; alt?: string }) {
  return <img alt={alt} className="size-5 sm:size-6" src={src} />;
}

function SidebarNavItem({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-[10px] py-2.5 pl-3 pr-3 text-left transition-colors ${
        active ? 'bg-[#dbeafe] text-[#1447e6]' : 'text-[#364153] hover:bg-black/5'
      }`}
    >
      <NavIcon src={icon} />
      <span className="text-base sm:text-[18px] font-normal">{label}</span>
    </button>
  );
}

function QuickLink({ icon, label }: { icon: string; label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-lg border border-black/10 bg-white px-3 py-2 text-left hover:bg-black/5 transition-colors"
    >
      <img alt="" className="size-4 shrink-0" src={icon} />
      <span className="text-[#0a0a0a] text-sm sm:text-base whitespace-nowrap">{label}</span>
    </button>
  );
}

function PinnedApp({ icon, label, iconClassName }: { icon: string; label: string; iconClassName?: string }) {
  return (
    <div className="flex w-[100px] sm:w-[112px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white p-3 py-4">
      <img alt={label} className={iconClassName ?? 'h-8 w-auto'} src={icon} />
      <p className="text-[#0a0a0a] text-sm sm:text-base whitespace-nowrap">{label}</p>
    </div>
  );
}

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed top-16 sm:top-20 z-50 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-[280px] shrink-0 overflow-y-auto border-r border-black/10 bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-2 p-4">
          <SidebarNavItem icon={imgItemIcon} label="Home" active />
          <SidebarNavItem icon={imgMaterialSymbolsNewsOutline} label="News" />
          <SidebarNavItem icon={imgMaterialSymbolsEventOutline} label="Events" />
          <SidebarNavItem icon={imgMaterialSymbolsModelTraining} label="Trainings" />
          <SidebarNavItem icon={imgGroup} label="Photos & Videos" />
          <SidebarNavItem icon={imgMaterialSymbolsPolicyOutline} label="Policies & Docs" />
        </nav>

        <div className="mx-4 border-t border-black/10" />

        <div className="flex flex-col gap-3 p-4">
          <h3 className="text-center text-[18px] text-[#3b3b3b]">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <QuickLink icon={imgActionIcon} label="Request time off" />
            <QuickLink icon={imgActionIcon1} label="Raise IT ticket" />
            <QuickLink icon={imgActionIcon2} label="Submit expense" />
            <QuickLink icon={imgActionIcon3} label="Book meeting room" />
            <QuickLink icon={imgActionIcon4} label="Find a colleague" />
          </div>
        </div>

        <div className="mx-4 border-t border-black/10" />

        <div className="flex flex-col gap-3 p-4">
          <h3 className="text-[18px] text-[#3b3b3b]">
            Y<span className="capitalize">our Pinned Apps</span>
          </h3>
          <div className="flex flex-wrap gap-4">
            <PinnedApp icon={imgLogosMicrosoftTeams} label="Teams" iconClassName="h-8 w-auto" />
            <PinnedApp icon={imgImage84} label="Outlook" iconClassName="h-7 w-auto" />
            <PinnedApp icon={imgDeviconJira} label="Jira" iconClassName="h-7 w-auto" />
            <PinnedApp icon={imgDeviconSalesforce} label="Salesforce" iconClassName="h-[34px] w-auto" />
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 pb-6 pt-2">
          <img alt="LinkedIn" className="size-8" src={imgGroup634421} />
          <img alt="X" className="size-8" src={imgGroup634422} />
          <img alt="Facebook" className="size-8" src={imgGroup634423} />
          <img alt="Vimeo" className="size-8" src={imgGroup634424} />
        </div>
      </aside>
    </>
  );
}

function QuickPromptPill({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="whitespace-nowrap rounded-full border border-black/10 bg-white px-[13px] py-1.5 text-sm text-[#0a0a0a] hover:bg-black/5 transition-colors"
    >
      {label}
    </button>
  );
}

function HeroSearch() {
  return (
    <div className="w-full rounded-[4px] border border-[#e5e5e5] bg-white px-4 sm:px-6 lg:px-[33px] pt-6 lg:pt-[33px] pb-6">
      <div className="flex items-center gap-3">
        <div
          className="flex size-12 shrink-0 items-center justify-center rounded-[14px]"
          style={{ backgroundImage: 'linear-gradient(135deg, rgb(199, 70, 39) 29.812%, rgb(244, 114, 85) 100%)' }}
        >
          <img alt="" className="size-6" src={imgSparkles} />
        </div>
        <div className="min-w-0">
          <h1 className="text-[#0a0a0a] text-lg sm:text-xl lg:text-2xl font-medium leading-normal">
            Hi Sara, how can I help you today?
          </h1>
          <p className="text-[#4a5565] text-sm sm:text-base leading-normal">
            Ask anything about policies, projects, IT help, templates…
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <QuickPromptPill label="Explain leave policy" />
        <QuickPromptPill label="Raise IT ticket" />
        <QuickPromptPill label="Find project SOP" />
        <QuickPromptPill label="Reimbursement claim steps" />
        <QuickPromptPill label="New joiner checklist" />
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <div className="flex-1 rounded-lg border border-[#e5e7eb] bg-white px-3 py-2 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] min-h-[44px] flex items-center">
          <p className="text-[#717182] text-base">Type your question here...</p>
        </div>
        <button
          type="button"
          className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#124b84] px-4 text-sm font-medium text-white hover:bg-[#0f3f6e] transition-colors"
        >
          <img alt="" className="size-4" src={imgSparkles1} />
          Ask AI
        </button>
      </div>
    </div>
  );
}

type Announcement = {
  tag: string;
  title: string;
  body: string;
};

const announcements: Announcement[] = [
  {
    tag: 'HR',
    title: 'WinFusion 2026 Offsite Announced',
    body: 'Get ready for our annual offsite WinFusion happening this April! Join us for team bonding, fun activities,',
  },
  {
    tag: 'Marketing',
    title: 'New Brand Campaign Launch – "Innovate 360"',
    body: 'We are excited to roll out our latest global campaign showcasing our digital transformation capabilities. Access campaign assets and guidelines',
  },
  {
    tag: 'Finance',
    title: 'Last Call for Expense Submissions',
    body: 'This is a final reminder to submit all pending expense claims before the closing deadline to ensure timely reimbursement and accurate',
  },
];

function CardHeader({ title, titleClassName }: { title: string; titleClassName?: string }) {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-5 pb-3">
      <h2 className={titleClassName ?? 'text-[#0a0a0a] text-lg sm:text-xl font-medium'}>{title}</h2>
      <button type="button" className="rounded-lg px-3 py-2 text-sm sm:text-base text-[#0a0a0a] hover:bg-black/5 transition-colors">
        View All
      </button>
    </div>
  );
}

function AnnouncementsCard() {
  return (
    <div className="flex h-full w-full flex-col rounded-[4px] border border-black/10 bg-white">
      <CardHeader title="Announcements" />
      <div className="flex flex-col gap-4 px-4 sm:px-6 pb-6">
        {announcements.map((a) => (
          <div key={a.title} className="rounded-[10px] border border-[#cae6ff] bg-[rgba(90,172,255,0.1)] p-3">
            <span className="inline-block rounded-lg bg-[#124b84] px-[9px] py-[3px] text-sm font-medium text-white">{a.tag}</span>
            <h4 className="mt-2 text-lg font-medium text-black">{a.title}</h4>
            <p className="mt-1 text-base leading-6 text-[#2c2c2c]">
              {a.body} <span className="text-[#155dfc]">Read More</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompanyMomentsCard() {
  const filters = ['Events', 'Customer Visit', 'Celebrations', 'Cultural'];
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[4px] border border-[#e5e5e5] bg-white">
      <div className="bg-[#124b84] px-4 sm:px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-white/20">
              <img alt="" className="size-6" src={imgCamera} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">Company Moments</h2>
              <p className="text-sm sm:text-base text-[#dbeafe]">Latest photos and videos from our team</p>
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-lg border border-white/30 bg-white/20 px-2 py-1">
            <img alt="" className="size-3" src={imgEye} />
            <span className="text-sm font-medium text-white whitespace-nowrap">28 views today</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button type="button" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#124b84] shadow">
            All
          </button>
          {filters.map((f) => (
            <button key={f} type="button" className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors">
              {f}
            </button>
          ))}
        </div>
      </div>

      <div
        className="p-4 sm:p-5"
        style={{ backgroundImage: 'linear-gradient(152.24deg, rgb(249, 250, 251) 0%, rgb(239, 246, 255) 100%)' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-[1.6fr_1fr] gap-3">
          <div className="relative overflow-hidden rounded-lg aspect-[529/428] sm:aspect-auto sm:h-full min-h-[220px]">
            <img alt="Team offsite" className="absolute inset-0 size-full object-cover" src={imgRectangle} />
            <span className="absolute bottom-3 left-3 rounded bg-black/70 px-3 py-1.5 text-sm text-white">
              Offsite - WinFusion 2025
            </span>
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden rounded-lg min-h-[100px]">
              <img alt="Customer visit" className="absolute inset-0 size-full object-cover" src={imgRectangle1} />
              <span className="absolute left-2 top-2 rounded bg-[#ff6900] px-[9px] py-[3px] text-sm font-medium text-white">
                Customer Visit
              </span>
            </div>
            <div className="relative overflow-hidden rounded-lg min-h-[100px]">
              <img alt="Celebrations" className="absolute inset-0 size-full object-cover" src={imgRectangle2} />
              <span className="absolute left-2 top-2 rounded bg-[#f6339a] px-[9px] py-[3px] text-sm font-medium text-white">
                Celebrations
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mx-auto mt-4 flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#0a0a0a] hover:bg-black/5 transition-colors"
        >
          View All Photos &amp; Videos
          <img alt="" className="size-4" src={imgChevronRight} />
        </button>
      </div>
    </div>
  );
}

type NewsItem = {
  date: string;
  title: string;
  body: string;
  image: string;
};

const newsItems: NewsItem[] = [
  {
    date: 'February 22, 2026',
    title: 'WinWire Named Premier AI-First Firm by Constellation Research',
    body: "WinWire has been named to Constellation Research, Inc.'s 2026 AI-First Service Firms list,",
    image: imgRectangle3,
  },
  {
    date: 'April 28, 2025',
    title: 'Microsoft Partner of the Year',
    body: 'WinWire is awarded with 2025 Microsoft Partner of the Year – Finalist Modern Workplace for Frontline Workers category, for',
    image: imgImage70,
  },
];

function NewsCard() {
  return (
    <div className="w-full rounded-[4px] border border-black/10 bg-white">
      <CardHeader title="News" />
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5 px-4 sm:px-6 pb-6">
        {newsItems.map((n) => (
          <div key={n.title} className="flex flex-col overflow-hidden rounded-[4px] border border-[#e5e7eb]">
            <img alt={n.title} className="h-[166px] w-full object-cover" src={n.image} />
            <div className="flex flex-1 flex-col gap-3 p-4">
              <span className="text-sm text-[#515151]">{n.date}</span>
              <h4 className="text-xl font-medium leading-6 text-[#101828]">{n.title}</h4>
              <p className="text-lg leading-[25px] text-[#6a7282]">{n.body}</p>
              <div className="mt-auto flex items-center justify-between border-t border-black/10 pt-3">
                <button type="button" className="text-base text-[#155dfc]">
                  Read More
                </button>
                <button type="button" className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-inter font-medium text-[#c74627] hover:bg-black/5 transition-colors">
                  <img alt="" className="size-[18px]" src={imgSparkles2} />
                  Summarize
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmployeeCentreCard() {
  const tabs = ['Birthdays', 'Anniversaries', 'New Joinees', 'Awards'];
  return (
    <div className="w-full rounded-[4px] border border-black/10 bg-white">
      <CardHeader title="Employee Centre" />
      <div className="flex flex-wrap gap-2 px-4 sm:px-6">
        {tabs.map((t, i) => (
          <button
            key={t}
            type="button"
            className={`rounded-full px-4 py-2 text-sm whitespace-nowrap ${
              i === 0 ? 'bg-[#124b84] text-white' : 'border border-[#e5e5e5] bg-white text-black'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex justify-center px-4 sm:px-6 py-6">
        <div className="relative w-full max-w-[375px] overflow-hidden rounded-2xl bg-[#e1f1ff] p-6 text-center">
          <div className="relative mx-auto mb-3 size-32">
            <div className="absolute -inset-2 rounded-full bg-white/50 blur-md" aria-hidden="true" />
            <img
              alt="Grace Daniel"
              className="relative size-32 rounded-full border-2 border-white object-cover"
              src={imgConvertIntoCircleShape1}
            />
          </div>
          <h3 className="text-xl font-bold text-[#101828]">Happy Birthday!</h3>
          <p className="mt-1 text-lg font-bold text-[#124b84]">Grace Daniel</p>
          <p className="mt-1 text-base font-medium text-[#364153]">Senior Software Engineer</p>
          <p className="text-sm text-[#4a5565]">Seattle, WA</p>
          <span className="mt-3 inline-block rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-[#124b84] shadow">
            March 2
          </span>

          <button
            type="button"
            aria-label="Previous"
            className="absolute left-2 top-1/2 flex size-[30px] -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow"
          >
            <img alt="" className="size-4" src={imgChevronLeft} />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-2 top-1/2 flex size-[30px] -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow"
          >
            <img alt="" className="size-4 rotate-180" src={imgChevronLeft} />
          </button>
        </div>
      </div>
    </div>
  );
}

function LeadersSpeakCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[4px] bg-white">
      <div className="relative aspect-video w-full">
        <img alt="Leader's Speak" className="absolute inset-0 size-full object-cover" src={imgImage17} />
        <span className="absolute left-0 top-6 rounded-r-full bg-black/75 px-4 py-2.5 text-base text-white">
          Leader's Speak
        </span>
        <button
          type="button"
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex size-[50px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          <img alt="" className="size-full" src={imgGroup633548} />
        </button>
        <div className="absolute inset-x-0 bottom-0 bg-black/90 px-4 py-2.5">
          <p className="text-lg text-white">Ashu Goel</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/80">CEO, WinWire</span>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm text-[#0a0a0a] hover:bg-black/5 transition-colors"
            >
              <img alt="" className="size-4" src={imgSparkles3} />
              Summarize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type HandbookLink = {
  label: string;
  bg: string;
  border: string;
  icons: [string, string];
};

const handbookLinks: HandbookLink[] = [
  { label: 'India', bg: 'bg-[#fff7ed]', border: 'border-[#ffd6a8]', icons: [imgVector1, imgVector2] },
  { label: 'US', bg: 'bg-[#eff6ff]', border: 'border-[#bedbff]', icons: [imgVector3, imgVector4] },
  { label: 'Security', bg: 'bg-[#faf5ff]', border: 'border-[#d6a2ff]', icons: [imgVector5, imgVector6] },
];

function EmployeeHandbooksCard() {
  return (
    <div className="w-full rounded-[4px] bg-white p-4 sm:p-5">
      <h3 className="text-[20px] text-black">Employee Handbooks</h3>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {handbookLinks.map((h) => (
          <div
            key={h.label}
            className={`flex h-[100px] flex-col items-center justify-center gap-2 rounded-[10px] border ${h.bg} ${h.border} px-2`}
          >
            <div className="relative size-9 rounded-[10px] bg-white p-2">
              <img alt="" className="absolute inset-0 m-auto h-4 w-4" src={h.icons[0]} />
              <img alt="" className="absolute inset-0 m-auto h-4 w-4" src={h.icons[1]} />
            </div>
            <p className="text-center text-base text-[#101828]">{h.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

type WorkItem = {
  title: string;
  priority: 'medium' | 'high';
  checked?: boolean;
};

const workItems: WorkItem[] = [
  { title: 'Plan onboarding sessions for new joiners', priority: 'medium' },
  { title: 'Review Employee Performance Feedback', priority: 'high' },
  { title: 'Approve 3 pending PTO requests', priority: 'high', checked: true },
];

function WorkContextCard() {
  const tabs = ['My Task', 'My Approvals', 'My Requests'];
  return (
    <div className="w-full rounded-[4px] border border-black/10 bg-white">
      <CardHeader title="Your Work Context" />
      <div className="flex flex-wrap gap-2 px-4 sm:px-6">
        {tabs.map((t, i) => (
          <button
            key={t}
            type="button"
            className={`rounded-full px-4 py-2 text-sm whitespace-nowrap ${
              i === 0 ? 'bg-[#124b84] text-white' : 'border border-[#e5e5e5] bg-white text-black'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 px-4 sm:px-6 py-5">
        {workItems.map((item) => (
          <div
            key={item.title}
            className={`flex items-start gap-3 rounded-[10px] border p-3 ${
              item.checked ? 'border-[#e2e8f0] bg-[#f8fafc]' : 'border-[#e2e8f0] bg-white'
            }`}
          >
            <span
              className={`mt-0.5 flex size-[21px] shrink-0 items-center justify-center rounded border ${
                item.checked ? 'border-[#030213] bg-[#030213]' : 'border-black/10 bg-white'
              }`}
            >
              {item.checked && <img alt="" className="size-3.5" src={imgIcon} />}
            </span>
            <div className="flex-1">
              <p className={`text-lg ${item.checked ? 'text-[#62748e]' : 'text-[#0f172b]'}`}>{item.title}</p>
              <span
                className={`mt-2 inline-block rounded-lg border border-black/10 px-[9px] py-[3px] text-base font-medium ${
                  item.priority === 'high' ? 'text-[#c74627]' : 'text-[#d08700]'
                }`}
              >
                {item.priority}
              </span>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="mt-1 flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white py-2 text-base text-black hover:bg-black/5 transition-colors"
        >
          <img alt="" className="size-4" src={imgIcon1} />
          Add AI-Suggested Tasks
        </button>
      </div>
    </div>
  );
}

function AIDraftStudioCard() {
  return (
    <div className="w-full rounded-[4px] border border-black/10 bg-white p-4 sm:p-6">
      <h3 className="text-[20px] text-[#0a0a0a]">AI Draft Studio</h3>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-base text-[#0a0a0a]">Draft type</label>
        <div className="flex h-9 items-center justify-between rounded-lg border border-black/10 px-3">
          <span className="text-base text-[#0a0a0a]">Powerpoint presentation</span>
          <img alt="" className="size-4" src={imgChevronDownIcon} />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-base text-[#0a0a0a]">Audience tone</label>
        <div className="flex h-9 items-center justify-between rounded-lg border border-black/10 px-3">
          <span className="text-base text-[#0a0a0a]">Professional</span>
          <img alt="" className="size-4" src={imgChevronDownIcon} />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-base text-[#0a0a0a]">Purpose</label>
        <div className="flex h-9 items-center rounded-lg border border-black/10 px-3">
          <span className="truncate text-base text-[#717182]">e.g., Follow up on project timeline discussion</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-base text-[#0a0a0a]">Key points (one per line)</label>
        <div className="rounded-lg border border-black/10 px-3 py-2">
          <p className="text-base leading-[19px] text-[#717182]">• Confirm next meeting date</p>
          <p className="text-base leading-[19px] text-[#717182]">• Request missing documents</p>
          <p className="text-base leading-[19px] text-[#717182]">• Update on project status</p>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#c74627] py-2.5 text-base font-medium text-white hover:bg-[#b13d21] transition-colors"
      >
        <img alt="" className="size-4" src={imgSparkles1} />
        Generate Draft
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-8 pb-8 text-center">
      <p className="text-base text-black">WinWire © 2026, All Rights Reserved.</p>
    </footer>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundImage: 'linear-gradient(129.11deg, rgb(221, 234, 252) 13.668%, rgb(241, 247, 255) 91.066%)' }}
    >
      <Header onMenuClick={() => setSidebarOpen((v) => !v)} />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="w-full">
        <main className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <HeroSearch />

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px] gap-6">
            <div className="flex min-w-0 flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-6 items-start">
                <CompanyMomentsCard />
                <AnnouncementsCard />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <NewsCard />
                <EmployeeCentreCard />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <LeadersSpeakCard />
              <EmployeeHandbooksCard />
              <WorkContextCard />
              <AIDraftStudioCard />
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
