import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const LegalNotice = () => {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <section className=" bg-[#030712] text-white lg:p-20 md:p-10">
          <div className="p-6 lg:p-12 font-poppins">
            <div className="space-y-6 font-poppins">
              <h1 className="text-3xl font-bold md:mt-12 lg:mt-2 mt-12 font-poppins">Legal Notice</h1>
              <p className='text-gray-400 text-justify' >Information according to § 5 TMG</p>
              <p className='text-gray-400 text-justify' >Amansas S/C: Komm Mit Afrika Invest GmbH</p>
              <p className='text-gray-400 text-justify' >
                Werlerstr. 96 <br />
                59063 Hamm
              </p>
              <p className='text-gray-400 text-justify'>Commercial register: HRB 10312</p>
              <p className='text-gray-400 text-justify'>Registration court: Hamm District Court</p>
              <p className='text-gray-400 text-justify'>
                Represented by the shareholders: Managing Director: Nelli Foumba Soumaoro
              </p>

              <h4 className="text-xl font-semibold">Contact</h4>
              <p className='text-gray-400 text-justify'>
                Phone: 023819438708 / E-mail:{" "}
                <a
                  href="mailto:info@kommmit-afrika.de"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  info@kommmit-afrika.de
                </a>
              </p>

              <h4 className="text-xl font-semibold">VAT-ID</h4>
              <p className='text-gray-400 text-justify'>
                Sales tax identification number according to § 27 a of the Sales Tax Law:
                322/5718/1678
              </p>

              <p>Responsible for the content according to § 55(2) RStV</p>
              <p className='text-gray-400 text-justify'>
                Nelli Foumba <br />
                Werlerstr. 96 <br />
                59063 Hamm
              </p>

              <h4 className="text-xl font-semibold">EU dispute resolution</h4>
              <p className='text-gray-400 text-justify'>
                The European Commission provides a platform for online dispute resolution
                (ODR):{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .
              </p>
              <p className='text-gray-400 text-justify'>
                Our e-mail address can be found above in the site notice. We are not
                willing or obliged to participate in dispute resolution proceedings before
                a consumer arbitration board.
              </p>

              <h4 className="text-xl font-semibold">Liability for Contents</h4>
              <p className='text-gray-400 text-justify'>
                As service providers, we are liable for our own contents of these websites
                according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However,
                according to Sec. 8 to 10 German Telemedia Act (TMG), service providers
                are not obligated to permanently monitor submitted or stored information
                or to search for evidence that indicate illegal activities.
              </p>
              <p className='text-gray-400 text-justify'>
                Legal obligations to remove information or to block the use of information
                remain unchallenged. In this case, liability is only possible at the time
                of knowledge about a specific violation of law. Illegal contents will be
                removed immediately at the time we get knowledge of them.
              </p>

              <h4 className="text-xl font-semibold">Liability for Links</h4>
              <p className='text-gray-400 text-justify'>
                Our offer includes links to external third party websites. We have no
                influence on the contents of those websites, therefore we cannot guarantee
                for those contents. Providers or administrators of linked websites are
                always responsible for their own content.
              </p>
              <p className='text-gray-400 text-justify'>
                The linked websites had been checked for possible violations of law at the
                time of the establishment of the link. Illegal contents were not detected
                at the time of the linking. A permanent monitoring of the contents of
                linked websites cannot be imposed without reasonable indications that
                there has been a violation of law. Illegal links will be removed
                immediately at the time we get knowledge of them.
              </p>

              <h4 className="text-xl font-semibold">Copyright</h4>
              <p className='text-gray-400 text-justify'>
                Contents and compilations published on these websites by the providers are
                subject to German copyright laws. Reproduction, editing, distribution as
                well as the use of any kind outside the scope of the copyright law require
                a written permission from the author or originator. Downloads and copies
                of these websites are permitted for private use only.
              </p>
              <p className='text-gray-400 text-justify'>
                The commercial use of our contents without permission of the originator is
                prohibited. Copyright laws of third parties are respected as long as the
                contents on these websites do not originate from the provider.
                Contributions from third parties on this site are indicated as such.
                However, if you notice any violations of copyright law, please inform us.
                Such contents will be removed immediately.
              </p>
            </div>
          </div>
        </section>


        <Footer />
      </div>
    </>
  )
}

export default LegalNotice
