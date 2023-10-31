// import Image from "next/image";
// import Link from "next/link";
// import companyA from "../../public/companyA.svg";
// import companyB from "../../public/companyB.svg";
// import companyC from "../../public/companyC.svg";
// import companyD from "../../public/companyD.svg";
// import companyE from "../../public/companyE.svg";
// import heroImg from "../../public/hero.png";
// import Container from "./container";

// export default function Hero() {
//   return (
//     <>
//       <Container className="flex flex-wrap">
//         <div className="flex items-center w-full lg:w-1/2 md:w-2/3 max-w-2xl">
//           <div className="mb-8">
//             <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
//               <p>
//                 The next era of business thrives on
//                 <span className="text-[#EC0B5C]"> learning</span>
//               </p>
//             </h1>
//             <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl ">
//               We are the integrated learning solution that delivers impactful
//               programs for everyone.
//             </p>

//             <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
//               <Link href="/pricing">
//                 <button className="text-white font-bold text-md p-2 min-w-[90px] rounded-md bg-[#EC0B5C] hover:bg-[#6c9096] shadow  hover:text-gray-100 transition duration-500">
//                   Get Started
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-center w-full sm:w-1/3 lg:w-1/2">
//           <div>
//             <Image
//               src={heroImg}
//               alt="My Learning"
//               width={450}
//               height="auto"
//               priority={true}
//             />
//           </div>
//         </div>
//       </Container>
//       <Container>
//         <div className="flex flex-col justify-center">
//           <div className="text-xl text-center text-gray-700">
//             Trusted by <span className="font-semibold">enterprise leaders</span>
//             , trusted by <span className="font-semibold">you</span>
//           </div>

//           <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around align-bottom text-center ">
//             <div className="pt-2 text-gray-400">
//               <Image src={companyC} alt="Company C" width={110} height="auto" />
//             </div>
//             <div className="text-gray-400">
//               <Image src={companyB} alt="Company B" width={75} height="auto" />
//             </div>
//             <div className="text-gray-400">
//               <Image src={companyD} alt="Company D" width={55} height="auto" />
//             </div>
//             <div className="pt-1 text-gray-400">
//               <Image src={companyA} alt="Company A" width={95} height="auto" />
//             </div>
//             <div className="pt-2 text-gray-400">
//               <Image src={companyE} alt="Company E" width={65} height="auto" />
//               {/* <span>TwistCart</span> */}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }

