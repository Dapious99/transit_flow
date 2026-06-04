import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Cookie Policy | TransitFlow',
  description: 'TransitFlow Cookie Policy - Learn how we use cookies and similar technologies on our platform.',
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 md:pt-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 1, 2025
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you 
                  visit a website. They are widely used to make websites work more efficiently and provide 
                  information to the website owners. Cookies help us understand how you use our platform 
                  and enable us to provide you with a better experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TransitFlow uses cookies and similar technologies for several purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Authentication:</strong> To recognize you when you sign in and keep you logged in</li>
                  <li><strong className="text-foreground">Security:</strong> To protect your account and our platform from fraudulent activity</li>
                  <li><strong className="text-foreground">Preferences:</strong> To remember your settings and preferences</li>
                  <li><strong className="text-foreground">Analytics:</strong> To understand how visitors interact with our platform</li>
                  <li><strong className="text-foreground">Performance:</strong> To improve loading times and responsiveness</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="p-4 bg-secondary rounded-xl">
                    <h3 className="text-lg font-medium text-foreground mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      These cookies are necessary for the platform to function and cannot be disabled.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Session management</li>
                      <li>• Authentication tokens</li>
                      <li>• Security features</li>
                      <li>• Load balancing</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-secondary rounded-xl">
                    <h3 className="text-lg font-medium text-foreground mb-2">Performance Cookies</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      These cookies help us understand how visitors interact with our platform.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Page view analytics</li>
                      <li>• Feature usage tracking</li>
                      <li>• Error monitoring</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-secondary rounded-xl">
                    <h3 className="text-lg font-medium text-foreground mb-2">Functionality Cookies</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      These cookies remember your preferences and settings.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Language preferences</li>
                      <li>• Dashboard customizations</li>
                      <li>• Theme settings</li>
                      <li>• Map preferences</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-secondary rounded-xl">
                    <h3 className="text-lg font-medium text-foreground mb-2">Marketing Cookies</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      These cookies help us deliver relevant content and measure marketing effectiveness.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Campaign tracking</li>
                      <li>• Referral attribution</li>
                      <li>• Conversion tracking</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use third-party services that set cookies on our behalf:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Google Analytics:</strong> For website analytics and usage patterns</li>
                  <li><strong className="text-foreground">Intercom:</strong> For customer support and messaging</li>
                  <li><strong className="text-foreground">Stripe:</strong> For secure payment processing</li>
                  <li><strong className="text-foreground">Mapbox:</strong> For mapping and location services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookie Duration</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies can be either session cookies or persistent cookies:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                  <li><strong className="text-foreground">Persistent Cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have several options for managing cookies:
                </p>
                <h3 className="text-lg font-medium text-foreground mb-2">Browser Settings</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. You can typically 
                  find these options in the &ldquo;Options&rdquo; or &ldquo;Preferences&rdquo; menu of your browser.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Note:</strong> Disabling certain cookies may affect the 
                  functionality of our platform. Essential cookies cannot be disabled as they are required 
                  for the platform to operate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Do Not Track</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) feature. Currently, there is no industry 
                  standard for how companies should respond to DNT signals. Our platform does not currently 
                  respond to DNT signals, but we provide the cookie management options described above.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Updates to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page 
                  with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our use of cookies, please contact us:
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
