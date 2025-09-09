import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">Last Updated: April 2, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Bharat Alternates ("we," "our," or "us") respects your privacy and is committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
            you visit our website or use our services related to Portfolio Management Services (PMS) and Alternative
            Investment Funds (AIF).
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have
            read, understood, and agree to be bound by all the terms of this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

          <h3 className="text-xl font-medium mb-3">Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fill out forms on our website</li>
            <li>Register for an account</li>
            <li>Subscribe to our newsletters</li>
            <li>Request information about our services</li>
            <li>Contact us through email, phone, or other communication channels</li>
          </ul>
          <p>This information may include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name, email address, phone number, and mailing address</li>
            <li>Financial information necessary for investment services</li>
            <li>KYC (Know Your Customer) information as required by regulatory authorities</li>
            <li>Investment preferences and risk tolerance</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your device and usage
            patterns, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address, browser type, operating system</li>
            <li>Pages visited, time spent on pages, links clicked</li>
            <li>Referral sources and exit pages</li>
            <li>Device information including screen resolution and browser settings</li>
          </ul>
          <p>We collect this information using cookies, web beacons, and similar technologies.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and manage your account</li>
            <li>Comply with regulatory requirements including KYC and AML (Anti-Money Laundering) procedures</li>
            <li>Send you updates, newsletters, and marketing communications</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Protect against unauthorized access and legal liability</li>
            <li>Fulfill any other purpose disclosed to you at the time of collection</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers and business partners who assist us in operating our business</li>
            <li>Regulatory authorities as required by applicable laws and regulations</li>
            <li>Financial institutions and custodians necessary for processing transactions</li>
            <li>Professional advisors such as lawyers, accountants, and auditors</li>
            <li>Potential buyers in the event of a merger, acquisition, or sale of assets</li>
          </ul>
          <p>We may also disclose your information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>To comply with legal obligations</li>
            <li>To protect and defend our rights and property</li>
            <li>To prevent or investigate possible wrongdoing</li>
            <li>With your consent or at your direction</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information from
            unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the
            Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          <p>
            We regularly review our security practices and update them as necessary to maintain appropriate levels of
            protection.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction or objection to processing</li>
            <li>Data portability</li>
            <li>Withdrawal of consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section
            below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to collect and track information about your browsing
            activities on our website. You can control cookies through your browser settings and other tools. However,
            disabling cookies may limit your ability to use certain features of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites and services. We have no control over and assume no
            responsibility for the content, privacy policies, or practices of any third-party sites or services. We
            encourage you to review the privacy policies of any websites you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
            information from children. If you are a parent or guardian and believe your child has provided us with
            personal information, please contact us, and we will take steps to delete such information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Last
            Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
            please contact us at:
          </p>
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