// import "src/components/App.css"; // Import your CSS file
import LC from "src/components/assets/LC.png";
import home from "src/components/assets/VF1.gif";
import build from "src/components/assets/Vfb.png";
import drag from "src/components/assets/drag.png";
import emb from "src/components/assets/embeddings.png";
import pipe from "src/components/assets/pipe.png";
import scale from "src/components/assets/scale.png";
import sync from "src/components/assets/sync.png";
const Hero = () => (
  <div class="software-company-website">
    <div class="hero-wrapper">
      <div class="hero-wrapper-text">
        <div class="header-text">
          <div class="h-1-primary-text">
            <span>
              <span class="h-1-primary-text-span"></span>
              <span class="h-1-primary-text-span2">Low Code ETL</span>
              <span class="h-1-primary-text-span3"></span>
              <span class="h-1-primary-text-span4">
                {" "}
                <br />
              </span>
              <span class="h-1-primary-text-span5">for Unstructured Data</span>
              <span class="h-1-primary-text-span4">
                {" "}
                <br />
              </span>
              <span class="h-1-primary-text-span6">& GenAI Platform</span>
            </span>
          </div>
        </div>
        <div class="btn-primary">
          <div class="let-s-get-started">Let’s get started!</div>
        </div>
        <div className="additional-text">
          A SaaS based low code ETL pipeline for creating high-quality vector
          embedding{<br />} of unstructured data to build Generative AI
          applications.
        </div>
      </div>
      <div class="hero-wrapper-image">
        <div class="hero-wrapper-image-center">
          <img class="web-development-1" src={home} />
        </div>
      </div>
    </div>

    <div class="heading-h-2-left4">
      <h2>Features of VectrFlow</h2>
    </div>

    <div class="frame-54">
      <div class="frame-53">
        <div class="way-building-details">
          <div class="frame-47">
            <div class="build-the-right-team-to-scale">Build</div>
            <div class="frame-48">
              <div class="finding-the-right-talent-is-not-easy-we-help-you-find-the-talent-that-suits-your-needs-follows-your-processes-and-sticks-with-you-long-term-not-the-case-with-freelancers">
                Automate processes by drag and dropping AI models, data loaders,
                and plugins.
              </div>
              <div class="frame-49">
                <div class="our-delivery-model-helps-you-cut-costs-and-deliver-within-budget"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-46"></div>
        <img class="rectangle-17" src={build} />
      </div>
    </div>

    <div class="card-sm">
      <div class="rectangle-21"></div>
      <div class="frame-57">
        <div class="group-34">
          <div class="rectangle-27"></div>
        </div>
        <div class="frame-56">
          <div class="card-main-title">
            Low code drag and drop functionality
          </div>
          <div class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span">
                Low code drag and drop functionality is a user-friendly
                development approach that simplifies application creation. It
                employs a visual interface where users can easily design and
                build elements by dragging and dropping components onto a
                canvas. This approach reduces the need for extensive coding,
                making it accessible to non-developers.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* <h2>Features of Vectrflow</h2> */}
    <div class="card-sm2">
      <div class="rectangle-21"></div>
      <div class="frame-57">
        <div class="group-34">
          <div class="rectangle-272"></div>
        </div>
        <div class="frame-56">
          <div class="card-main-title">Automated Data Ingestion Pipeline</div>
          <div class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span4">
                An Automated Data Ingestion Pipeline is a structured data
                workflow that efficiently collects, transforms, and loads data
                from various sources into a central repository or data
                warehouse. This pipeline automates the often complex and
                time-consuming process of data acquisition, ensuring data
                quality and consistency.{" "}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-sm3">
      <div class="rectangle-21"></div>
      <div class="frame-57">
        <div class="group-34">
          <div class="rectangle-273"></div>
        </div>
        <div class="frame-56">
          <div class="card-main-title">Vectorstore and computed Embeddings</div>
          <div class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span7">
                "Vectorstore" refers to a repository or database that stores
                vector representations of data points or entities. Computed
                embeddings, in this context, are vectors generated through
                techniques like word embeddings (e.g., Word2Vec or GloVe) or
                deep learning models{" "}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-sm4">
      <div class="rectangle-21"></div>
      <div class="frame-57">
        <div class="group-34">
          <div class="rectangle-274"></div>
        </div>
        <div class="frame-56">
          <div class="card-main-title">Scalable data Pipeline</div>
          <div class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span10">
                A scalable data pipeline is a sophisticated architecture that
                can efficiently process, transform, and transmit large volumes
                of data. It's designed to adapt to growing data needs, ensuring
                seamless performance and accommodating increasing data volumes,
                making it ideal for organizations with dynamic data
                requirements.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-sm5">
      <div class="rectangle-21"></div>
      <div class="frame-57">
        <div class="group-34">
          <div class="rectangle-275"></div>
        </div>
        <div class="frame-56">
          <div class="card-main-title">
            Streamline Langchain and LlamaIndex development
          </div>
          <div class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span13">
                To streamline Langchain and LlamaIndex development, prioritize
                clear project roadmaps and agile methodologies, enhance
                cross-team collaboration and communication, and leverage
                modular, reusable code components for efficient coding and
                testing, ultimately accelerating the development process and
                improving product quality.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-sm6">
      <div class="rectangle-21"></div>
      <div class="frame-57">
        <div class="group-34">
          <div class="rectangle-276"></div>
        </div>
        <div class="frame-56">
          <div class="card-main-title">
            Periodic data Sync and pay as you use
          </div>
          <div class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code">
            <span>
              <span class="unlike-other-companies-we-are-a-ux-first-development-company-projects-are-driven-by-designers-and-they-make-sure-design-and-experiences-translate-to-code-span16">
                Periodic data sync refers to the scheduled and automatic
                updating of information between systems or databases at regular
                intervals, ensuring data consistency and accuracy. "Pay as you
                use" implies a pricing model where customers are billed based on
                the actual resources or services they consume, promoting cost
                efficiency and scalability.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <img class="heart-rate-perspective-matte" src={sync} />
    <div class="code-perspective-matte2"></div>
    <img class="code-perspective-matte3" src={pipe} />
    <img class="shield-perspective-matte" src={emb} />
    <img class="padlock-perspective-matte" src={scale} />
    <img class="success-perspective-matte" src={LC} />
    <img class="rocket-perspective-matte" src={drag} />

    <div class="footer-section">
      <div class="rectangle-34"></div>
      <div class="group-78"></div>

      <div class="_2023-copyright-by-agency-solutions-all-rights-reserved">
        © 2023 Copyright by VectrFlow. All rights reserved.
      </div>
    </div>
  </div>
);

export default Hero;
