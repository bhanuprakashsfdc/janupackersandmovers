import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { COMPANY } from "@/constants/constants";

const Terms = () => {
  return (
    <HelmetProvider>
      <SEO
        title={`Terms & Conditions | ${COMPANY.name}`}
        description="Review the terms and conditions governing the use of our services and website."
        keywords="terms and conditions, service terms"
      />
      <Layout>
        <section className="section-padding">
          <div className="container-fluid max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-6">
              These terms govern your use of our services and website. By using our services,
              you agree to these terms.
            </p>
            <div className="space-y-4 text-foreground">
              <p>
                Service schedules and delivery timelines are estimates. Liability is limited
                as per applicable laws and service contracts.
              </p>
              <p>
                Payments, cancellations, and claims should be made through official channels.
                Contact us for any clarifications.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </HelmetProvider>
  );
};

export default Terms;
