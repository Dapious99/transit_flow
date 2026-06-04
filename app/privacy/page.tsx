import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy | TransitFlow',
  description: 'TransitFlow Privacy Policy - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 md:pt-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 1, 2025
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TransitFlow (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you use our fleet management platform and related services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information in several ways:
                </p>
                <h3 className="text-lg font-medium text-foreground mb-2">2.1 Information You Provide</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Account information (name, email, phone number, company details)</li>
                  <li>Payment and billing information</li>
                  <li>Communications with our support team</li>
                  <li>Survey responses and feedback</li>
                </ul>
                <h3 className="text-lg font-medium text-foreground mb-2">2.2 Information Collected Automatically</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Device and vehicle location data (GPS coordinates)</li>
                  <li>Vehicle telemetry data (speed, fuel consumption, engine diagnostics)</li>
                  <li>Usage data (features accessed, time spent, actions taken)</li>
                  <li>Device information (browser type, operating system, IP address)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the collected information for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Providing and maintaining our fleet management services</li>
                  <li>Processing transactions and sending related notifications</li>
                  <li>Generating analytics, insights, and reports for your business</li>
                  <li>Improving our platform and developing new features</li>
                  <li>Communicating with you about updates, security alerts, and support</li>
                  <li>Complying with legal obligations and protecting our rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Service Providers:</strong> Third parties who perform services on our behalf (hosting, analytics, payment processing)</li>
                  <li><strong className="text-foreground">Business Partners:</strong> With your consent, for integrated services and solutions</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong className="text-foreground">Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures including encryption in transit and at rest, 
                  regular security audits, access controls, and SOC 2 Type II compliance. However, no method of 
                  transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as your account is active or as needed to 
                  provide you services. We will retain and use your information as necessary to comply with 
                  legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access, correct, or delete your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Data portability (receive your data in a structured format)</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place, including Standard Contractual Clauses 
                  approved by relevant authorities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children&apos;s Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly 
                  collect personal information from children. If we become aware that we have collected 
                  such information, we will take steps to delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date. 
                  We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-secondary rounded-xl">
                  <p className="text-foreground font-medium">TransitFlow Inc.</p>
                  <p className="text-muted-foreground">Email: privacy@transitflow.io</p>
                  <p className="text-muted-foreground">Address: Innovation Hub, Tech District, San Francisco, CA 94105</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
