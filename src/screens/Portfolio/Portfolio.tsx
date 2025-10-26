import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const projectCards = [
  {
    image: "/mask-group-1.png",
    icon: "/group-2.png",
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing\ntool of digital onboard process.",
    gradient:
      "linear-gradient(163deg,rgba(19,4,40,1)_7%,rgba(37,16,67,1)_34%,rgba(56,18,109,1)_57%,rgba(38,16,69,1)_85%,rgba(25,6,52,1)_100%)",
  },
  {
    image: "/mask-group-4.png",
    icon: "/group-1935.png",
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing\ntool of digital onboard process.",
    gradient:
      "linear-gradient(130deg,rgba(19,4,40,1)_7%,rgba(37,16,67,1)_34%,rgba(56,18,109,1)_57%,rgba(38,16,69,1)_85%,rgba(25,6,52,1)_100%)",
  },
  {
    image: "/mask-group-2.png",
    icon: "/group-1938.png",
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing\ntool of digital onboard process.",
    gradient:
      "linear-gradient(130deg,rgba(19,4,40,1)_7%,rgba(37,16,67,1)_34%,rgba(56,18,109,1)_57%,rgba(38,16,69,1)_85%,rgba(25,6,52,1)_100%)",
  },
  {
    image: "/mask-group-3.png",
    icon: "/icons.png",
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing\ntool of digital onboard process.",
    gradient:
      "linear-gradient(176deg,rgba(19,4,40,1)_7%,rgba(37,16,67,1)_34%,rgba(56,18,109,1)_57%,rgba(38,16,69,1)_85%,rgba(25,6,52,1)_100%)",
  },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Lab", href: "#lab" },
];

const radialGradients = [
  {
    top: "top-[2580px]",
    left: "left-[858px]",
    width: "w-[642px]",
    height: "h-[720px]",
    rounded: "rounded-[321px/360px]",
  },
  {
    top: "top-[1022px]",
    left: "left-[739px]",
    width: "w-[625px]",
    height: "h-[700px]",
    rounded: "rounded-[312.5px/350px]",
  },
  {
    top: "top-[2571px]",
    left: "left-[1084px]",
    width: "w-[625px]",
    height: "h-[700px]",
    rounded: "rounded-[312.5px/350px]",
  },
  {
    top: "top-[3166px]",
    left: "left-[274px]",
    width: "w-[572px]",
    height: "h-[641px]",
    rounded: "rounded-[286px/320.5px]",
  },
  {
    top: "top-[220px]",
    left: "left-[385px]",
    width: "w-[385px]",
    height: "h-[431px]",
    rounded: "rounded-[192.5px/215.5px]",
  },
];

