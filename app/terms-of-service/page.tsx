import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">Last Updated: April 2, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Welcome to Bharat Alternates. These Terms of Service ("Terms") govern your access to and use of our website
            and services related to Portfolio Management Services (PMS) and Alternative Investment Funds (AIF).
          </p>
          <p>
            By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these
            Terms, please do not access or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>"Services"</strong> refers to the investment advisory, portfolio management, and related services
              provided by Bharat Alternates.
            </li>
            <li>
              <strong>"Website"</strong> refers to the website operated by Bharat Alternates at bharatalternates.com and
              all related subdomains.
            </li>
            <li>
              <strong>"User," "you," and "your"</strong> refer to the individual or entity accessing or using our
              Services.
            </li>
            <li>
              <strong>"We," "us," and "our"</strong> refer to Bharat Alternates.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
          <p>
            To use our Services, you must be at least 18 years old and capable of forming a binding contract. If you are
            accessing or using our Services on behalf of a company or other legal entity, you represent that you have
            the authority to bind such entity to these Terms.
          </p>
          <p>
            Our Services are intended for users who are residents of India. By using our Services, you represent and
            warrant that you meet all eligibility requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Account Registration</h2>
          <p>
            Some of our Services may require you to create an account. When you register for an account, you agree to
            provide accurate, current, and complete information. You are responsible for maintaining the confidentiality
            of your account credentials and for all activities that occur under your account.
          </p>
          <p>
            You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
            We cannot and will not be liable for any loss or damage arising from your failure to comply with these
            obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Investment Services</h2>
          <p>
            Our investment services are subject to separate agreements, including but not limited to Portfolio
            Management Services Agreement, Investment Advisory Agreement, and subscription documents for Alternative
            Investment Funds. These agreements will govern the specific terms of the investment services provided to
            you.
          </p>
          <p>
            The information provided on our Website is for general informational purposes only and does not constitute
            financial, investment, legal, or tax advice. We recommend that you consult with qualified professionals
            before making any investment decisions.
          </p>
          <p>
            All investments involve risk, including the possible loss of principal. Past performance is not indicative
            of future results. The value of investments and the income from them can go down as well as up and is not
            guaranteed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
          <p>
            The Website and its entire contents, features, and functionality (including but not limited to all
            information, software, text, displays, images, video, and audio, and the design, selection, and arrangement
            thereof) are owned by Bharat Alternates, its licensors, or other providers of such material and are
            protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary
            rights laws.
          </p>
          <p>
            These Terms permit you to use the Website for your personal, non-commercial use only. You must not
            reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish,
            download, store, or transmit any of the material on our Website, except as follows:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Your computer may temporarily store copies of such materials in RAM incidental to your accessing and
              viewing those materials.
            </li>
            <li>
              You may store files that are automatically cached by your Web browser for display enhancement purposes.
            </li>
            <li>
              You may print or download one copy of a reasonable number of pages of the Website for your own personal,
              non-commercial use and not for further reproduction, publication, or distribution.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Prohibited Uses</h2>
          <p>You agree not to use the Website or Services:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>
              To transmit, or procure the sending of, any advertising or promotional material, including any "junk
              mail," "chain letter," "spam," or any other similar solicitation.
            </li>
            <li>
              To impersonate or attempt to impersonate Bharat Alternates, a Bharat Alternates employee, another user, or
              any other person or entity.
            </li>
            <li>
              To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website, or
              which may harm Bharat Alternates or users of the Website or expose them to liability.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
          <p>
            THE WEBSITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY
            KIND, EITHER EXPRESS OR IMPLIED. BHARAT ALTERNATES DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR
            THAT THE WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL BHARAT ALTERNATES, ITS AFFILIATES, OR
            THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY
            KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE
            WEBSITE, SERVICES, OR ANY CONTENT ON THE WEBSITE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Bharat Alternates, its affiliates, licensors, and service
            providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
            suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
            losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
            violation of these Terms or your use of the Website or Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law and Jurisdiction</h2>
          <p>
            These Terms and any dispute or claim arising out of or in connection with them or their subject matter or
            formation shall be governed by and construed in accordance with the laws of India. Any legal suit, action,
            or proceeding arising out of, or related to, these Terms or the Website shall be instituted exclusively in
            the courts of India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms of Service</h2>
          <p>
            We may revise and update these Terms from time to time at our sole discretion. All changes are effective
            immediately when we post them. Your continued use of the Website following the posting of revised Terms
            means that you accept and agree to the changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Severability</h2>
          <p>
            If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be
            invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the
            minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Entire Agreement</h2>
          <p>
            These Terms, our Privacy Policy, and any other agreements or terms specific to particular Services
            constitute the sole and entire agreement between you and Bharat Alternates regarding the Website and
            Services and supersede all prior and contemporaneous understandings, agreements, representations, and
            warranties, both written and oral, regarding the Website and Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <div className="mt-4">
            <p>
              <strong>Bharat Alternates</strong>
            </p>
            <p>Email: info@bharatalternates.com</p>
            <p>Phone: +91 8527512552</p>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  )
}
