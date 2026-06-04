import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Terms of Service | TransitFlow',
  description: 'TransitFlow Terms of Service - The agreement between you and TransitFlow for using our platform.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 md:pt-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 1, 2025
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the TransitFlow platform (&ldquo;Service&rdquo;), you agree to be bound by these 
                  Terms of Service (&ldquo;Terms&rdquo;). If you disagree with any part of these terms, you may not 
                  access the Service. These Terms apply to all visitors, users, and others who access or use 
                  the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TransitFlow provides a cloud-based fleet management platform that includes GPS tracking, 
                  route optimization, analytics, driver management, and related services. The specific 
                  features available to you depend on your subscription plan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Account Registration</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To use certain features of the Service, you must register for an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and accept all risks of unauthorized access</li>
                  <li>Notify us immediately if you discover any unauthorized use of your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Subscription and Payment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  4.1 <strong className="text-foreground">Billing:</strong> You agree to pay all fees associated 
                  with your subscription plan. Fees are billed in advance on a monthly or annual basis and are 
                  non-refundable except as expressly set forth herein.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  4.2 <strong className="text-foreground">Auto-Renewal:</strong> Your subscription will automatically 
                  renew at the end of each billing period unless you cancel before the renewal date.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  4.3 <strong className="text-foreground">Price Changes:</strong> We reserve the right to modify 
                  our pricing. Any price changes will be communicated at least 30 days before taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Acceptable Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any malicious code, viruses, or harmful data</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data and Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of the Service is also governed by our Privacy Policy, which is incorporated into 
                  these Terms by reference. You acknowledge that you have read and understood our Privacy Policy 
                  and consent to the collection and use of your data as described therein.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  7.1 <strong className="text-foreground">Our IP:</strong> The Service and its original content, 
                  features, and functionality are owned by TransitFlow and are protected by international 
                  copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  7.2 <strong className="text-foreground">Your Data:</strong> You retain all rights to your data. 
                  By using the Service, you grant us a limited license to use, process, and store your data 
                  solely to provide and improve the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Service Level Agreement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TransitFlow commits to a 99.9% uptime Service Level Agreement (SLA) for our platform. 
                  Scheduled maintenance windows and force majeure events are excluded from SLA calculations. 
                  Specific SLA terms and remedies are detailed in your subscription agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRANSITFLOW SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, 
                  WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER 
                  INTANGIBLE LOSSES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 
                  TWELVE MONTHS PRECEDING THE CLAIM.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, 
                  FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend, indemnify, and hold harmless TransitFlow and its officers, directors, 
                  employees, and agents from and against any claims, liabilities, damages, losses, and expenses 
                  arising out of or in any way connected with your access to or use of the Service or your 
                  violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account and access to the Service immediately, without prior 
                  notice or liability, for any reason, including breach of these Terms. Upon termination, your 
                  right to use the Service will cease immediately. You may export your data within 30 days of 
                  termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of 
                  California, without regard to its conflict of law provisions. Any disputes arising under 
                  these Terms shall be resolved in the state or federal courts located in San Francisco County, 
                  California.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                  we will provide at least 30 days&apos; notice prior to any new terms taking effect. Your continued 
                  use of the Service after changes become effective constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">15. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="mt-4 p-4 bg-secondary rounded-xl">
                  <p className="text-foreground font-medium">TransitFlow Inc.</p>
                  <p className="text-muted-foreground">Email: legal@transitflow.io</p>
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