export const Portfolio = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1980px] min-h-[4400px] relative">
      <img
        className="absolute top-[102px] left-0 w-[1980px] h-[4298px]"
        alt="Background"
        src="/background.png"
      />

      {radialGradients.map((gradient, index) => (
        <div
          key={`gradient-${index}`}
          className={`${gradient.top} ${gradient.left} ${gradient.width} ${gradient.height} ${gradient.rounded} absolute [background:radial-gradient(50%_50%_at_50%_50%,rgba(118,60,172,1)_0%,rgba(50,15,133,0)_100%)]`}
        />
      ))}

      <img
        className="absolute top-[2762px] left-[1047px] w-[583px] h-[341px]"
        alt="Portfolio"
        src="/portfolio.png"
      />

      <img
        className="absolute top-[3330px] left-[460px] w-[583px] h-[341px]"
        alt="Portfolio"
        src="/portfolio-1.png"
      />

      <header className="absolute top-0 left-0 w-[1980px] h-[113px] bg-[#190b2d] shadow-[0px_6px_22px_-3px_#0000001a]">
        <img
          className="absolute top-[35px] left-[497px] w-[35px] h-[43px]"
          alt="Logo"
          src="/logo.png"
        />

        <nav className="flex gap-[168px] absolute top-[43px] left-[1111px]">
          {navItems.map((item, index) => (
            <a
              key={`nav-${index}`}
              href={item.href}
              className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-xl text-center tracking-[0.40px] text-white leading-[normal] flex items-center justify-center"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="absolute top-[246px] left-[461px] z-10">
        <div className="absolute top-0 left-[246px] w-auto h-auto flex items-center justify-center [font-family:'Preahvihear',Helvetica] font-medium text-[19px] text-center leading-[28px] whitespace-nowrap">
          <span className="text-white tracking-[0.38px]">
            Hello! I Am{" "}
          </span>
          <span className="text-[#7127ba] tracking-[0.38px] font-bold">
            Ibrahim Memon
          </span>
        </div>

        <img
          className="absolute top-[-22px] left-[143px] w-[121px] h-[118px] z-5"
          alt="Arrow"
          src="/arrow.png"
        />

        <div className="absolute top-[106px] left-[266px] h-auto flex items-center justify-center [font-family:'Preahvihear',Helvetica] font-bold text-[50px] tracking-[1.00px] leading-[60px]">
          <span className="text-white tracking-[0.50px]">
            Judges a book
            <br />
            by its{" "}
          </span>
          <span className="text-[#7127ba] tracking-[0.50px] font-extrabold">cover</span>
          <span className="text-white tracking-[0.50px]">...</span>
        </div>

        <div className="absolute top-[78px] left-[266px] h-auto flex items-center justify-center [font-family:'Preahvihear',Helvetica] font-medium text-white text-[17px] text-center tracking-[0.34px] leading-[26px] underline decoration-white/70 underline-offset-4">
          A Designer who
        </div>

        <div className="absolute top-[240px] left-[266px] h-auto flex items-center justify-center [font-family:'Preahvihear',Helvetica] font-normal text-white/90 text-[11px] text-center tracking-[0.44px] leading-[18px]">
          Because if the cover does not impress you what else can?
        </div>

        <div className="absolute top-[197px] left-[416px] w-[189px] h-[58px] rounded-[94.29px/28.95px] border-2 border-solid border-white rotate-[-4.74deg]" />
      </section>

      <div className="absolute top-[306px] left-[461px] w-[258px] h-[259px] flex rounded-[129px/129.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_18%,rgba(67,67,67,0)_100%)] z-10">
        <img
          className="mt-[5.7px] w-[165px] h-[223px] ml-12 object-cover"
          alt="Profile"
          src="/image-1.png"
        />
      </div>

      <div className="absolute top-[661px] left-[474px] w-[674px] h-auto [font-family:'Preahvihear',Helvetica] text-white font-bold text-[50px] tracking-[1.00px] leading-[70px] flex items-center justify-center z-10">
        I&#39;m a Software Engineer.|
      </div>

      <div className="absolute top-[750px] left-[474px] w-[575px] h-auto z-10">
        <div className="flex items-center justify-center [font-family:'Preahvihear',Helvetica] font-medium text-[21px] tracking-[0.42px] leading-[32px] gap-2">
          <span className="text-white/95 tracking-[0.21px]">
            Currently, I&#39;m a Software Engineer at
          </span>
          <div className="w-5 h-[21px] bg-[url(/image-8.png)] bg-cover bg-[50%_50%]" />
          <span className="text-[#1877f2] tracking-[0.21px] font-bold">Facebook</span>
          <span className="text-white/95 tracking-[0.21px]">,</span>
        </div>
      </div>

      <div className="absolute top-[860px] left-[477px] w-[892px] h-auto flex items-center justify-center [font-family:'Preahvihear',Helvetica] font-normal text-white/90 text-[22px] tracking-[0.44px] leading-[36px] text-center z-10">
        A self-taught UI/UX designer, functioning in the industry for 3+ years
        now.
        <br />I make meaningful and delightful digital products that create an
        equilibrium
        <br />
        between user needs and business goals.
      </div>

      <section className="absolute top-[1135px] left-[463px] z-10">
        <h2 className="h-auto flex items-center justify-center [font-family:'Preahvihear',Helvetica] font-bold text-white text-[40px] tracking-[0.80px] leading-[56px] mb-8">
          Work Experience
        </h2>

        <div className="grid grid-cols-2 gap-x-[18px] gap-y-[17px] mt-[116px]">
          {projectCards.map((project, index) => (
            <Card
              key={`project-${index}`}
              className="w-[574px] h-[193px] rounded-[15px] shadow-[4px_7px_26px_#0000001f] border-0 overflow-hidden relative"
              style={{ background: project.gradient }}
            >
              <CardContent className="p-0 relative h-full">
                <img
                  className="absolute -top-1 left-[-22px] w-[592px] h-[172px]"
                  alt="Mask group"
                  src={project.image}
                />

                <img
                  className={`absolute ${
                    index === 0
                      ? "top-9 left-[50px] w-[122px] h-[115px]"
                      : index === 1
                        ? "top-[49px] left-[59px] w-[120px] h-[98px]"
                        : index === 2
                          ? "top-10 left-14 w-[120px] h-[117px]"
                          : "top-[49px] left-[61px] w-[114px] h-[97px]"
                  }`}
                  alt="Icon"
                  src={project.icon}
                />

                <div
                  className={`absolute ${
                    index === 0
                      ? "top-[46px] left-[197px]"
                      : index === 1
                        ? "top-[46px] left-[195px]"
                        : index === 2
                          ? "top-[50px] left-[202px]"
                          : "top-[45px] left-[197px]"
                  } w-64 [font-family:'Poppins',Helvetica] font-semibold text-white text-[26px] tracking-[0] leading-[32.5px] whitespace-nowrap`}
                >
                  {project.title}
                </div>

                <div
                  className={`absolute ${
                    index === 0
                      ? "top-[81px] left-[198px]"
                      : index === 1
                        ? "top-[81px] left-[196px]"
                        : index === 2
                          ? "top-[85px] left-[203px]"
                          : "top-20 left-[198px]"
                  } w-[232px] [font-family:'Poppins',Helvetica] font-medium text-white text-[8px] tracking-[0] leading-[10.5px]`}
                >
                  {project.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </div>

                <Button
                  className={`absolute ${
                    index === 0
                      ? "top-28 left-[195px]"
                      : index === 1
                        ? "top-28 left-[193px]"
                        : index === 2
                          ? "top-[116px] left-[200px]"
                          : "top-[111px] left-[195px]"
                  } w-[121px] h-[33px] bg-transparent border-0 p-0 hover:bg-transparent`}
                >
                  <img
                    className="w-[119px] h-[33px]"
                    alt="Button background"
                    src="/rectangle-977.svg"
                  />
                  <span className="absolute top-2.5 left-[19px] w-[77px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                    LEARN MORE
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="absolute top-[1817px] left-[598px] w-[895px] h-[754px] z-10">
        <div className="absolute top-0 left-[123px] h-auto flex items-center justify-center [font-family:'Preahvihear',Helvetica] font-medium text-white/95 text-2xl text-center tracking-[0.48px] leading-[36px]">
          <span className="tracking-[0.24px]">
            I&#39;m currently looking to join a cross-functional team
            <br />
          </span>
          <span className="text-[17px] tracking-[0.17px] leading-[28px]">
            that values improving people&#39;s lives through accessible design
          </span>
        </div>

        <div className="absolute top-0 left-[503px] h-auto flex items-center justify-center [font-family:'Preahvihear',Helvetica] font-bold text-[#a261ff] text-2xl text-center tracking-[0.48px] leading-[36px] whitespace-nowrap">
          cross-functional
        </div>

        <img
          className="absolute top-[182px] left-[461px] w-[123px] h-[278px]"
          alt="Vector"
          src="/vector-25.svg"
        />

        <img
          className="absolute top-[199px] left-[452px] w-[71px] h-[270px]"
          alt="Vector"
          src="/vector-26.svg"
        />

        <img
          className="absolute top-[198px] left-[436px] w-[35px] h-[292px]"
          alt="Vector"
          src="/vector-27.svg"
        />

        <img
          className="absolute top-48 left-[303px] w-[119px] h-[301px]"
          alt="Vector"
          src="/vector-28.svg"
        />

        <img
          className="absolute top-48 left-[365px] w-[67px] h-[310px]"
          alt="Vector"
          src="/vector-29.svg"
        />

        <img
          className="absolute top-[195px] left-[414px] w-[22px] h-[313px]"
          alt="Vector"
          src="/vector-30.svg"
        />

        <div className="absolute top-[424px] left-[181px] w-[542px] h-[330px] rounded-[271px/165px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(118,60,172,1)_0%,rgba(50,15,133,0)_100%)]" />

        <img
          className="absolute top-[97px] left-[255px] w-[374px] h-[105px]"
          alt="Group"
          src="/group-1899.png"
        />

        <div className="absolute top-[448px] left-[350px] w-[180px] h-[180px] rounded-[90px] bg-[linear-gradient(180deg,rgba(48,16,128,0.6)_0%,rgba(120,64,173,0.36)_100%)]" />

        <img
          className="absolute top-[481px] left-[388px] w-[104px] h-[118px]"
          alt="Group"
          src="/group-1897.png"
        />

        <img
          className="absolute top-[457px] left-0 w-[881px] h-[269px]"
          alt="Ellipse"
          src="/ellipse-21.svg"
        />

        <img
          className="absolute top-[457px] left-[63px] w-[764px] h-[269px]"
          alt="Ellipse"
          src="/ellipse-22.svg"
        />

        <img
          className="absolute top-[457px] left-[108px] w-[695px] h-[269px]"
          alt="Ellipse"
          src="/ellipse-23.svg"
        />

        <div className="absolute top-[385px] left-[292px] w-[306px] h-[275px] flex bg-[url(/ellipse-24.svg)] bg-[100%_100%]">
          <img
            className="mt-[91px] w-[295px] h-[164px] ml-[5px]"
            alt="Ellipse"
            src="/ellipse-25.svg"
          />
        </div>

        <img
          className="absolute w-[20px] h-[21px] top-[535px] left-[833px]"
          alt="Group"
          src="/group.png"
        />

        <img
          className="absolute w-0 h-[15px] top-[505px] left-[771px]"
          alt="Vector"
          src="/vector-1.svg"
        />

        <img
          className="absolute w-0 h-[22px] top-[588px] left-[879px]"
          alt="Vector"
          src="/vector.svg"
        />

        <img
          className="absolute w-0 h-[19px] top-[675px] left-[766px]"
          alt="Group"
          src="/group-1.png"
        />

        <img
          className="absolute top-[608px] left-[826px] w-3.5 h-[15px]"
          alt="Group"
          src="/group-1900.png"
        />

        <img
          className="absolute top-[512px] left-[709px] w-5 h-[11px]"
          alt="Group"
          src="/group-1901.png"
        />

        <img
          className="absolute w-0 h-[17px] top-[577px] left-[120px]"
          alt="Vector"
          src="/vector-2.svg"
        />

        <img
          className="absolute top-[646px] left-7 w-[13px] h-5"
          alt="Group"
          src="/group-1905.png"
        />

        <img
          className="absolute top-[484px] left-[187px] w-3 h-[15px]"
          alt="Group"
          src="/group-1902.png"
        />

        <img
          className="absolute top-[521px] left-[82px] w-[13px] h-[15px]"
          alt="Group"
          src="/group-1903.png"
        />

        <img
          className="absolute top-[655px] left-32 w-[22px] h-[19px]"
          alt="Group"
          src="/group-1904.png"
        />
      </section>

      <section className="absolute top-[2762px] left-[460px]">
        <img
          className="absolute top-0 left-[587px] w-[583px] h-[341px]"
          alt="Mask group"
          src="/mask-group.png"
        />

        <img
          className="absolute top-[124px] left-0 w-[669px] h-[165px]"
          alt="Card"
          src="/card.png"
        />

        <div className="absolute top-[24px] left-2 w-[628px] h-[333px]">
          <div className="absolute top-[126px] left-8 h-auto flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-[#ccd6f6]/90 text-lg tracking-[0.18px] leading-[28px]">
            A web app for visualizing personalized Spotify data. View your
            <br />
            top artists, top tracks, recently played tracks, and detailed audio
            <br />
            information about each track. Create and save new playlists of
            <br />
            recommended tracks based on your existing playlists and more.
          </div>

          <div className="absolute top-[19px] left-0 h-auto flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-[#ccd6f6] text-[34px] tracking-[0.68px] leading-[48px]">
            Example Project
          </div>

          <div className="absolute top-0 left-0 h-auto flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-[#9757d3] text-base tracking-[0.32px] leading-[24px] uppercase">
            Featured&nbsp;&nbsp;Project
          </div>

          <img
            className="absolute top-[302px] left-[73px] w-[31px] h-[31px]"
            alt="Icon park solid"
            src="/icon-park-solid-click-5.svg"
          />

          <img
            className="absolute top-[302px] left-[73px] w-[31px] h-[31px]"
            alt="Icon park solid"
            src="/icon-park-solid-click-2.svg"
          />

          <img
            className="top-[301px] left-[25px] absolute w-[31px] h-[31px]"
            alt="Icon park solid"
            src="/icon-park-solid-click-4.svg"
          />
        </div>
      </section>

      <section className="absolute top-[3330px] left-[460px]">
        <img
          className="absolute top-7 left-[501px] w-[669px] h-[165px]"
          alt="Card"
          src="/card-1.png"
        />

        <div className="absolute top-0 left-[501px] w-[675px] h-[329px]">
          <div className="absolute top-[122px] left-[34px] h-auto flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-[#ccd6f6]/90 text-lg tracking-[0.18px] leading-[28px]">
            A web app for visualizing personalized Spotify data. View your
            <br />
            top artists, top tracks, recently played tracks, and detailed audio
            <br />
            information about each track. Create and save new playlists of
            <br />
            recommended tracks based on your existing playlists and more.
          </div>

          <div className="absolute top-[19px] left-[382px] h-auto flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-[#ccd6f6] text-[34px] tracking-[0.68px] leading-[48px]">
            Example Project
          </div>

          <div className="absolute top-0 left-[523px] h-auto flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-[#9757d3] text-base tracking-[0.32px] leading-[24px] uppercase">
            Featured&nbsp;&nbsp;Project
          </div>

          <img
            className="top-[298px] left-[596px] absolute w-[31px] h-[31px]"
            alt="Icon park solid"
            src="/icon-park-solid-click-1.svg"
          />

          <img
            className="top-[298px] left-[596px] absolute w-[31px] h-[31px]"
            alt="Icon park solid"
            src="/icon-park-solid-click-3.svg"
          />

          <img
            className="top-[297px] left-[548px] absolute w-[31px] h-[31px]"
            alt="Icon park solid"
            src="/icon-park-solid-click.svg"
          />
        </div>
      </section>

      <footer className="absolute top-[3905px] left-[458px] z-10">
        <h2 className="h-auto [font-family:'Preahvihear',Helvetica] font-bold text-[25px] tracking-[0.50px] flex items-center justify-center text-white leading-[36px] mb-8">
          Contact
        </h2>

        <div className="absolute top-[118px] left-0 h-auto flex items-center justify-center [font-family:'Preahvihear',Helvetica] font-normal text-white/90 text-[15px] tracking-[0.30px] leading-[26px]">
          I&#39;m currently looking to join a cross-functional team that values
          improving people&#39;s lives
          <br />
          through accessible design. or have a project in mind? Let&#39;s
          connect.
          <br />
          <br />
          <span className="font-semibold text-white text-[16px]">ibrhaimmemon930@gmail.com</span>
        </div>

        <img
          className="absolute top-[257px] left-0 w-[110px] h-[18px]"
          alt="Social icons"
          src="/social-icons.png"
        />
      </footer>
    </div>
  );
};
