import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


const TermsOfService = () => {
  return (
    <>
      <div className=''>
        <Navbar />


        <section className=" bg-[#030712] text-white   lg:p-20  md:p-10">
          <div class="max-w-screen-xl mx-auto p-6">
            <div class="text-white font-poppins">
              <h1 class="text-4xl md:mt-12 lg:mt-2 mt-12 font-bold mb-6">Terms Of Service</h1>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                Welcome to AMANSAS, a fintech platform connecting project owners and funders. By using our services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
              </p>

              <h4 class="text-lg font-semibold mb-3">1. Acceptance of Terms</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                By accessing or using the AMANSAS platform ("Service"), you agree to these Terms of Service ("Terms"), as well as our Privacy Statement. If you do not agree with these terms, you must not use the Service.
              </p>

              <h4 class="text-lg font-semibold mb-3">2. Services</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                AMANSAS provides a platform where project owners can showcase their projects and funders can find opportunities to invest. The platform connects the two parties, but we do not directly involve ourselves in the negotiations, management, or execution of projects.
              </p>

              <h4 class="text-lg font-semibold mb-3">3. Account Registration</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information and to update it as necessary to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account.
              </p>

              <h4 class="text-lg font-semibold mb-3">4. Use of the Service</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:
              </p>
              <ul class="list-disc list-inside ml-4">
                <li class="mb-2">Violate any applicable local, state, national, or international law or regulation.</li>
                <li class="mb-2">Engage in fraudulent, deceptive, or misleading practices, including money laundering.</li>
                <li class="mb-2">Infringe on any third party's intellectual property rights.</li>
              </ul>

              <h4 class="text-lg font-semibold mb-3">5. Subscription and Fees</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                Access to the basic features of the Service is free. This allows project owners to upload their projects on the platform free of charge and funders to browse projects by creating a profile, registering, and accessing basic functionalities.
              </p>

              <h4 class="text-lg font-semibold mb-3">6. Payments and Commissions</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                Project owners can upload their projects to the platform for free. However, AMANSAS charges a commission of 1.5% of the total funding received by the project owner.
              </p>

              <h4 class="text-lg font-semibold mb-3">7. Privacy Statement</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                Your privacy is important to us. This Privacy Statement explains how we collect, use, and protect your personal data.
              </p>

              <h4 class="text-lg font-semibold mb-3">8. Intellectual Property</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                All content on the Service, including text, graphics, logos, and software, is the property of AMANSAS or its licensors and is protected by intellectual property laws.
              </p>

              <h4 class="text-lg font-semibold mb-3">9. Termination</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Service at our sole discretion, without prior notice.
              </p>

              <h4 class="text-lg font-semibold mb-3">10. Limitation of Liability</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                To the fullest extent permitted by law, AMANSAS shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>

              <h4 class="text-lg font-semibold mb-3">11. Governing Law</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                These Terms are governed by and construed in accordance with the laws of Germany.
              </p>

              <h4 class="text-lg font-semibold mb-3">12. Dispute Resolution</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                In the event of any dispute, the parties shall attempt to resolve the dispute amicably through good-faith negotiations.
              </p>

              <h4 class="text-lg font-semibold mb-3">13. Changes to Terms</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website.
              </p>

              <h4 class="text-lg font-semibold mb-3">14. Contact Information</h4>
              <p class="text-base text-gray-400 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at support.
              </p>
            </div>
          </div>
        </section>


        <Footer />
      </div>

    </>
  )
}

export default TermsOfService
