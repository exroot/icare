import SEO from '../../components/SEO'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

const TermsContent = () => {
  return (
    <>
      <p tw="text-2xl pb-2 font-bold">Terms of Service</p>
      <p tw="pb-2">
        By using the SHOUTMO ("service"), you are agreeing to be bound by the
        following terms and conditions ("terms of service").
      </p>
      <p tw="pb-2">
        Little Island Design, LLC ("company") reserves the right to update and
        change these terms of service without notice.
      </p>
      <p tw="text-xl pb-2 font-bold">Account terms</p>
      <p tw="pb-2">
        You are responsible for maintaining the security of your account and
        password. The company cannot and will not be liable for any loss or
        damage from your failure to comply with this security obligation.
      </p>
      <p tw="pb-2">
        You are responsible for all content posted and activity that occurs
        under your account.
      </p>
      <p tw="pb-2">
        You may not use the service for any illegal purpose or to violate any
        laws in your jurisdiction (including but not limited to copyright laws).
      </p>
      <p tw="pb-2">
        You must provide your legal full name, a valid email address, and any
        other information requested in order to complete the optional paid
        membership signup process.
      </p>
      <p tw="pb-2">
        Your login may only be used by one person — a single login shared by
        multiple people is not permitted. You may create separate logins for as
        many people as you'd like.
      </p>
      <p tw="pb-2">
        You must be a human. Accounts registered by "bots" or other automated
        methods are not permitted.
      </p>
      <p tw="text-xl pb-2 font-bold">
        Payment, refunds, upgrading and downgrading terms
      </p>
      <p tw="pb-2">
        The service is offered for free with an option to sign up for more
        features with a free trial. Once that trial is up, you will only be able
        to continue using that plan's features by paying in advance for
        additional usage. If you fail to pay for additional usage, your account
        will be downgraded until payment is made.
      </p>
      <p tw="pb-2">
        For any upgrade or downgrade in plan level, will result in the new rate
        being charged at the next billing cycle. There will be no prorating for
        downgrades in between billing cycles.
      </p>
      <p tw="pb-2">
        Downgrading your service may cause the loss of features or capacity of
        your account. The company does not accept any liability for such loss.
      </p>
      <p tw="pb-2">
        All fees are exclusive of all taxes, levies, or duties imposed by taxing
        authorities, and you shall be responsible for payment of all such taxes,
        levies, or duties, excluding only United States (federal or state)
        taxes. Refunds are processed according to our fair refund policy.
      </p>
      <p tw="text-xl pb-2 font-bold">Cancellation and termination</p>
      <p tw="pb-2">
        You are solely responsible for properly canceling your account. An email
        or phone request to cancel your account is not considered cancellation.
        You can cancel your account at any time by clicking on the Settings link
        in the global navigation bar at the top of the screen. The Settings
        screen provides a simple no-questions-asked cancellation link.
      </p>
      <p tw="pb-2">
        All of your content will be immediately be inaccessible from the service
        upon cancellation. Within 30 days, all this content will be permanently
        deleted from all backups and logs. This information can not be recovered
        once it has been permanently deleted.
      </p>
      <p tw="pb-2">
        If you cancel the service before the end of your current paid up month,
        your cancellation will take effect immediately, and you will not be
        charged again. But there will not be any prorating of unused time in the
        last billing cycle.
      </p>
      <p tw="pb-2">
        The company, in its sole discretion, has the right to suspend or
        terminate your account and refuse any and all current or future use of
        the service for any reason at any time. Such termination of the service
        will result in the deactivation or deletion of your account or your
        access to your account, and the forfeiture and relinquishment of all
        content in your account. The company reserves the right to refuse
        service to anyone for any reason at any time.
      </p>
      <p tw="text-xl pb-2 font-bold">Modifications to the service and prices</p>
      <p tw="pb-2">
        The company reserves the right at any time and from time to time to
        modify or discontinue, temporarily or permanently, any part of the
        service with or without notice.
      </p>
      <p tw="pb-2">
        Prices of all services are subject to change upon 30 days notice from
        us. Such notice may be provided at any time by posting the changes to
        the company's site or the service itself.
      </p>
      <p tw="pb-2">
        The company shall not be liable to you or to any third party for any
        modification, price change, suspension or discontinuance of the service.
      </p>
      <p tw="text-xl pb-2 font-bold">Copyright and content ownership</p>
      <p tw="pb-2">
        All content posted on the service must comply with U.S. copyright law.
      </p>
      <p tw="pb-2">
        We claim no intellectual property rights over the material you provide
        to the service. All materials uploaded remain yours.
      </p>
      <p tw="pb-2">
        The company does not pre-screen content, but reserves the right (but not
        the obligation) in their sole discretion to refuse or remove any content
        that is available via the service.
      </p>
      <p tw="pb-2">
        The look and feel of the service is copyright© SHOUTMO. All rights
        reserved. You may not duplicate, copy, or reuse any portion of the HTML,
        CSS, JavaScript, or visual design elements without express written
        permission from the company.
      </p>
      <p tw="text-xl pb-2 font-bold">General conditions</p>
      <p tw="pb-2">
        Your use of the Service is at your sole risk. The service is provided on
        an "as is" and "as available" basis.
      </p>
      <p tw="text-xl pb-2 font-bold">
        Technical support is only provided via email.
      </p>
      <p tw="pb-2">
        You understand that the company uses third party vendors and hosting
        partners to provide the necessary hardware, software, networking,
        storage, and related technology required to run the service.
      </p>
      <p tw="pb-2">You must not modify, adapt or hack the service.</p>
      <p tw="pb-2">
        You must not modify another website so as to falsely imply that it is
        associated with the service or the company.
      </p>
      <p tw="pb-2">
        You agree not to reproduce, duplicate, copy, sell, resell or exploit any
        portion of the service, use of the service, or access to the service
        without the express written permission by the company.
      </p>
      <p tw="pb-2">
        We may, but have no obligation to, remove content and accounts that we
        determine in our sole discretion are unlawful or violates any party's
        intellectual property or these terms of service.
      </p>
      <p tw="pb-2">
        Verbal, physical, written or other abuse (including threats of abuse or
        retribution) of any service customer, company employee or officer will
        result in immediate account termination.
      </p>
      <p tw="pb-2">
        You understand that the technical processing and transmission of the
        service, including your content, may be transferred unencrypted and
        involve (a) transmissions over various networks; and (b) changes to
        conform and adapt to technical requirements of connecting networks or
        devices.
      </p>
      <p tw="pb-2">
        The company does not warrant that (i) the service will meet your
        specific requirements, (ii) the service will be uninterrupted, timely,
        secure, or error-free, (iii) the results that may be obtained from the
        use of the service will be accurate or reliable, (iv) the quality of any
        products, services, information, or other material purchased or obtained
        by you through the service will meet your expectations, and (v) any
        errors in the service will be corrected.
      </p>
      <p tw="pb-2">
        You expressly understand and agree that the company shall not be liable
        for any direct, indirect, incidental, special, consequential or
        exemplary damages, including but not limited to, damages for loss of
        profits, goodwill, use, data or other intangible losses (even if the
        company has been advised of the possibility of such damages), resulting
        from: (i) the use or the inability to use the service; (ii) the cost of
        procurement of substitute goods and services resulting from any goods,
        data, information or services purchased or obtained or messages received
        or transactions entered into through or from the service; (iii)
        unauthorized access to or alteration of your transmissions or data; (iv)
        statements or conduct of any third party on the service; (v) or any
        other matter relating to the service.
      </p>
      <p tw="pb-2">
        The failure of the company to exercise or enforce any right or provision
        of the terms of service shall not constitute a waiver of such right or
        provision. The terms of service constitutes the entire agreement between
        you and the company and govern your use of the service, super-ceding any
        prior agreements between you and the company (including, but not limited
        to, any prior versions of the terms of service).
      </p>
      <p tw="pb-2">
        Questions about the terms of service should be sent to
        support@shoutmo.com.
      </p>
      <p tw="pb-2">
        Any new features that augment or enhance the current service, including
        the release of new tools and resources, shall be subject to the terms of
        service. Continued use of the service after any such changes shall
        constitute your consent to such changes.
      </p>
      <p tw="pb-2 pt-2">Last updated September 23rd 2020</p>
      <br />
    </>
  )
}

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description={`By using the SHOUTMO ("service"), you are agreeing to be bound by the
        following terms and conditions ("terms of service").`}
        openGraph={{
          url: process.env.NEXT_PUBLIC_CLIENT_URL,
          type: 'website',
          description: `By using the SHOUTMO ("service"), you are agreeing to be bound by the
          following terms and conditions ("terms of service").`,
          images: [
            {
              url: process.env.NEXT_PUBLIC_CLIENT_URL + 'img/shoutmo.png',
              width: 1000,
              height: 300,
              alt: 'Shoutmo image',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Navbar />
      <TermsCard />
    </>
  )
}

function TermsCard() {
  return (
    <>
      <div tw="min-h-screen bg-gray-700 py-6 mt-12 flex flex-col justify-center sm:py-12">
        <div tw="relative py-3 sm:mx-auto">
          <div tw="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div tw="max-w-md mx-auto">
              <div tw="py-8 leading-6 space-y-4 text-gray-700 sm:leading-7">
                <TermsContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const NavItems = () => {
  const listStyles = css`
    ${tw`py-2 px-4
      cursor-pointer
      transition duration-500 ease-in-out
      uppercase
      font-light
      `}
    &:hover {
      text-shadow: -0.04em 0 #ff08ff, 0.04em 0 cyan;
    }
  `
  return (
    <>
      <div tw="flex flex-wrap font-bold">
        <Link href="/login">
          <a css={[listStyles, tw`mr-4`]} href="/login">
            login
          </a>
        </Link>
        <Link href="/signup">
          <a css={listStyles} href="/signup">
            signup
          </a>
        </Link>
      </div>
    </>
  )
}

const Navbar = () => {
  return (
    <>
      <nav tw="fixed w-full z-30 top-0 text-white bg-black">
        <div tw="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div tw="pl-4 flex items-center">
            <span>
              <LogoHero size={45} />
            </span>
          </div>
          <div tw="block pr-4">
            <NavItems />
          </div>
        </div>
      </nav>
    </>
  )
}

const LogoHero = ({ size }) => {
  const logoStylesforshoutmo = css`
      ${tw`
          uppercase
          text-white
          tracking-wide
      `}
      font-family: "basiclazer";
      /* blue glow - low intensity */
      text-shadow:  -0.04em 0 #ff08ff, 
      0.04em 0 cyan, 
      0 0 10px blue, 0 0 5px blue, 
      0 0 0px blue, 0 0 1px blue, 
      0 0 40px blue;
      /* no shadow */
      text-shadow:  -0.04em 0 #ff08ff, 0.04em 0 cyan;
  
      ${size ? `font-size: ${size}px;` : tw`text-5xl lg:text-6xl leading-none`};
  
      position: relative;
  }
  `
  return (
    <>
      <span css={logoStylesforshoutmo}>Shoutmo</span>
    </>
  )
}

export default Terms
